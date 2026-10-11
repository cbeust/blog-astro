---
title: 'The Kobalt Diaries: Incremental Tasks'
date: '2016-01-16T18:39:10'
slug: the-kobalt-diaries-incremental-tasks
categories:
- Kobalt
- Kotlin
---

One of the recent additions to [Kobalt](http://beust.com/weblog/kobalt) is incremental tasks. This is the ability for each build task to be able to check whether it should run or not based on whether something has changed compared to the previous run. Here are a few quick outlines of how this feature works in Kobalt. 

## Overview

Kobalt's incremental task architecture is based on checksums. You implement an incremental task by giving Kobalt a way to compute an input checksum and an output checksum. When the time comes to run your task, Kobalt will ask for your input checksum and it will compare it to that of the previous run. If they are different, your task is invoked. If they are identical, Kobalt then compares the two output checksums. Again, if they are different, your task is run, otherwise it's skipped. Finally, Kobalt updates the output checksum on successul completion of your task. 

This mechanism is extremely general and straightforward to implement for plug-in developers, who remain in full control of how exhaustive their checksum should be. You could decide to stick to the default MD5 checksums of the files and directories that are of interest to your task, or if you want to be faster, only check the timestamps of your file and return a checksum reflecting whether Kobalt should run you or not. And of course, checksums don't even have to map to files at all: if your task needs to perform a costly download, it could first check a few HTTP headers and again, return a checksum indicating whether your task should run. 

Having said that, build systems tend to run tasks that have files for inputs and outputs, so it seems logical to think about an incremental resolution that would be based not on checksums (which can be expensive to compute) but on file analyses. While a checksum can tell you "One of these N files has been modified", it can't tell you exactly which one, and such information can open the door to further incremental work (see below for more details). 

One approach for file-based tasks could be for the build system to store the list of files along with some other data (timestamp or checksum) and then pass the relevant information to the task itself. The complication here is that file change resolution implies knowing the following three pieces of information: 

  * Which files were modified. 
  * Which files were added. 
  * Which files were removed. 


The downside is obviously that there is more bookkeeping required to preserve this information around between builds but the clear benefit is that if a task ends up being invoked, it can perform its own incremental work on just the files that need to be processed, whereas the checksum approach forces the task to perform its work on the entire set of inputs. 

## Implementation

Incremental tasks are not very different from regular tasks. An incremental task returns an `IncrementalTaskInfo` instance which is defined as follows: 
    
    
    class IncrementalTaskInfo(
    	val inputChecksum: String?,
        val outputChecksum: () -> String?,
        val task: (Project) -> TaskResult)
    

The last parameter is the task itself and the first two are the input and output checksums of your task. Your task simply uses the `@IncrementalTask` annotation instead of the regular `@Task` and it needs to return an instance of that class: 
    
    
    @IncrementalTask(name = "compile", description = "Compile the source files")
    fun taskCompile(project: Project) = IncrementalTaskInfo(/* ... */)
    

Most of Kobalt's own tasks are now incremental (wherever that makes sense) including the Android plug-in. Here are a few timings showing incremental builds in action: 

### Kobalt

Task | First run | Second run  
---|---|---  
kobalt-wrapper:compile | 627 ms | 22 ms  
kobalt-wrapper:assemble | 9 ms | 9 ms  
kobalt-plugin-api:compile | 10983 ms | 54 ms  
kobalt-plugin-api:assemble | 1763 ms | 154 ms  
kobalt:compile | 11758 ms | 11 ms  
kobalt:assemble | 42333 ms | 2130 ms  
| 70 seconds | 2 seconds  
  
### Android (u2020)

Task | First run | Second run  
---|---|---  
u2020:generateRInternalDebug | 32350 ms | 1652 ms  
u2020:compileInternalDebug | 3629 ms | 24 ms  
u2020:retrolambdaInternalDebug | 668 ms | 473 ms  
u2020:generateDexInternalDebug | 6130 ms | 55 ms  
u2020:signApkInternalDebug | 449 ms | 404 ms  
u2020:assembleInternalDebug | 0 ms | 0 ms  
| 43 seconds | 2 seconds  
  
## Wrapping up

At the moment, Kobalt only supports checksum-based incremental tasks since that approach subsumes all the other approaches but I'm not ruling out adding input-specific incremental tasks in the future if there's interest. In the meantime, checksums are working very well and pretty efficiently, even on large directories and/or large files. 

If you are curious to try it yourself, please [download Kobalt](http://beust.com/weblog/kobalt) and report back! 

_The full series of articles on Kobalt can be found[here](http://beust.com/weblog/weblog/category/kobalt/)_.
