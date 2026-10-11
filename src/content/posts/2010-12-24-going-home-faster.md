---
title: Going home... faster
date: '2010-12-24T08:28:53'
slug: going-home-faster
categories:
- General
comments:
- id: 8635
  author: Guy who thinks a bit more than Cedric
  date: '2010-12-24T12:19:06'
  content: '"surely long presses are an even better idea"

    Quad Erat Demonstupid. A halfway press and a full press take the same time, but short vs. long is very much a matter of perspective and perception. That''s why we are allowed to set double-click time and key repeat delays on our computers; while you may enjoy the feeling of waiting 3 seconds for multiple spaces or having your screen fill up with runaway whitespace because someone distracted you, the other person has their own sense of what feels right.

    The 2-position shutter button is a far superior idea in terms of user interface because of the tactile feedback and the arbitrary timing requirements.

    Though you do make a well thought out point regarding the way people hold different devices.'
  replies: []
- id: 8636
  author: Toby
  date: '2010-12-24T14:35:44'
  content: 'Just from my personal experience and interacting with other users:

    The long press on Android isn''t something casual users are even aware of, and they are often surprised when I explain it to them. Perhaps not the most intuitive design, though the same seems to hold for the half-press buttons on cameras.

    Also, the long press has been an occasional point of frustration on my old Android phone (a 1st gen MyTouch3G / HTC Magic). The device has a failry slow processor and a comparatively tiny amount of memory, so it''s fairly common for me to overload the system during normal operation and cause significant input lag, stuttering, and even force closes. In such a state, the long-press detection becomes a big problem, because what is intended to be a short press ends up detected as a long press because the system is thrashing between the press and the release event. Rather frustrating when I''m trying to type a text or email and instead of deleting three characters on backspace presses I lose whole paragraphs.'
  replies: []
- id: 8637
  author: Guy who thinks a bit more than Cedric
  date: '2010-12-24T15:57:12'
  content: 'Toby: Good point, and I agree. Depending on the engineers who implement it, a time-dependent control can be wildly messed up by whatever else is going on at the same time.

    Unless there is some dedicated timer for the button or its a high priority interrupt that captures time info in the handler, heavy loading could really mess up a guy''s or a gal''s day.

    Are you tweeting? At least then, your losses are limited to 140 chars....'
  replies: []
- id: 8638
  author: Guy who thinks a bit more than Cedric
  date: '2010-12-24T15:59:18'
  content: 'Also, to the site author: Whit time zone is your blog set to? It''s 1 hour behind PST, so.... Somewhere in the Pacific, perhaps 300 miles off the coast of California?'
  replies: []
- id: 8639
  author: Tim F.
  date: '2010-12-28T14:07:28'
  content: 'I think you should just stop reading Gruber. Gruber thinks its a clever solution; however, he doesn''t think the problem is real and he thinks the idea would introduce confusion and violate Apple design principles ("That??s a clever idea."  "But I think he??s solving a problem that doesn??t exist" and "How many people don??t understand the two-stop shutters on their cameras? (My guess: lots.) Plus, it would create a small exception to one of the key design tenets of iOS: when you??re in an app, everything you can do in that app is done on-screen." and "I still don??t think Raskin??s two-state home button is a good solution, but it??s worth pointing out that this does seem to be a problem for some people."'
  replies: []
- id: 8640
  author: wrightak
  date: '2010-12-28T15:31:48'
  content: If you long press the home button on the iPhone you get voice control. So you'd need to move that functionality somewhere else if you want the long press for navigation instead.
  replies: []
---

Aza Raskin [offers a suggestion to improve the iPhone's home navigation](http://www.azarask.in/blog/post/the-problem-with-home/): 

> Camera shutter buttons have a two-stop action. Half-press them to lock focus and aperture settings, fully press them to take the picture. There??s a delightful tactile indent at the half-way mark so that your fingers know what??s going on. Let??s borrow this two-stop action for the home button. Press half-way to go to the app??s main screen, all the way to go to the phone??s main screen. If you need to fully escape mash the button. If you just want to head back to the main-screen of the app, tap lightly. 

I agree that the need is real, but there is already a superior solution to this problem: long presses. 

If you agree that half presses are a good idea, surely long presses are an even better idea, because in a way, it's similar to leveraging [Fitts's Law](http://en.wikipedia.org/wiki/Fitts's_law), but for buttons. 

Fitts's Law states that the bigger the target is, the easier it is for users to reach it. Mac's menu bars are very easy to reach because their vertical size is virtually infinite: just move your mouse all the way to the top, it will bump against the screen and it will be positioned on the menu bar. 

I'll argue that the same applies to long presses. Instead of encouraging a design where you only half press the button (very small target area), press the button all the way (infinite target). Then either release right away or keep the button pressed for a short while. The half click works well on cameras because of the way you hold it, but I have a feeling that having similar accuracy on a phone will prove to be more challenging. 

Strangely enough, Gruber [likes Aza Raskin's idea](http://daringfireball.net/linked/2010/12/23/raskin-home), which, in some way, acknowledges that Android's long presses are not such a bad idea after all (but of course, he would never admit that).
