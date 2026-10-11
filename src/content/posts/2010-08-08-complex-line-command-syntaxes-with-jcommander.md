---
title: Complex line command syntaxes with JCommander
date: '2010-08-08T07:15:34'
slug: complex-line-command-syntaxes-with-jcommander
categories:
- General
---

Complex tools such as `git` or `svn` understand a whole set of commands, each of which with their own specific syntax: 

```bash
  git commit --amend -m "Bug fix"
```

Words such as "commit" above are called "commands" in JCommander, and you can specify them by creating one arg object per command. 

For example, here is the arg object for the `commit` command: 

```java
@Parameters(separators = "=")
public class CommandCommit {
  @Parameter(description = "Record changes to the repository")
  public List<String> files;
  @Parameter(names = "--amend", description = "Amend")
  public Boolean amend = false;
  @Parameter(names = "--author")
  public String author;
}
```

And here is `add`: 

```java
public class CommandAdd {
  @Parameter(description = "Add file contents to the index")
  public List<String> patterns;
  @Parameter(names = "-i")
  public Boolean interactive = false;
}
```

Then you register these commands with your JCommander object. After the parsing phase, you call `getParsedCommand()` on your JCommander object, and based on the command that is returned, you know which arg object to inspect (you can still use a main arg object if you want to support options before the first command appears on the command line): 

```java
// Options available before commands
CommandMain cm = new CommandMain();
JCommander jc = new JCommander(cm);
// Command: add
CommandAdd add = new CommandAdd();
jc.addCommand("add", add);
// Command: commit
CommandCommit commit = new CommandCommit();
jc.addCommand("commit", commit);
jc.parse("-v", "commit", "--amend", "--author=cbeust", "A.java", "B.java");
Assert.assertTrue(cm.verbose);
Assert.assertEquals(jc.getParsedCommand(), "commit");
Assert.assertTrue(commit.amend);
Assert.assertEquals(commit.author, "cbeust");
Assert.assertEquals(commit.files, Arrays.asList("A.java", "B.java"));
```

Support for complex commands is one of the new features available in [JCommander 1.5](http://beust.com/weblog/jcommander).
