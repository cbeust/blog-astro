---
title: Fighting spam with spam
date: '2003-08-11T09:15:32'
slug: fighting-spam-with-spam
categories:
- Java
comments:
- id: 278
  author: Adam Fitzpatrick
  date: '2003-08-11T22:59:14'
  content: 'True, you do have to basically become a spammer to be able to abuse this proposed feature.

    But what if you already are a spammer? I bet they would love to be handed on a platter a tool to attack organisations hosting spam-blocking lists and anti-spam campaigns. Just add an extra URL to each spam -- make it white text on white, so the human spam recipient won''t even notice that it''s there, and you''re done.'
  replies: []
- id: 279
  author: Grahame Murray
  date: '2003-08-12T21:47:41'
  content: 'Regarding spamming their ordering system with bogus purchases: Isn''t this just as susceptible to abuse as DDOSing them?  You have no way of knowing that the URL given really belongs to that spammer, and you might DDOS a legit company.  Just a thought.

    My philosophy, evil begets evil.  Responding to a spammer in kind will probably come back to get you later.'
  replies: []
- id: 280
  author: Carl Ross
  date: '2004-07-01T02:55:05'
  content: 'Please visit my website.

    Carl Ross o'
  replies: []
- id: 281
  author: toenail fungus home remedy
  date: '2006-09-19T04:02:35'
  content: thank
  replies: []
---

Paul Graham posted [further thoughts](http://www.paulgraham.com/ffb.html) about spam.  One of his recommendations is to have client filters basically launching a distributed denial of service attack on the spammer's Web site:

> So I'd like to suggest an additional feature to those working on spam filters: a "punish" mode which, if turned on, would retrieve whatever's at the end of every url in a suspected spam n times, where n could be set by the user. 

While attractive, this idea comes with several problems of its own, the main one being abuse.  Using this technique, it becomes relatively easy to invoke a DDOS on certain sites.

Or does it?

Let's suppose we live in a world where a reasonable number of email clients have an "angry filter" built-in:  whenever this filter detects a spam that has a URL in it, it will retrieve the said page a certain number of times (say, ten).  By "reasonable number", I mean that there are enough of these filters to trigger a massive denial of service attack if a spam is sent out.  Considering the number of emails a typical spam involves (say, ten million) even if only a small percentage of the receiving clients (say 1% = 100,000 machines) has the software installed, this will result in about one million hits on the spammer's page.

If I wanted to abuse this system, I would basically have to turn myself into a spammer.  The cost of the infrastructure is not too high (spamming software, a CD with millions of email addresses, a lazy ISP ).  I also need to compose an email message that will be flagged as spam by mail filters (I can simply copy/paste an existing spam) and then include the URL of the victim's Web site in the message.

With that in mind, abuse does indeed seem easily to achieve.  Now, could we work around this problem?

We can imagine making the "angry filter" smarter:  it would try to relate the URL contained in the email with its content.  One way to do that would be to pick the ten words in the email message that were computed as being the highest probability by the Bayesian filter (things like "mortgage", "debt", etc...) and then see if the URL has any connection to these words.  Either by

  * Running some heuristic rules on the name of the URL itself.  
 
  * Consulting a central database and see if the said URL has been flagged as a spam originator (the said database is of course going to receive a lot of hits, and the question of "who is this greater authority?" remains).  
 
  * Connecting to the URL and parse its content before deciding further action (which probably defeats the purpose, although in this case, the angry filter might decide to limit its connection to the Web site to one instead of ten if it decides the spam is probably an abuse).



None of these options seem very effective to me and I have to say that overall, the idea of fighting unwanted traffic with even more traffic doesn't strike me as the right thing to do, even if giving the spammers a taste of their own medicine offers some strange sadistic appeal.

Maybe we could consider something more clever:  crawling the spammer's Web site in search of an order form and fill this form with bogus information that the spammer will have to process and validate.  Once this information is found, it could be uploaded to a central database so that other angry filters can skip this step and directly proceed to the form.

If nine out of ten orders turn out to be bogus, the spammers' operative costs will make the act of spamming less interesting to them.

Any other thoughts?
