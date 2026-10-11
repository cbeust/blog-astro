---
title: Knowledge casts
date: '2011-08-12T11:59:53'
slug: knowledge-casts
categories:
- General
comments:
- id: 9207
  author: Ray Ryan
  date: '2011-08-12T12:13:38'
  content: Thanks for sharing this, Cedric. What makes you prefer Car Cast to Listen?
  replies: []
- id: 9208
  author: Jeremy Ross
  date: '2011-08-12T13:59:29'
  content: 'I had the same problem a couple of years ago: I needed to turn a directory of audio files into a podcast feed that iTunes could consume. I created a cgi file (Python) that you can drop into a directory on your web server. https://github.com/jeremyross/Podcastifyer'
  replies: []
- id: 9209
  author: Frank Harper
  date: '2011-08-12T21:22:28'
  content: 'I''ve been using Doggcatcher for the last 1.5 years and feel it was well worth the 5 euros I paid for it. It downloads the subscribed podcasts automatically when I''m on WiFi and also has variable speed playback. Sometimes the playback controls do seem a bit small/hard to manipulate when I''m out and about; so Car Cast wins on that one.

    Contentwise, since I''m not commuting, nor driving much in Paris, I have way too much already... TAL, RadioLab, Planet Money, IOT, Intelligence Squared, SALT, The Moth'
  replies: []
- id: 9210
  author: Lars Fischer
  date: '2011-08-12T22:43:23'
  content: Great Article! I use HeyWatch for all the conversion stuff - but it's not free...
  replies: []
- id: 9211
  author: Robert Konigsberg
  date: '2011-08-14T18:58:39'
  content: 'Good thinking.

    I recently tried converting audio clips of an AVI to MP3. That took more work than the payoff, so I''m glad for the reference for a potentially better tool to try in the future.

    I''m still hooked on my iPod for audio, which doesn''t change things that much.

    I''m almost tempted to ask you, yes, you, Cedric, to republish said podcasts you find interesting as a feed for the rest of us. I''ll commit to paying you right now for your time and hosting fees.'
  replies: []
- id: 9212
  author: Cedric
  date: '2011-08-14T19:23:46'
  content: 'Rob: I''ve been thinking about this but the bandwidth costs notwithstanding, I''m not very comfortable with the idea of redistributing this content without getting permission first, which is obviously not very convenient. I know it came from YouTube, but still...'
  replies: []
- id: 9213
  author: Robert Konigsberg
  date: '2011-08-14T22:29:33'
  content: Yeah, that's fair.
  replies: []
- id: 9214
  author: Charles Crouch
  date: '2011-08-15T12:40:39'
  content: 'Cedric: How about just creating a public youtube playlist of what you are listening to? No redistribution problem there. Then if someone wants to get just the audio, they can follow the process you describe. For those that don''t, they still get a stream of good curated content.'
  replies: []
- id: 9215
  author: Bruno
  date: '2011-08-31T05:30:06'
  content: 'As for the content, I guess you already know Java Posse and SE-Radio. I would just suggest http://risky.biz/netcasts/risky-business both technical and very funny and enjoyable.

    As for YouTube, I admit that there is so much content already available as Podcast, that I don''t feel the need yet.

    http://gpodder.net/user/bruno/subscriptions'
  replies: []
- id: 9216
  author: Michel Buffa
  date: '2011-09-19T07:25:04'
  content: 'I recommend only french crazy ones : look for "l''inaudible" or Walter Proof''s chronicles, kind of "l''oeil du cyclone" in a podcast format, without video, and my favorite : "l''apero de captain web", on captainweb.net, 3hours each, and they keep drinking alcool during the podcast so it always starts seriously and becomes crazy as it goes... I recomment the cult #81 made for "la f??te de la musique" with both a very good dossier on the mod tracker''s music era + a very good, very crazy version of star academy... These guys are really good at speaking at our lovely old mahines (amiga, atari st, etc) + comment with 2nd degree actual things...'
  replies: []
---

There is a lot of great and interesting content on YouTube for anyone interested in learning new stuff. Between keynotes, conference presentations, lectures from professionals to professionals or classes from teachers to students, the amount of things that you can learn is just staggering. The problem is that I'm having a very hard time watching videos on the Internet for long periods of time. Even if I purposely carve out a half hour in my day to watch a video, it never takes long before my mind starts wandering and I get tempted to check email, the end of a compilation or any of the dozens of other distracting things that happen on a computer connected to the Internet. 

What's frustrating is that most of this content wouldn't lose much without the visuals: the slides are usually more useful for the speaker than for the audience, and whatever is written on them is typically a shorter version of what you are about to hear anyway. 

Solving the distraction problem requires finding a better device to play this content, which leads me naturally to my phone. Between commuting, walking the dog or waiting in line somewhere, there are many opportunities to play this content throughout the day with a lot less distraction than when sitting at my computer. 

With that in mind, I started looking for a solution to this problem, which I decomposed in three parts. 

#### Converting

The first step is to convert these videos in an audio file (mp3 or other). There are a lot of web sites that provide this service for free and I ended up picking [Video2mp3](http://www.video2mp3.net/). You enter the URL of the YouTube video you need and a few minutes later, you download the corresponding mp3. This site also offers a Chrome extension that adds a very convenient "Convert to mp3" button to the YouTube page, so converting videos into mp3 has turned into a one button operation. 

It's probably a service that YouTube should offer. 

#### Transferring

Now that I have an audio file, I need to transfer it on my phone. As an Android user, I have a deeply seated hatred for cables (this is the 21st century, people!) so I'd like this to happen over the air. Another concern is disposing of the file: once I have finished listening, I don't want to have to delete it manually, like I would have to do if I just copied this file on my SD card and played it with a music player. 

Do you know what's perfect for this? Podcasts. What if I could turn this audio file into a podcast so I could play it with a podcast app? Podcast apps perform this kind of management automatically so that I never have to worry about cleaning up. The only remaining problem is that podcast apps usually connect to podcast feeds (as far as I know, happy to be hear about more clever apps), so I would have to set up such a feed. 

Setting up a podcast feed turned out to be trivial: it's a forty line script written in, [you guessed it](http://beust.com/weblog/weblog/2011/08/09/i-like-php/)... Perl! Just kidding, it's PHP, of course. 

The script scans a directory and returns the ten most recent files as a podcast RSS feed. Now, all I need to do once I have the audio file is copy to my server in the right directory and I'm done. 

#### Playing

All that's left to do is ask the podcast application on my phone to sync and the file is magically transferred over the air on my Android phone. 

I have been using [Car Cast](https://market.android.com/details?id=com.jadn.cc&feature=search_result) for a few months now (there's a free and a pro version) and I'm very happy with it, but I'm always interested in hearing about alternatives, so feel free to share what Android podcast application you prefer. 

Ideally, I'd like to automate this process even further: having a button on the YouTube page that will automatically convert the file to audio and add it to my podcast feed. Until then, the current procedure seems to be working great and it has already provided me with a lot of content I would never have watched otherwise. 

Speaking of suggestions, what kind of content would you recommend for this kind of approach? Recently, I've enjoyed listening to the OSCon 2011 keynotes (I especially recommend [Bob Lee](http://www.youtube.com/watch?v=k-PyVYY7QFI) and [Martin Odersky](http://www.youtube.com/watch?v=3jg1AheF4n0&feature=relmfu)), [Stephen Hawking's "Did god create the universe"?](http://www.youtube.com/watch?v=BuOxTiotS9Y) and pretty much anything that Neil deGrasse Tyson publishes, especially his [Universe](http://www.youtube.com/watch?v=sidLNXlTyU4) series. 

What do you listen to?
