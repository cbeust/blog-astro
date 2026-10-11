---
title: Chrome and passwords
date: '2013-08-07T06:22:15'
slug: chrome-and-passwords
categories:
- General
comments:
- id: 9751
  author: Brandon
  date: '2013-08-07T07:44:09'
  content: All the other browsers will fall in line and implement a fix? You must be a time traveler... From the past ;-)
  replies: []
- id: 9752
  author: Weeble
  date: '2013-08-07T09:17:53'
  content: 'Does hashing the passwords help? They have to be available in plaintext to submit to websites. Either you store them encrypted and store a decryption key somewhere, or you store them in plaintext, which is pretty much equivalent. You can''t usefully store them hashed in the same way that websites store the hashes of passwords - the hash is enough to validate the password, but not enough to produce it on demand.

    I am not convinced by arguments about technical ability and time. Suppose they keep the existing system, but just remove the UI to show the passwords. All it takes is for somebody to write a Chrome extension and you''re back at square one. I don''t think the difference in expertise and time required between "knows how to find the password manager" and "can install a chrome extension" is really particularly high.

    The difference between burglars stealing physical objects and people stealing passwords on a computer is that burglars cannot download themselves better sneaking, searching and breaking skills like Neo in the Matrix. But anyone can download software written by people much more knowledgeable than themselves.

    All that said, I agree that passwords are horribly broken. I just don''t see any of the proposed solutions going around as anything but a fig-leaf. If your proposed solution is just to hide the UI, I think it provides only the most minor of speed-bumps and a sense of false security. If your proposed solution involves encrypting the passwords but doesn''t involve typing a master password whenever you want to use them, I don''t think you have understood the problem. If your proposed solution involves typing a master password whenever you want to use another password then I think it might work but that the vast majority of users will not accept it.'
  replies: []
- id: 9753
  author: Cd-MaN
  date: '2013-08-07T09:21:13'
  content: 'Just lamenting here: you know what''s sad? The fact that we have perfectly good technical solutions for this for more than decade now (the Secure Remote Password was devised in 2000 I think while client side certificates were part of SSL/TLS from the start) and we are still dancing around with passwords, putting bandaids around them.'
  replies: []
- id: 9754
  author: Chrome permite ver f??cilmente las contrase??as guardadas, pero es un problema exagerado
  date: '2013-08-07T10:32:37'
  content: '[&#8230;] ??el creador del post ha conseguido lo que quer??a, y el equipo de Chrome se estar?? reuniendo de urgencia para &#8220;solucionar&#8221; el problema. [&#8230;]'
  replies: []
- id: 9755
  author: None
  date: '2013-08-07T10:51:20'
  content: It's like the Turing halting problem. Compiler writers for decades refusing to do simple analysis because it was "impossible to prove" all cases even though it was very simple to find the vast majority of cases due to obviously absent counter/flag update in the loop bodies.
  replies: []
- id: 9756
  author: DarkGrayKnight
  date: '2013-08-07T11:04:30'
  content: IE already requires to re-authenticate before being able to view the passwords in clear text. So Chrome was the main browser to totally ignore this. Firefox has the option to have a master password, but that isn't on by default.
  replies: []
- id: 9757
  author: Ruby
  date: '2013-08-07T11:45:35'
  content: 'Crazy! That''s why I prefer a password manager. On my iPad I use TapIN, which I found to be the best browser password manager (auto login manager): https://itunes.apple.com//app/id554782625?mt=8'
  replies: []
- id: 9758
  author: Chrome permite ver f??cilmente las contrase??as guardadas, pero es un problema exagerado | Grupo Libre
  date: '2013-08-07T12:35:14'
  content: '[&#8230;] ??el creador del post ha conseguido lo que quer??a, y el equipo de Chrome se estar?? reuniendo de urgencia para &#8220;solucionar&#8221; el problema. [&#8230;]'
  replies: []
- id: 9759
  author: Sam
  date: '2013-08-12T16:37:36'
  content: 'If you really care about security, you won''t ask your browser to remember passwords in the first place.  I only allow my browser to store passwords for sites I don''t really care about.  Even if they add a master password feature, they''re still going to be transmitting your information into their cloud.

    This is a non-issue that''s blown completely out of proportion.'
  replies: []
- id: 9760
  author: Samuel
  date: '2013-08-24T13:57:12'
  content: 'As soon as you set a master password, Firefox not only encrypts the password jar on disk, but also requires that you type this password again to show saved passwords as clear text.

    But as the commenter above said, you better use a browser plugin such as LastPass or Password Hasher rather than trust your browser with your passwords.'
  replies: []
- id: 9761
  author: Pierre
  date: '2013-08-30T06:38:55'
  content: '"If you give me your clear text password, I can spend hours back home trying to log in various web sites without worries."

    Only if you use the same password on every website.

    Don''t blame Google for your own errors errors like:

    - not encrypting your hard drive

    - using the same passwords everywhere

    - not locking the OS session

    ....

    Yeah, let''s implement a master password like Firefox, easily circumvented by changing the CSS of any login page.'
  replies:
  - id: 9762
    author: Cedric
    date: '2013-08-30T07:05:13'
    content: You are missing the point. A master password is *not* easily circumvented by 99% of the population, which is why every browser on the planet (except Chrome, at least so far) supports it. I maintain my prediction that Chrome will soon support it as well.
    replies: []
- id: 9763
  author: Pierre
  date: '2013-08-30T07:38:39'
  content: 'First thing, there''s a contradiction in your reasoning.

    If 99% of the population know that you can access the passwords, then 99% would lock the screen.

    If 99% of the population don''t know that, then 99% would not be able to steal a password this way.

    BTW, it''s not "hidden". It''s in the settings, accessible by a few clicks. If it was accessible only by typing the Konami code, it would be hidden.

    Second thing, Safari and IE don''t have master password support (as far as I know). There''s software for mining IE passwords: http://www.howtogeek.com/68231/how-secure-are-your-saved-internet-explorer-passwords/

    Third thing, do 99% of Firefox users use a master password? My guess is that''s more like 1% (Firefox has anonymous usage reporting, they could give us the ratio right?).

    Fourth thing, there''s numerous 3rd party software that exist (e.g. LastPass). Like Android doesn''t have "Google Flashlight" but has dozens of flashlight apps.

    Fifth thing, if your friends/coworkers steal your passwords, they might as well steal money or cell phones. It''s a social problem more than an engineering problem. It''s like giving away the car keys and complaining that the car offers full access to anyone that has the key.

    Sure, the model can be improved (there''s a password-generating feature hidden in Chrome''s flags and it surely isn''t enough), but not this way.'
  replies: []
- id: 9764
  author: Pierre
  date: '2013-08-30T08:22:49'
  content: OK, Safari "prompts you for your machine password before showing you its passwords", my bad.
  replies: []
- id: 9765
  author: Cedric
  date: '2013-08-30T08:51:08'
  content: '> OK, Safari ??prompts you for your machine password before showing you its passwords??, my bad.

    So tell me again, why is this such a bad idea that it warrants a five-point rebuttal?'
  replies: []
- id: 9766
  author: Pierre
  date: '2013-08-30T10:24:55'
  content: '"why is this such a bad idea"

    I actually never meant this, maybe I wasn''t very clear.

    I''m agnostic on this and none of my arguments concerns the usefulness and merits of a master password.'
  replies: []
- id: 9767
  author: Fabrizio Giudici
  date: '2013-11-04T06:49:23'
  content: 'C??dric,

    it sounds as your prediction is coming true:

    http://www.engadget.com/2013/11/04/google-security-saved-passwords-chrome-mac

    (I haven''t tried it yet).'
  replies:
  - id: 9769
    author: Cedric
    date: '2013-11-04T08:06:25'
    content: Indeed, thanks for the link, Fabrizio!
    replies: []
- id: 9768
  author: Fabrizio Giudici
  date: '2013-11-04T07:12:55'
  content: Ok - it looks as they actually did it in the right way, delegating to the operating system KeyChain tool, just as Safari works. This probably also explains why at the moment it only works with Mac OS X.
  replies: []
---

An innocent [blog post](http://blog.elliottkember.com/chromes-insane-password-security-strategy) demonstrating that it's trivial for anyone to see passwords in clear in Chrome is slowly building up into a whole scandal. The Chrome team was [quick to respond](https://news.ycombinator.com/item?id=6166886) but unfortunately, that answer simply poured oil on a fire that was already burning quite brightly. 

Here are a few predictions: 

  * As we speak, the Chrome team is having an emergency meeting to discuss the situation.
  * Within a few days, they will announce that they are going to fix the problem.
  * In a couple of weeks, the next version of Chrome will no longer display passwords in clear without additional action from the user.
  * In the months that follow, the other browsers will fall in line and implement a similar fix (_Update: Safari already prompts you for your machine password before showing you its passwords, thanks Fabrizio for pointing this out_).

I'm guessing Justin Chuh is probably regretting answering so hastily (you know you're in hot water when [Sir Tim Berners Lee calls your answer "disappointing"](https://twitter.com/timberners_lee/status/364839351651274752)) and this might be a good illustration of being immersed into a domain for so many years that you start missing out on obvious things. We've all been guilty of this at some point, where our own expertise is reinforcing a flawed premise and that very expertise is preventing us from being critical of that very same premise. 

The general idea is that once someone has physical access to a resource you are trying to secure, that resource is pretty much gone, so you shouldn't spend too much time trying to address that scenario. 

A common response to this is that once someone gains access to your computer, they can still log into your favorite web sites without knowing your passwords, but this is a straw man: the exposure of your passwords in clear text can be devastating since this knowledge can then be used to many more web sites. If you give me a password cookie, I can only log to so many web sites in a few minutes. If you give me your clear text password, I can spend hours back home trying to log in various web sites without worries. 

The danger with the "physical access is not worth addressing" premise is that it's tempting to do absolutely nothing to address this case (which is what most browsers do, Chrome is not the only culprit here) instead of doing at least a minimum. For example, maybe you have some cash in your home that you save for emergencies and you are wondering where to hide that money. Just because a burglar inside your house can steal whatever they want at that point doesn't mean you shouldn't at least make it a bit harder for them. Surely, hiding that cash inside socks in a drawer is a bit more secure than leaving it in plain sight on the kitchen table. 

This added bit of security can be crucial for two reasons: 

  * It raises the technical bar on the thief. With the current situation, someone who sits down in front of your unlocked workstation can know your passwords within ten seconds and just a few clicks. Hash and hide these passwords and suddenly, reading them is no longer accessible to a large part of the population.
  * Time is also a factor. When someone gains access to your computer, they might only have a few minutes and anything you can do to delay them (such as installing a hash decrypter) is that much time they don't have to steal something else.

Whatever happens, I think we will all come out of this situation with more secure browsers.
