---
title: 'A PC XT Emulator Journey'
date: '2026-11-18T19:00:00'
slug: pc-xt-emulator-journey
draft: true
categories:
- Uncategorized
---

After the Apple 2 and NES, I decided to embark on my next emulator project: a PC XT, which I named “Dos Ex Machina” (“dos ex” for short).

I’ve wanted to become more familiar with the 808x family for a long time and so far, this has been a great learning experience, not just for this processor but also learning more about MS-DOS, which is basically the operating system that ended up defining several decades of computer use.

The first task was obviously to implement the processor, and thanks to the amazing Single-Step Tests, I was able to build an 8086 implementation that passed all the tests fairly quickly. It was also my first exposure to the very different operations and addressing modes that the 8086 offers compared to the 6502.

<div class="flex flex-col items-center my-6 not-prose">
  <a href="/pics/sst-8086.png" target="_blank" class="block w-full sm:w-2/3 overflow-hidden rounded-xl border border-base-200 hover:border-[#0071BB] transition shadow-xs">
    <img src="/pics/sst-8086.png" alt="Pic 1" class="block w-full h-auto hover:scale-105 transition duration-200" />
  </a>
  <p class="mt-1.5 text-xs text-base-600 text-center">
    The Single Step Tests for 8086
  </p>
</div>

Then I tackled the emulator itself, with the next milestone being able to boot an MS-DOS disk.

## Basic boot

 The process here is no different than any computer booting: first read the boot sector (512 bytes on cylinder 0, sector 0), run it, implement the BIOS operations it needs, which are mostly limited to loading more cylinders from the disk and then transferring control there.

This was my first exposure to the way that the 8086 interacts with the external world. The 6502 doesn’t really have any such facilities so most of this is achieved with MMIO (accessing specific memory addresses causes a side effect that interacts with devices outside the 6502). The 8086 uses instructions IN and OUT to interact with the outside world and also has the INT instruction which jumps to an indirect address defined in an array of vectors in low memory.

Obviously, it’s also necessary to display progress of the boot, so I had to implement CGA in text mode, which turns out to be pretty easy (each character is represented by two bytes: character byte and attributes, which define its color. You can completely ignore  this byte in the early stage just so you can show something on the screen).

<div class="flex flex-col items-center my-6 not-prose">
  <a href="/pics/dos-ex-01.png" target="_blank" class="block w-full sm:w-2/3 overflow-hidden rounded-xl border border-base-200 hover:border-[#0071BB] transition shadow-xs">
    <img src="/pics/dos-ex-01.png" alt="Pic 1" class="block w-full h-auto hover:scale-105 transition duration-200" />
  </a>
  <p class="mt-1.5 text-xs text-base-600 text-center">
    Humble beginnings
  </p>
</div>


In this early step, you can also completely skip BIOS considerations and just provide a high level emulation (HLE, in Rust) of the requested services. For example, when the boot code calls an interrupt to display a character, simply intercept that call and display it at the right coordinates on the screen.

It’s surprisingly easy to reach a basic MS-DOS prompt this way, so the next step was to remove the HLE, install a BIOS and implement the correct backend mechanisms.

## BIOS

<div class="flex flex-col items-center my-6 not-prose">
  <a href="/pics/glabios.png" target="_blank" class="block w-full sm:w-2/3 overflow-hidden rounded-xl border border-base-200 hover:border-[#0071BB] transition shadow-xs">
    <img src="/pics/glabios.png" alt="Pic 1" class="block w-full h-auto hover:scale-105 transition duration-200" />
  </a>
  <p class="mt-1.5 text-xs text-base-600 text-center">
    GlaBIOS coming to life
  </p>
</div>

I picked [GlaBIOS](https://glabios.org/), a free BIOS.

The first hurdle is the Power On Self Test (POST). When run at boot, the BIOS does a quick check of all the various components (memory, keyboard, floppy, timer, …) and issues an error if it detects any problem. Since I had nothing implemented at this stage, the BIOS errored out pretty early, but it was pretty easy to return stubbed answers in lieu of the actual responses in order for the BIOS to proceed until it gives control to the content of the floppy disk.

The main difference with the HLE approach is that instead of intercepting the interrupt and implementing it manually (e.g. display character ‘A’ at coordinates 10,10), the BIOS will instead output these values directly in graphic memory, so you need to implement true CGA support for that next phase.

## Floppy disk

Disk images are captured in .img​ files which are a simple dump of all the bytes on the disk, sector after sector. The geometry of the file depends on the type of image you are emulating (e.g. floppy disk vs/ hard drive). In this early phase, I only needed to implement support for floppy disks, and the PC XT uses DMA in order to transfer bytes between the floppy disk and system memory, so I had to implement both the floppy disk operations and also DMA access. The clean separation between these two systems is quite elegant, as opposed to the Apple 2, which doesn’t have such clean boundaries.

## Graphics

The next step was graphics. CGA is a pretty simple format with the only quirk that even and odd lines are not contiguous (not unlike the Apple 2, which has an even stranger frame buffer layout).

In lower resolution (320x200), CGA only has four colors so each pixel is represented by two bits which index into the selected color palette. Higher resolution (640x200) only has two colors, so each pixel is represented by one bit.

<div class="flex flex-col items-center my-6 not-prose">
  <a href="/pics/ultima-3.png" target="_blank" class="block w-full sm:w-2/3 overflow-hidden rounded-xl border border-base-200 hover:border-[#0071BB] transition shadow-xs">
    <img src="/pics/ultima-3.png" alt="Pic 1" class="block w-full h-auto hover:scale-105 transition duration-200" />
  </a>
  <p class="mt-1.5 text-xs text-base-600 text-center">
    Ultima 3 is always beautiful, even in CGA
  </p>
</div>

## Quality of life

At this point, I have several games and disk images successfully booting and running but juggling them started to be time consuming, especially since some of them boot directly while others need a DOS disk to boot first, and then transfer control to. So I decided to add a feature to my emulator that would make my life easier.

The idea is simply to check out which disks are inserted in A and B and depending on that information, inject key strokes in order to automatically boot to where I want the game/app to be. For example, DOS typically asks you for date and time when it boots (skip that by injecting two return keys), then switch to drive B:, then cd to a directory, and then run the executable.

```rust
/// Inject keys at boot time depending on which disks are inserted
pub const SCRIPTS: &[(&str, &str)] = &[
    ("prince", "\r\rb:\rprince.exe\r"),
    ("duck", "\r\rb:\rb:duck.exe\ry"),
    ("dos", "\r\re:\r"),
];
```

This made testing my emulator (both manually and automatically) much easier and it was also a good opportunity for me to get a deeper understanding of how to hook into the BIOS/DOS process in order to inject keys in the best way possible. I started gaining a strong appreciation on how all these pieces interact with each other, but more on this later.

## Hard drive

Now that I had multiple floppy disks booting and running correctly, it was time to look at the next step: hard drive support. While hard drive images are stored in exactly the same way as floppy disks, the PC XT handles them differently from floppy disks, but in the end, the same code providing resolution of cylinder/head/sector to physical addressing can be reused.

Hard drive support was easy to implement but at that point, I faced my next challenge.

There is a lot of abandonware games/apps that are available to test a PC XT emulator, but most of them are provided in “exploded” form: a zip file containing all the files in a directory (.COM, .EXE, assets, etc…). At this time, my emulator only knows how to manage .img files, not exploded directories.

A simple solution is to build an app that will transfer files from my local hard drive to an .img file, and that’s a utility that I actually already have. Still, the process is tedious and I thought I would really prefer to download the app on my hard drive and have my emulator magically see it and be able to change directory to it and run apps directly from there.

## Virtual file system

Since this is such a convenient feature, DOSBox supports it with the `imgmount`​ command but I decided that I wanted to write as little assembly and as much Rust as possible, so I looked into providing this support with HLE again.

After a great deal of research and a lot of reading, I learned more about how flexible MS-DOS was and how it makes it easy to plug into various areas of disk management. In particular, the feature I was looking for is called “Network redirector”, and this is how MS-DOS provided support for CD ROMs and other mass storage.

In a nutshell, there are two ways to expose a local hard drive to MS-DOS. You can go low level, which leverages the BIOS but requires you to emulate a lot of low level access (basically filling strategic memory areas that DOS manages), or you can skip the BIOS and just implement higher level primitives to essentially expose a virtual file system. These higher level commands are the likes of Open File, Load File (in memory), Find First / Find Next (to enumerate files, e.g. for the “dir” command”), etc…

I decided to go for this approach since it requires a lot less extremely details DOS emulation, but before I got there, I had one more thing to do: wait for MS-DOS to boot and then run a few instructions of assembly to query some important information from the operating system, so that I can hook my network redirector.

This is something I have never needed to do in my previous emulators, but it ended up being pretty easy. First, MS-DOS has several points in its boot process that you can reliably wait for, and when you reach such a point, you just need to 1) save all registers/flags 2) run the assembly you need 3) save the results in your internal structure 4) restore registers/flags and finally 5) resume CPU ticking.

```rust
    /// Return (major, minor)
    fn get_dos_version(&mut self) -> (u8, u8) {
        // B4 30    MOV AH, 30h
        // CD 21    INT 21h
        // F4       HLT
        let code = [0xb4, 0x30, 0xcd, 0x21, 0xf4];
        let (al, ah) = self.run_assembly(&code, AL, AH);
        (al as u8, ah as u8)
    }
```

Once these “shims” were in place and running, I was able to see the interrupt 2Fh correctly routed to my virtual file system, and after that, it was just a matter of implementing each command, one by one. While some details of the implementation can be a bit gnarly, the process is pretty much the same for all commands: read the parameters (passed in registers and in specific DOS memory), execute the operation requested on your local hard drive (open file, transfer bytes from the file into memory, etc…), update the parameters and DOS memory, and return.

<div class="flex flex-col items-center my-6 not-prose">
  <a href="/pics/disks.png" target="_blank" class="block w-full sm:w-2/3 overflow-hidden rounded-xl border border-base-200 hover:border-[#0071BB] transition shadow-xs">
    <img src="/pics/disks.png" alt="Pic 1" class="block w-full h-auto hover:scale-105 transition duration-200" />
  </a>
  <p class="mt-1.5 text-xs text-base-600 text-center">
    How the disks are mapped
  </p>

  <a href="/pics/vfs.png" target="_blank" class="block w-full sm:w-2/3 overflow-hidden rounded-xl border border-base-200 hover:border-[#0071BB] transition shadow-xs">
    <img src="/pics/vfs.png" alt="Pic 1" class="block w-full h-auto hover:scale-105 transition duration-200" />
  </a>
</div>

Next thing I know, the drive E: in my emulator is mapped to my local hard drive and I am now able to download and run pretty much anything I put my hands on, which makes testing the emulator much easier.

<div class="flex flex-col items-center my-6 not-prose">
  <a href="/pics/ultima-1.png" target="_blank" class="block w-full sm:w-2/3 overflow-hidden rounded-xl border border-base-200 hover:border-[#0071BB] transition shadow-xs">
    <img src="/pics/ultima-1.png" alt="Pic 1" class="block w-full h-auto hover:scale-105 transition duration-200" />
  </a>
  <p class="mt-1.5 text-xs text-base-600 text-center">
    Ultima 1
  </p>
</div>

<div class="flex flex-col items-center my-6 not-prose">
  <a href="/pics/ultima-2.png" target="_blank" class="block w-full sm:w-2/3 overflow-hidden rounded-xl border border-base-200 hover:border-[#0071BB] transition shadow-xs">
    <img src="/pics/ultima-2.png" alt="Pic 1" class="block w-full h-auto hover:scale-105 transition duration-200" />
  </a>
  <p class="mt-1.5 text-xs text-base-600 text-center">
    Ultima 2
  </p>
</div>

<div class="flex flex-col items-center my-6 not-prose">
  <a href="/pics/prince-of-persia.png" target="_blank" class="block w-full sm:w-2/3 overflow-hidden rounded-xl border border-base-200 hover:border-[#0071BB] transition shadow-xs">
    <img src="/pics/prince-of-persia.png" alt="Pic 1" class="block w-full h-auto hover:scale-105 transition duration-200" />
  </a>
  <p class="mt-1.5 text-xs text-base-600 text-center">
    Prince of Persia
  </p>
</div>

## Next steps

Now that I have verified that my emulator correctly runs a lot of CGA games (I usually test the Ultima series first, for nostalgia reasons), it is now time to turn my attention to EGA.

My early readings on this format make me pretty excited: there’s going to be a lot of bit shifting, latches, rotation, modes, etc… All of the fun stuff that I have great joy implementing in emulators. I can’t wait to see these improved graphics displayed in my emulator.