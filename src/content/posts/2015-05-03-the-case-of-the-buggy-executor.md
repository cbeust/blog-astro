---
title: The case of the buggy executor
date: '2015-05-03T20:28:10'
slug: the-case-of-the-buggy-executor
categories:
- General
---

I spent a mystifying half hour chasing down a bug recently, so I thought I would share. 

Here is a simple scheduled executor: 

```java
public class Exec {
    final static Logger logger = LoggerFactory.getLogger(Exec.class);
    private static final ScheduledExecutorService executor =
        Executors.newSingleThreadScheduledExecutor(
            new ThreadFactory() {
                @Override
                public Thread newThread(Runnable r) {
                    Thread result = new Thread();
                    result.setName("BuggyExecutor");
                    return result;
                }
            });
    public static void main(String[] args) {
        executor.scheduleAtFixedRate(() -> logger.info("Tick"),
                0,
                1, TimeUnit.SECONDS);
    }
}
```

I always use a `ThreadFactory` in my executors since seeing thread names plainly in your trace simplifies debugging threading issues considerably. Whenever I see a `pool-2-thread-3` in my thread dump, I track down the lazy library that caused that monstrosity and I seriously consider replacing it with one that is written by developers more respectful of my time. 

Other than that, this code is pretty straightforward and if you run it, you would expect the string "Tick" to be displayed every second: 

```text
17:37:18.780 [BuggyExecutor] INFO  com.beust.Exec - Tick
17:37:19.780 [BuggyExecutor] INFO  com.beust.Exec - Tick
17:37:20.780 [BuggyExecutor] INFO  com.beust.Exec - Tick
```

However, if you run the code as provided above, you will see that it does absolutely nothing.
