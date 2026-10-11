---
title: Solution to the gambling game
date: '2009-03-30T10:42:27'
slug: solution-to-the-gambling-game
categories:
- General
comments:
- id: 7720
  author: ''
  date: '2009-03-30T11:42:14'
  content: 'The outcome can be very different if you are allowed to change how much you risk.

    For instance, as suggested by a commenter on the previous post, you can double up every time you loose. On top of that, you lower your bet every time you win and have your fortune is positive.

    fortune = 0

    bet = 1

    max = 1000000

    for i in 1..max do

    n = (rand * 100).round

    if (n &lt; 50)

    fortune = fortune - bet

    bet = 2*bet

    elsif (n >= 50 && n &lt;= 64) then fortune = fortune + 0

    elsif (n >= 65 && n &lt;= 75) then fortune = fortune + 0.5*bet

    elsif (n >= 76 && n &lt;= 99) then fortune = fortune + 1*bet

    elsif (n == 100) then fortune = fortune + 2*bet

    else puts "#{i}: n:#{n}"

    end

    if (n >= 65 && fortune > 0) then bet = 1

    end

    puts "#{i} fortune = #{fortune} : bet = #{bet}"

    end

    puts fortune'
  replies: []
- id: 7721
  author: Cedric
  date: '2009-03-30T12:18:45'
  content: 'This is called a Martingale and it''s a well documented approach that will defeat any gamb_ling scheme, provided you have unlimited funds:

    en.wikipedia.org/wiki/Martingale_(probability_theory)'
  replies: []
- id: 7722
  author: Jim Weirich
  date: '2009-03-31T06:33:07'
  content: I think the simulation is a bit off.  The (100*rand).round expression will return 0 to 100 (rather than 1 to 100).  Zero and 100 both are 1/2 as likely as any other number, so 100 appears less often in the simulation than expected (thus increasing the loss).  Also the limits are inconsistent, partially compensating for extra loss caused the range error.  A corrected version can be found at git://gist.github.com/88188.git.
  replies: []
- id: 7723
  author: Jim Weirich
  date: '2009-03-31T07:29:31'
  content: The git URL was for cloning. Just point your browser to gist.github.com/88188 to see the code.
  replies: []
- id: 7724
  author: Cedric
  date: '2009-03-31T07:32:53'
  content: Jim, I think your solution is a bit off as well since it will fall back to the default case for values between [65,66], [75,76] and [99,100] (with these boundaries excluded).
  replies: []
- id: 7725
  author: Jim Weirich
  date: '2009-03-31T07:45:49'
  content: There are no integers between 65 and 66 exclusive.  Rand(100) returns an integer.
  replies: []
- id: 7726
  author: Tonio
  date: '2009-03-31T09:36:54'
  content: 'Martingale won''t defeat any gamb_ling scheme... not really.  You''d need unlimited funds for that.  But if you have unlimited funds, winning money won''t change your available funds (still unlimited).  With any limit to your funds, a Martingale still ends up with a negative expected outcome if the game is rigged against the player.

    en.wikipedia.org/wiki/Martingale_(betting_system)'
  replies: []
- id: 7727
  author: Sony Mathew
  date: '2009-04-01T11:13:17'
  content: oops..i guess i'll stick to Black-21-Jack (it won't let me post without -21-).
  replies: []
- id: 7728
  author: Anonymous Coward
  date: '2009-04-06T02:17:54'
  content: 'Using floating numbers for such a trivial problem shows much of what is wrong in this industry.  This is exactly like people using floating point numbers to represent monetary amount like $3.42.  Hint: in many case you don''t store 3.42 "dollar" but 342 cents.

    It''s really, really, sad to see people misuse floating point numbers like that.

    The result of your simulation contains about 100000 accumulation of precision errors.  It just happens to be "close" to the correct response because you''re accumulating errors in one way then in the other (but it''s still mindboggingly saddening to see such misuse of floating point numbers).

    Oh and one day, one day, a unit test framework author shall read and understand Goldberg and implement a correct floating-point comparison method.  But I''m not holding my breath.'
  replies: []
- id: 7729
  author: YvesG
  date: '2009-04-09T16:28:11'
  content: 'I wouldn''t try the martingale technique as I''d loose even more, in a legacy language, that would be:

    public class Game {

    public static void main(String[] args) {

    java.util.Random rand = new java.util.Random();

    float fortune = 0;

    float bet = 1;

    int tries = 1000000;

    while (tries-- > 0){

    fortune -= bet;

    int roll = rand.nextInt(100) + 1;

    if (roll &lt;= 50){

    bet = bet * 2;

    continue;

    }

    if (roll = 51 && roll = 66 && roll =76 && roll &lt;=99) fortune += bet * 2;

    if (roll == 100) fortune += bet * 3;

    bet = 1;

    }

    System.out.println(fortune);

    }

    }'
  replies: []
- id: 7730
  author: Richard
  date: '2009-04-24T22:25:52'
  content: I guess you can still use Martingale to take down someone with finite funds. It doesn't change your situation, but it does change theirs :P
  replies: []
- id: 7731
  author: Bert
  date: '2009-05-27T07:00:12'
  content: 'I would agree that if you bet your entire fortune ever time that you would end up in the hole. But if you always bet a fixed amount (exactly $1 every time), I believe the outcome would be to the advantage of the player.

    I just tested 100 games with 1 million rounds each and always came up positive.'
  replies: []
- id: 7732
  author: bharathwaj
  date: '2009-06-09T01:21:09'
  content: 'Hello,

    I think you gain expectancy calculation is wrong. It should be

    -1 * 0.5 + 1 * 0.15 + 1.5 * 0.1 + 2 * 0.24 + 3 * 0.01  = 0.16

    So I will surely play the game. Of course by probability theory I will gain on infinite try outs. If I am wrong please let me know.'
  replies: []
---

A few people answered correctly to [my little challenge](http://beust.com/weblog/weblog/archives/000508.html), but not everyone. 

At first sight, the rules look pretty favorable to the player: half of the time, I lose my money, but the other half, I get back at least as much as I bet. 

Or do I? 

Well, no. If you look at the rules carefully, you realize that what you are getting back if the roll is over 50 is not as obvious as it looks. Take the 66-75 range: you get 1.5 times your money, but you need to remember that part of this is the original bet. So if you bet $1, rolling between 66 and 75 will only make you richer by $0.5 and not $1.5. And the same applies to the other rolls. 

Your gain expectation therefore is: 
    
    
    -1*0.50 + 0.5*0.10 + 1*0.24 + 2*0.01 = **-0.19**
    

For every dollar you bet, you will lose 19 cents. 

Here is a simulation in Ruby: 
    
    
    fortune = 0
    max = 1000000
    for i in 1..max do
    n = (rand * 100).round
    if (n < 50) then fortune = fortune - 1
    elsif (n >= 50 && n <= 64) then fortune = fortune + 0
    elsif (n >= 65 && n <= 75) then fortune = fortune + 0.5
    elsif (n >= 76 && n <= 99) then fortune = fortune + 1
    elsif (n == 100) then fortune = fortune + 2
    else puts "#{i}: n:#{n}"
    end
    end
    puts fortune
    

and the output: 
    
    
    $ ruby ~/t/game.rb
    -184887.0
    

The mistake that a few commenters made (and which I made as well initially) was to have a few extra "ones" in their gain calculation.
