---
title: Why GridBagLayout must die
date: '2004-07-13T06:14:20'
slug: why-gridbaglayout-must-die
categories:
- Java
comments:
- id: 1789
  author: Simon
  date: '2004-07-13T06:55:46'
  content: This is so funny, I use gridbag every week and I still can't put my widgets at the right place on the first try....
  replies: []
- id: 1790
  author: Heiko
  date: '2004-07-13T07:08:03'
  content: 'Really great!

    And worst of all... there existed better layout mechanisms ages before (think NeXTStep).'
  replies: []
- id: 1791
  author: Sam Pullara
  date: '2004-07-13T13:20:25'
  content: Basically the layout manager in NeXTStep, now used in Interface Builder on Mac OS X, is Springs-n-Struts except that it is much easier to use because every spring and strut isn't an object and are directly on the components.  Additionally, you almost never use it programmatically, only in the building tool.
  replies: []
- id: 1792
  author: Zohar
  date: '2004-07-13T15:31:44'
  content: 'I have switched to using forms from jgoodies for 99% of my layout needs.

    It has been open sourced by SUN, and is a joy to use.

    It''s the best layout since SlicedBreadLayout.  No Swing/SWT programmer should be without it.'
  replies: []
- id: 1793
  author: Barre Dijkstra
  date: '2004-07-14T00:14:51'
  content: 'Trial & Error, that''s what I can remember from the GridBagLayout.

    But could we also kill the java.awt.LayoutManager2 interface?

    Just for being named in a dumb way?

    But GridBagLayout anyday over a null layout or a FlowLayout ;-).'
  replies: []
- id: 1794
  author: svenmeier
  date: '2004-07-14T02:10:35'
  content: 'If Sun only fixed this annoying BUG, I would happily use GridBagLayout happy after:

    http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4238932

    Only one example why Swing (AWT) is screwed up for no reason.'
  replies: []
- id: 1795
  author: patrick
  date: '2004-07-15T12:51:04'
  content: 'Too funny !

    But GridBagLayout is worse than this in fact!

    Thank for the link :)'
  replies: []
- id: 1796
  author: qwerty
  date: '2004-07-16T02:33:03'
  content: 'I actually wrote a little prog to generate gridbaglayout more interactively. It is on

    http://easygridbag.sourceforge.net

    It is not intuitive to work with GridBagLayout but powerful enough for all your needs, that is why I would not spit on it as much as you guys.

    JGoodies is nice but is much more than just a Layout.'
  replies: []
- id: 1797
  author: plasticfloor
  date: '2007-03-13T04:33:33'
  content: 'I love gridBagLayout! once you get the hang of it you can quickly layout things exactly where you want them. this is as complex as my layouts can get it may look a bit intimmidating at first but it''s quick to write and easy to maintain -

    setLayout(new GridBagLayout());

    int COL_BTN = 1;

    int COL_LBL = 2;

    int COL_TXT = 3;

    add(getBtnStringBeforeToken(), new GridBagConstraints(COL_BTN,1,1,1,0,0,GridBagConstraints.WEST,GridBagConstraints.NONE, new Insets(4,0,0,4), 0,0));

    add(getBtnMaximumLength(), new GridBagConstraints(COL_BTN,2,1,1,0,0,GridBagConstraints.WEST,GridBagConstraints.NONE, new Insets(4,0,0,4), 0,0));

    add(getBtnDelimiter(), new GridBagConstraints(COL_BTN,3,1,1,0,0,GridBagConstraints.WEST,GridBagConstraints.NONE, new Insets(4,0,0,4), 0,0));

    add(getBtnStringAfterItem(), new GridBagConstraints(COL_BTN,4,1,1,0,0,GridBagConstraints.WEST,GridBagConstraints.NONE, new Insets(4,0,0,4), 0,0));

    add(new JLabel("String before leading token:"), new GridBagConstraints(COL_LBL,1,1,1,0,0,GridBagConstraints.NORTHWEST,GridBagConstraints.NONE, new Insets(VERTICAL_LINE_SPACING,0,0,0), 0,0));

    add(new JLabel("Maximum length of leading token:"), new GridBagConstraints(COL_LBL,2,1,1,0,0,GridBagConstraints.NORTHWEST,GridBagConstraints.NONE, new Insets(VERTICAL_LINE_SPACING,0,0,0), 20,0));

    add(new JLabel("Delimiter:"), new GridBagConstraints(COL_LBL,3,1,1,0,0,GridBagConstraints.NORTHWEST,GridBagConstraints.NONE, new Insets(VERTICAL_LINE_SPACING,0,0,0), 0,0));

    add(new JLabel("String after list item:"), new GridBagConstraints(COL_LBL,4,1,1,0,0,GridBagConstraints.NORTHWEST,GridBagConstraints.NONE, new Insets(VERTICAL_LINE_SPACING,0,0,0), 0,0));

    add(new JLabel("Minimum required items:"), new GridBagConstraints(COL_LBL,5,1,1,0,0,GridBagConstraints.NORTHWEST,GridBagConstraints.NONE, new Insets(VERTICAL_LINE_SPACING,0,0,0), 0,0));

    add(new JLabel("Selection field:"), new GridBagConstraints(COL_LBL,6,1,1,0,0,GridBagConstraints.NORTHWEST,GridBagConstraints.NONE, new Insets(VERTICAL_LINE_SPACING,0,0,0), 0,0));

    add(getTxtStringBeforeToken(), new GridBagConstraints(COL_TXT,1,1,1,1,0,GridBagConstraints.NORTHWEST,GridBagConstraints.NONE, new Insets(VERTICAL_LINE_SPACING,0,0,0), 70,0));

    add(getMaximumLengthSpinner(), new GridBagConstraints(COL_TXT,2,1,1,0,0,GridBagConstraints.NORTHWEST,GridBagConstraints.NONE, new Insets(VERTICAL_LINE_SPACING,0,0,0), 10,0));

    add(getTxtDelimiter(), new GridBagConstraints(COL_TXT,3,1,1,0,0,GridBagConstraints.NORTHWEST,GridBagConstraints.NONE, new Insets(VERTICAL_LINE_SPACING,0,0,0), 40,0));

    add(getTxtStringAfterItem(), new GridBagConstraints(COL_TXT,4,1,1,0,0,GridBagConstraints.NORTHWEST,GridBagConstraints.NONE, new Insets(VERTICAL_LINE_SPACING,0,0,0), 70,0));

    add(getMinimumItemsSpinnner(), new GridBagConstraints(COL_TXT,5,1,1,0,0,GridBagConstraints.NORTHWEST,GridBagConstraints.NONE, new Insets(VERTICAL_LINE_SPACING,0,0,0), 10,0));

    add(getPnlPositionSelection(), new GridBagConstraints(COL_TXT,6,1,1,0,1,GridBagConstraints.NORTHWEST,GridBagConstraints.NONE, new Insets(VERTICAL_LINE_SPACING,0,0,0), 0,0));

    we''re actually moving to swt hell right now and i can''t find a normal layout.. swt gridBag really sucks'
  replies: []
---

If you have ever tried to understand how the GridBagLayout works, I am sure [this](http://madbean.com/blog/2004/17/totallygridbag.html) will strike a chord.
