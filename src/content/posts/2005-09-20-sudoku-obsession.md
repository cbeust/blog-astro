---
title: Sudoku obsession
date: '2005-09-20T09:39:52'
slug: sudoku-obsession
categories:
- General
comments:
- id: 4217
  author: Ron
  date: '2005-09-20T10:05:29'
  content: I had thought sudoku was too much like minesweeper, but now it looks more interesting.  Thanks for the post.
  replies: []
- id: 4218
  author: Yoav Shapira
  date: '2005-09-20T11:19:15'
  content: 'It''s funny we think about this in exactly the same way.  I blogged about this last month at http://yoavs.blog[REMOVE]spot.com/2005/08/foss-soduko.html,

    (note I had to insert the [REMOTE] section above so it''d let me post this) and the entry has a link to the best open-source generator and solver implementation I''ve seen yet.'
  replies: []
- id: 4219
  author: Yoav Shapira
  date: '2005-09-20T11:20:21'
  content: 'It''s funny we think about this in exactly the same way.  I blogged about this last month at http://yoavs.blog[REMOVE]spot.com/2005/08/foss-soduko.html,

    (note I had to insert the [REMOTE] section above so it''d let me post this) and the entry has a link to the best open-source generator and solver implementation I''ve seen yet.'
  replies: []
- id: 4220
  author: Robert Konigsberg
  date: '2005-09-20T11:36:27'
  content: 'I abandoned Sudoko quickly, not because I disliked it, but because I liked it too much. I wrote a brute-force solver, and it did well enough, but I had to toss whole lot for fear of it taking over my life.

    Have fun!'
  replies: []
- id: 4221
  author: Olivier Verdin
  date: '2005-09-20T12:53:26'
  content: Check out http://www.sudokuprime.com and play multi-user sudoku with your friends.  Have fun!
  replies: []
- id: 4222
  author: Shitasam Suitam
  date: '2005-09-21T10:49:18'
  content: 'Otaku,

    It this your game Sudoku?

    rgds,

    Shitasam Suitam'
  replies: []
- id: 4223
  author: somevisitor
  date: '2005-09-24T08:01:02'
  content: 'Hi Cedric,

    first of all thanks for your weblog, I read it since a long time and always enjoy it.

    I''ve got a little "story" about Sudoku.  While in vacation, with a computer (but no Internet connection), my family would play Sudokus'' in the newspaper, by hand.  I saw it, and immediately thought: "hey, I could easily write a solver for this".  So, during lunch time, when sun was really too hot, I booted my laptop and started a new IDEA project (yup, I''m not gone back to Eclipse yet ;)

    I did it relatively "cleanly", using interfaces (to allow me to quickly switch "solvers" algorithms and "board" representation), unit tests, etc.  All in all, it took me 75 minutes, including manually encoding some 9x9 boards and their accepted solution.

    The most simple way to solve it (I only solved it, it was fun but I''m not going to spend hours and hours on this ;) is to use a trivial recursive algorithm (which uses backtracking and some pruning).  So I used some pruning, but I didn''t even bother to choose ways that would prune the search tree faster: "premature optimization bla bla bla..."  ;)

    When I came back from vacation, I tried my solution with some supposedly "hard" sudoku for computers: my solver does less than 100ms on them (and some have solver much faster that).

    All this to say that your blog makes it sound like the solver needs brute-force while the generator needs backtracking and I ticked when I read that: the easiest and most trivial way to write a solver *is* to use one backtracking algo (amongst many backtracking algo) that *does* brute force the problem.

    Now of course the definition of "brute force" can vary: a trivial backtracking algorithm will brute force its way through all partial valid boards until the correct one is found (brute forcing doesn''t try all possible values: it only does so until it find (the) one that matches).  It is clear that "brute forcing" a sudoku by trying   Math.pow(9, 72) states isn''t going to work...

    The main recursive loop I wrote is about 10 lines (and can possibly be shorter).  The problem share some similarities to the "eight queens": you have a board, you place "something" on it and recurse...

    And "eigth queens" is solved by brute forcing it, using a backtracking algorithm (which really is some kind of depth first search).

    For example:

    http://spaz.ca/aaron/SCS/queens/

    "Using recursion, the board can be solved from the top down, trying all possibilities and backtracking (known as a depth first search)."

    That''s it, let''s not enter into semantics debate, but I just wanted to clarify some things which I think weren''t entirely clear in your weblog:

    - backtracking does brute force (by trying all possibilities, until it finds one that works)

    - backtracking is usually implemented using some pruning (Wikipedia has a nice entry on "backtracking")

    - backtracking is a depth-first-search

    - the most trivial way to write a Sudoku *solver* is to use backtracking

    If it had been for a TopCoder match, I would probably have done the solver in 15 minutes... And the real scary thing is that this is not good at all: good competitors there would have solved it in less than five minutes (no kidding).

    Go TopCoder! Go Google! (sponsoring TopCoder matches and the Google Code Jam, using TopCoder technology) Go fun algorithmic problem!

    And... Go Cedric''s weblog!

    :)'
  replies: []
- id: 4224
  author: John Reusing
  date: '2005-09-29T08:46:18'
  content: 'If you like sudoku but don''t feel like making your own you can always try my site.

    www.number-logic.com

    ~john'
  replies: []
- id: 4225
  author: Gabriel
  date: '2005-10-03T03:16:39'
  content: 'Hi!

    My brother found that Perl/Tk program to solve sudokus :

    Very concise!

    use Tk;

    use Tk::Table;

    use strict;

    use warnings;

    my $mw = MainWindow->new;

    my $table = $mw->Table(-rows => 9, -columns => 9, -fixedrows => 9, fix

    +edcolumns => 9)->pack;

    foreach my $row (0 .. 8) {

    foreach my $col (0 .. 8) {

    if ((int($row/3) + int($col/3)) % 2) {

    $table->put($row, $col, $mw->Entry(-width => 1, -font=>"Ad

    +obe 30 bold", -background => "grey"));

    } else {

    $table->put($row, $col, $mw->Entry(-width => 1, -font=>"Ad

    +obe 30 bold", -background => "white"));

    }

    }

    }

    $mw->Button(-text => "Think", -command => \&think)->pack();

    MainLoop;

    sub think {

    my $board;

    foreach my $row (0 .. 8) {

    foreach my $col (0 .. 8) {

    $board->[$row][$col] = $table->get($row, $col)->get();

    $board->[$row][$col] = undef if (!($board->[$row][$col]));

    }

    }

    try($board);

    }

    sub try {

    my $board = shift;

    my ($x, $y, @options) = find_blank_with_least_options($board);

    if (defined($x)) {

    for (@options) {

    $board->[$x][$y] = $_;

    try($board);

    }

    $board->[$x][$y] = undef;

    } else {

    print "find solution:\n";

    display($board);

    }

    }

    sub find_blank_with_least_options {

    my $board = shift;

    my ($x_to_return, $y_to_return, @options_to_return);

    my $least = 9;

    for my $x (0 .. 8) {

    for my $y (0 .. 8) {

    if (!defined($board->[$x][$y])) {

    my @options = (0,1,1,1,1,1,1,1,1,1);

    for (0 .. 8) {

    $options[$board->[$x][$_]] = 0 if defined($board->

    +[$x][$_]);

    $options[$board->[$_][$y]] = 0 if defined($board->

    +[$_][$y]);

    }

    for my $i (int($x/3) * 3 .. int($x/3) * 3 + 2) {

    for my $j (int($y/3) * 3 .. int($y/3) * 3 + 2) {

    $options[$board->[$i][$j]] = 0 if defined($boa

    +rd->[$i][$j]);

    }

    }

    my $sum;

    $sum += $options[$_] for (0 .. 9);

    if ($sum get($row, $col)->get()) {

    $table->get($row, $col)->configure(-foreground => "red

    +");

    $table->get($row, $col)->insert(''@0'', $board->[$row][$

    +col]);

    }

    }

    }

    }'
  replies: []
- id: 4226
  author: pankaj
  date: '2005-10-03T11:41:37'
  content: 'hi iwant su doku generator please

    provide it at

    pankajpankajshah@rediffmail.com

    pankaj'
  replies: []
- id: 4227
  author: arvind
  date: '2005-10-10T18:30:03'
  content: hi! I want a clear step by step algorithm for solving this su doku, please provide me at arvind.mailup@gmail.com
  replies: []
- id: 4228
  author: Blandi
  date: '2005-10-12T10:20:38'
  content: I want to add some more challanges to the computer science tasks mentioned in this blog. Sudoku generation is quite simple, the problem is to generate puzzles with just one solution. This can be guaranteed by a logic solver but not by a solver that works with guessing and backtracking.
  replies: []
- id: 4229
  author: Gabriel
  date: '2005-10-18T02:22:22'
  content: 'Yet another adress:

    http://pages.globetrotter.net/jfontain/sudoku/autoreferent.html

    "Ce sudoku respecte les r'
  replies: []
- id: 4230
  author: Richard Munroe
  date: '2005-10-30T14:17:38'
  content: 'Logic problems like Sudoku rely on there being one and only one correct value for each position.  In order to be able to solve them at all, at any time there must be at least one position for which you can derive the answer.  I wrote a solver that works by (1) eliminates from consideration any cell (and associated cells, row, column, and square) that has already been solved then (2) examines each row, column, and square to see if there is a value that can only occur in one position in the row/column/square, then iterates starting at 1.  If you ever get to a point where you can''t find one or more positions which have unique values the Sudoku can''t be solved.  It''s simple loops, no recursion necessary.

    The generator is harder and I haven''t solved that problem yet.  Working on it though.'
  replies: []
- id: 4231
  author: Yan
  date: '2005-11-07T10:55:19'
  content: 'Sudokus by Koalog:

    probably the easiest web interface. 6 free and printable Sudokus a day!'
  replies: []
- id: 4232
  author: meji
  date: '2005-11-11T10:31:07'
  content: Checkout www.Printsudoku.com. It's a new website where you can find lots of sudokus in pdf format, and also you can play online. There is also Magic Sudokus. This site rocks!
  replies: []
- id: 4233
  author: AndreL
  date: '2006-02-09T07:11:24'
  content: 'COMPUTER AIDED SUDOKU is a free Excel game that you can download at http://perso.wanadoo.fr/sudoku.laviron

    Its originality : it does not play for you, it just show you the places where to play.

    Beginners will learn rapidly how to practice.

    Experts will go directly to the place where they are beginning to think.

    Tired people will press "solution" before going to bed.

    You need Excel installed on your computer.

    Enjoy'
  replies: []
- id: 4234
  author: AndreL
  date: '2006-02-09T07:12:16'
  content: 'COMPUTER AIDED SUDOKU is a free Excel game that you can download at http://perso.wanadoo.fr/sudoku.laviron

    Its originality : it does not play for you, it just show you the places where to play.

    Beginners will learn rapidly how to practice.

    Experts will go directly to the place where they are beginning to think.

    Tired people will press "solution" before going to bed.

    You need Excel installed on your computer.

    Enjoy'
  replies: []
- id: 4235
  author: AndreL
  date: '2006-04-24T09:59:31'
  content: 'Free download the new version of "Computer Aided Sudoku Excel" at http://perso.wanadoo.fr/sudoku.laviron/

    New capabilities :

    GENERATOR, HELPER, SOLVER

    SURPRISES for Sudoku solved without help

    HISTORIC records all the plays. Partial replay.

    CLINIC to analyse the sudoku.'
  replies: []
- id: 4236
  author: Darwin
  date: '2006-05-27T22:44:26'
  content: 'hi there,

    I develop my sudoku with java prog language

    I use a backtracking method to solve the sudoku

    trying all the possibility one into the cell.

    firstly my program try to find a single probability and if there is no single probability in the cell, the program will start search by row(only able to search by row) and try to find the empty cell(if 0 means empty) then find the probability of the empty cell.

    let''s say i have probability of 1, 4, 7, 8 in 1st cell.

    it test with number 1 if there is a cell with null probability found then it will backtracking.

    now test number 4(i put the condition if there is empty cell and no single probability) then try the second empty cell and so on. when it reach to the 6th cell, it found that all of the possibility is not valid. my program only able to backtracking to the previous cell.

    after i check with sudoku generator the valid answer for 1st cell is 7 instead of 4.

    my question is what is the condition to fine the one that works(a valid answer) from all of the probability?

    can anyone help me with this?

    this is my email cyb3rguys@yahoo.com'
  replies: []
- id: 4237
  author: Greg G
  date: '2006-07-14T15:34:44'
  content: 'I wrote my own version of an Excel Soduko trainer and solver a while back, but I didn''t have a good way to generate them...until now.  Here''s the concept in the alogarithm that you can program yourself.

    Assuming a 3x3 grid

    1) Put any random set of numbers in the center box...obviously, one each of the digits 1-9

    2) Fill in the box above and below the center box with any random number of choice that doesn''t break the Soduko rule.

    3) Keep track of all of the options for each cell and give priority to assigning that random number to the CELL THAT HAS THE LEAST OPTIONS AVAILABLE TO IT.  In other words....Each cell has 9 optional digits that the cell can contain.  As you enter a value in a cell, the cells in the same box, row and column no longer have that digit as an option.  Take that option away from all other cells in the box, row and column.  They now only have 8 possible entries.  As you continue with this process, you will see that some cells may have five options left while other cells have only 3 options.  Provide a random number (that is within the available options for that cell) to the cells with less options first.

    4) Providing a random number in the top box and then the bottom box and then repeating seems to keep the random generation working smoothly.

    5) Once all cells are completed in the center column of boxes, move to either the left or right and complete all cells in column of boxes.

    6) To complete the cells in the left or right columns, simply apply one random number (again, within the remaining possible values) for each cell.  Give priority to cells that have the least number of options.  Try scanning the whole column of boxes and looking for cells with only one option left.  Be sure to do those first.

    7) Complete the last column of boxes and assign values to the cells in the same way.

    WORKS EVERY TIME IF YOU APPLY THE LOGIC'
  replies: []
- id: 4238
  author: Christian
  date: '2006-10-17T22:57:02'
  content: 'Heeellllllpppppp,

    I''m trying to find the best solution of the Sudoku problem.  I used Mozart in solving it.  Now my problem is, I want to implement a backtracking search on the tree using Mozart and the notion of  computational spaces.

    Can anyone help me...i need the Mozart code for backtracking...

    email me at tantanix@yahoo.com'
  replies: []
- id: 4239
  author: Neil Harding
  date: '2009-11-03T18:15:57'
  content: 'I liked a numeric crossword rather than Sudoku (it used to feature as the monthly prize competition in PC Pro, they had a program which could generate the crosswords.) (You can see an example at ils.unc.edu/~britd/math.htm) I ended up writing a program to solve them (it was a fun problem to solve).

    The clues are things like 1A = 3D * 6A, 2A = Prime, 3A = 6 Gross, so there are at least 2 values you can work out initially.'
  replies: []
---

|  2  |    |     
---|---|---  
  |    |     
  |    |     
|  7  |    |     
---|---|---  
  |  4  |  8   
  |    |  2   
|    |  5  |     
---|---|---  
  |    |  6   
3  |    |  9   
|  9  |    |     
---|---|---  
  |  7  |     
  |  2  |  5   
|  6  |    |     
---|---|---  
  |  2  |     
  |    |  1   
|  2  |  4  |     
---|---|---  
  |  8  |     
  |    |  3   
|  8  |    |  4   
---|---|---  
6  |    |     
  |  9  |     
|  9  |    |     
---|---|---  
4  |  8  |     
  |    |  3   
|    |    |     
---|---|---  
  |    |     
  |    |  8   
  
Have you been sucked into [Sudoku](http://en.wikipedia.org/wiki/Sudoku) yet?  If not, here is your chance.

Fill the grid above with numbers from 1 to 9, making sure that each row, each column and each box (the nine smaller 3x3 grids) contain each number exactly once.

Sudoku is a fiendishly addictive puzzle that has been gaining an extraordinary popularity these past months.  Three Sudoku books are listed in the New York Times' top 50 list, I have seen dozen of people playing Sudoku in buses and airports, but what really made me realize how big the craze was is when I asked my brother, who lives in France, if he had heard of it, and his answer was "Who hasn't?".

I like solving Sudoku grids myself but I find the software challenges even more interesting.  If you are up for a little exercise, here are a few problems for you to solve:

  1. **Write a program that solves a Sudoku grid**.  It doesn't look too hard at first, but you need to know that there are [much more Sudoku grids than you think](http://www.shef.ac.uk/~pm1afj/sudoku/), and therefore, brute force will only take you so far.  You will need to apply a few selected strategies to prune the solution space, or your program will never complete in acceptable time.  
 
  2. Now the reverse problem:  **write a program that generates Sudoku grids**.  It's fairly easy to accomplish for someone who has some basic computer science training, and if you don't, you will probably want to Google the terms "backtracking algorithm" (which is not the only way to solve this problem).  
 
  3. And finally, now that you have all these Sudoku grids, **rank them by order of difficulty** , 1 being an easy grid and 5 being a very difficult one.  In other word, I should be able to ask your program to give me a rank 1 grid, which will be very easy, and a rank 5 grid that will take me much longer to solve.  When solving this problem, you will probably end up realizing that what is difficult for a human is not necessarily difficult for a computer, and vice versa.  As a hint, you might want to generate grids, solve them with the first program you wrote and then have this program report to you how hard it was.



Happy hacking!
