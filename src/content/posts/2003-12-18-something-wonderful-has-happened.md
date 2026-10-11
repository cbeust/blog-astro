---
title: Something wonderful has happened
date: '2003-12-18T09:11:21'
slug: something-wonderful-has-happened
categories:
- Java
---

It took me a while to get my first virus but as some of you already know, it happened [not long ago](http://beust.com/weblog/weblog/archives/000011.html).  Well, it happened again, but things were a little bit worse this time.

A few days ago, my home network started acting up, mysteriously crawling to a halt to the point where 90% of my packets couldn't even reach my gateway.  I soon identified the faulty machine and I disabled the network interface until I had time to deal with the problem, because solving it would probably require me to resort to a packet sniffer.  I finally found some time to investigate the issue.

My first quick attempt was to selectively kill tasks and see if the network comes back to normal, but this method didn't produce any results.

The last time I used a packet sniffer was about fifteen years ago, on a Unix machine.  If you've never used one, it's quite enlightening, if not scary.  Things have progressed quite a bit since that time but except for a fancy graphic interface, the basic idea is the same:  your machine needs to be in promiscuous mode (the default in Windows XP and 2000, which makes things easier and is not a problem in a home network).  Of course, you need to be using a hub ant not a switch, or you won't be seeing all the packets broadcast through your network.

A quick search revealed a host of packet sniffers on Windows and I settled on AnalogX's PacketMon.  It's free, offers some basic filtering capabilities and fits the bill for my simple problem.

I launched the program on another machine, re-enabled the network interface on the patient and blam! the screen immediately starts scrolling at an alarming rate.  The verdict was pretty clear:  my machine was sending a stream of ICMP requests to IP addresses in decreasing order.  There is no better way to spell "infected by a virus".

I downloaded an anti-virus, disabled the network interface and started the long and painful scan.  In the meantime, I did some research on the Web and based on the symptoms and the ports and packets used, my suspicion quickly narrowed down on the [ Welchia virus](http://securityresponse.symantec.com/avcenter/venc/data/w32.welchia.worm.html), which the anti-virus quickly confirmed.

Fortunately, getting rid of it is straightforward and only requires a full scan of your hard drive.  You can also download a separate [ remover](http://securityresponse.symantec.com/avcenter/venc/data/w32.welchia.worm.removal.tool.html) which will accomplish the same job.

Interestingly, even after I removed the virus and confirmed with the packet sniffer that everything was back to normal, my machine was still the target of a lot of requests (both TMP and ICMP) from a wide variety of geographic locations.  My firewall doesn't have many ports open and since these requests were now initiated from the outside, they were of no concern to me, but I ended up wondering if these requests came from other randomly infected machines on the Internet or if they were buddy machines that the virus had identified and started exchanging information with.
