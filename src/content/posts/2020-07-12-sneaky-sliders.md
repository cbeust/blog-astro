---
title: Sneaky sliders
date: '2020-07-12T19:19:07'
slug: sneaky-sliders
categories:
- Uncategorized
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/gary-larson-gifted.jpg)

Gary Larson showing the danger of extrinsic affordance 

_Warning: if you are using a MacBook today, this article is likely to blow your mind by showing you something you had no idea your computer can do._ I always get excited whenever I discover a new user interface experience. 

I know a lot of people claim that not much has been invented since [WIMP](https://en.wikipedia.org/wiki/WIMP_\(computing\)) ("Windows, Icons, Menus, Pointer"), the UX experience that was invented at Xerox PARC in the early 70s. That's obviously an egregious simplification. Yes, we are still using the very same metaphors that the visionaries at PARC came up with fifty years ago, but a tremendous amount of UX inventions have occurred since then. 

This is not the point of my post here, but since I will most likely be asked what UX innovations have occurred since then, I feel obligated to mention a few. Maybe these won't be convincing, but at least, they might introduce a little bit of wavering into these questioning minds: 

  * Flat icons. These feel pretty mainstream today, but back in the late 90s, the fierce debate around affordances (I will get back to this word shortly) made it so that if you want to have a button in your interface, that button needs to be in 3D: if it can be pushed, it needs to show a 3D border. Makes sense, right? And then one day, Microsoft changed our world by publishing a toolbar made entirely of flat icons. Which could be pushed. Madness! Yet... the user population adjusted overnight, proving that maybe, the concept of affordance is overrated. 
  * Verbose scrollbar thumbs. You know how you are sometimes scrolling through a document made of hundreds of pages, using the scroll bar, and while you are scrolling that thumb in the scroll bar, you have no idea where you are? Well, one day, Microsoft (them again!) decided to add a tooltip to that thumb which indicates where you are. Today, this seems like a pretty mainstream idea but it was pretty innovative back then. Such an obvious idea today and yet totally unobvious back then. The kind of concept that nobody thinks of until someone comes up with it, and then it's the most natural thing in the world. You can find this UX pattern everywhere today: Android, iOS, Windows, macOS, etc... 
I got pretty excited lately because I came across not one but two user interface interactions that I had never seen before. And it turns out these two interactions are actually quite similar. And they violate a few basic UI laws too. 

The first encounter came during my [Unity project](/weblog/2020/06/07/writing-my-first-game-in-unity/). 

Unity has a lot of user interface components and many of them display discrete or continuous values (e.g. integers, floats) in text fields. Obviously, these text fields have a label, so you can identify what they represent (and these values often map to public fields in your C# code). The novelty here is even though the labels look like very standard labels, they are actually concealing a slider if you click on them and then drag your mouse: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/unity-slider.gif)

There is no static affordance showing you what you can do with these labels (probably because even if such hints were very discreet, the whole Unity UI would immediatly look overcrowded since these text fields are everywhere. This is most likely the same reason that led Microsoft to flatten the toolbar: because all these 3D buttons make the UI look very cluttered). The cursor does change as soon as you hover over the label, though, with an icon clearly indicating that you can perform an action there. 

Even though this widget breaks the affordance rule, using it turns out to be pretty straightforward and actually incredibly convenient since playing with values in this way is an extremely frequent action in Unity. 

My second encounter with a new UI came from the most unexpected place: my MacBook Pro laptop. And more specifically, its Touch Bar. 

The Mac Book Touch Bar remains pretty controversial and polarizing, even today. I am still not a fan and I have just grown to tolerate it, and personally, I would absolutely not mind going back to a row of good old keys. The widget I am talking about right now is the volume control. 

If you are like me until not long ago, changing the volume on your Mac Book is pretty straightforward: tap on the volume icon, the UI gets replaced with a slider, move that slider, exit the volume mode. 

As it turns out, the volume icon happens to be one of these "sneaky sliders", exactly like the one I showed above in Unity: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/volume-macbook.gif)

As the video shows: if you don't tap but actually keep the icon pressed for just a bit longer, the slider appears and you can control it directly from the icon, without having to move your finger from the icon. 

This is another example of a control breaking the affordance rule, thereby making its discoverability very unlikely, but which, once identified, turns out to be a very useful UI interaction. I use it all the time these days (and obviously, it doesn't apply just to the volume, try it on the brightness control). 

I wonder how many other hidden user interface controls I am not aware of today...
