---
title: Easily inspect your SQLite database on Android
date: '2015-07-09T12:17:30'
slug: easily-inspect-your-sqlite-database-on-android
categories:
- General
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/sqlitebrowser.jpg)

Here is a script I use very often for Android development: this small shell script will copy the database from your device on your file system and then launch [SQLiteBrowser](http://sqlitebrowser.org/) on it, allowing you to inspect your tables very quickly. I've found this script extremely useful, going sometimes as far as calling it multiple times while my code in on breakpoints in my IDE. 

This script takes additional steps before pulling the database, such as changing a few file permissions, since I have noticed that some devices are more strict about allowing database pulling than others. As far as I can tell, this script has worked on every single device I've used so far. 
    
    
    #
    # pull-db
    # Inspect the database from your device
    # Cedric Beust
    #
    PKG=com.beust.example
    DB=my.db
    adb shell "run-as $PKG chmod 755 /data/data/$PKG/databases"
    adb shell "run-as $PKG chmod 666 /data/data/$PKG/databases/$DB"
    adb shell "rm /sdcard/$DB"
    adb shell "cp /data/data/$PKG/databases/$DB /sdcard/$DB"
    rm -f /tmp/${DB}
    adb pull /sdcard/${DB} /tmp/${DB}
    open /Applications/sqlitebrowser.app /tmp/${DB}
