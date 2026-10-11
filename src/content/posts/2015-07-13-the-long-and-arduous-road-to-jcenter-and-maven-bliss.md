---
title: The long and arduous road to JCenter and Maven bliss
date: '2015-07-13T18:40:56'
slug: the-long-and-arduous-road-to-jcenter-and-maven-bliss
categories:
- General
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/frogger.png)

[TestNG](http://testng.org) is available on both Maven Central and JCenter and I used to publish the artifact in these two repos with Maven. Recently, I took some time trying to obtain the same result with Gradle and so far, it has been a very painful and agonizing experience because there are so many moving parts to the whole process: 

  * Gradle itself. 
  * Using the right plugins, then configuring them properly. 
  * Understanding the intricacies of JCenter/Bintray publishing. 
  * Too much incorrect information out there. There are a lot of tutorials available on the Internet, way too many actually, especially since a lot of them are out of date. 
  * IDEA is offering close to no help while editing your Gradle file: no auto completion, claiming your file has errors when it doesn't, not complaining about broken files, etc... 
My goal getting into this operation was simple and, so I thought, reasonable: being able to publish snapshots and releases from the command line to both JCenter and Maven. So far, my conclusion is that there is really no _simple_ em> way to achieve this goal. There is a _complicated_ way, which I describe below, but even that complicated way doesn't quite achieve my goal. In the end, I'm getting close to that goal except that I'm still going manually through the Nexus UI to close and deploy the artifact to Maven Central. I'll post an update if I ever solve this. 

The final structure of the build layout looks like this: 

  * `build.gradle`: main build file, which at the end includes 
  * `gradle/publishing.gradle`: sets up publishing routines and values that are shared by both Maven Central and JCenter. At the end, this script includes 
  * `gradle/publishing-maven.gradle` and `gradle/publishing-jcenter.gradle`, which include the respective plugins and perform the publishing. 


What follows is not a tutorial (there are so many alrady) but instead, a series of errors that I encountered along the way and how I fixed them. 

## 401 when uploading to bintray

Verify your credentials. One way of setting them is: 
    
    
    bintray {
        user = properties.getProperty("bintray.user")
        key = properties.getProperty("bintray.apikey")
    

I put these values in `local.properties`, which I load explicitly (`gradle.properties` might be a better location): 
    
    
    bintray.user=...
    bintray.apikey=...
    

## Javadocs are not being published

Maven Central will reject artifacts that don't contain Javadocs and these are typically not included by default: 
    
    
    task javadocJar(type: Jar, dependsOn: javadoc) {
        classifier = 'javadoc'
        from 'build/docs/javadoc'
    }
    task sourcesJar(type: Jar) {
        from sourceSets.main.allSource
        classifier = 'sources'
    }
    artifacts {
        archives jar
        archives javadocJar
        archives sourcesJar
    }
    

## Javadocs are not being uploaded

One line to add to your `bintray` configuration: 
    
    
    bintray {
        // Without this, javadocs don't get uploaded
        configurations = ['archives']
    }
    

## "Cannot create task of type 'Jar' as it does not implement the Task interface."

At some point during my tribulations, I started encountering this mystifying error. I ended up realizing that IntelliJ had sneakily added an `import org.apache.tools.ant.taskdefs.Jar` at the top of my gradle file, which is obviously not the class that we want. Removing this import fixed the problem (and you might want to configure IDEA to exclude it from your imports to avoid this problem in the future). 

## Artifacts are not being signed

Add the following to your `signing` configuration: 
    
    
    apply plugin: 'signing'
    signing {
        required { gradle.taskGraph.hasTask("bintrayUpload") }
        sign configurations.archives
    }
    

Then in your `gradle.properties` (**not** `local.properties`): 
    
    
    signing.keyId=...
    signing.password=...
    signing.secretKeyRingFile=(path to .gnupg/secring.gpg)
    

## .asc files are not being generated

Another requirement from Maven Central, which you fix in the `bintray` configuration: 
    
    
    bintray {
        pkg {
            version {
                gpg {
                    // Without this, .asc files don't get generated
                    sign = true
                }
    

## "Return code is: 400, ReasonPhrase: Bad Request"

In my initial attempts, `./gradlew publish` would fail with this error, probably one of the most frustrating things about Sonatype: the HTTP errors are completely opaque and they don't give you any detail on why they failed, while they easily could. Here is a list of potential reasons for this 400: 

  * user credentials are wrong 
  * url to server is wrong 
  * user does not have access to the deployment repository 
  * user does not have access to the specific repository target 
  * artifact is already deployed with that version if it is a release (not -SNAPSHOT version) 
  * the repository is not suitable for deployment of the respective artifact (e.g. release repo for snapshot version, proxy repo or group instead of a hosted repository) 
Just to list a few. While the server won't give more details is beyond me and one of the main reasons why I wish I could stop dealing with Sonatype completely. 

## "`./gradlew uploadArchives`" failing with mysterious HTTP errors

Another mistake I initially made was to try to upload the artifacts directly to the Maven Central repo instead of Sonatype's Nexus staging host. The correct configuration is: 
    
    
    uploadArchives {
        repositories {
            mavenDeployer {
                repository(url: "https://oss.sonatype.org/service/local/staging/deploy/maven2") {
                    authentication(userName: System.getenv('SONATYPE_USER'), password: System.getenv('SONATYPE_PASSWORD'))
                }
                snapshotRepository(url: "https://oss.sonatype.org/content/repositories/snapshots") {
                    authentication(userName: System.getenv('SONATYPE_USER'), password: System.getenv('SONATYPE_PASSWORD'))
                }
    

As I said at the top of this article, you then need to go deploy the archive manually from the Nexus UI. 

## I can't find an answer to my Gradle problem!

Here is a life pro tip: whenever you do Google searches about Gradle, restrict the results to only the last year and read the StackOverlow answers first. Anything published before is pretty much guaranteed to be out of date. 

## Sonatype documentation is terrible.

Yes, yes it is. For example, the first hit to learn how to deploy to Maven Central from Gradle will land you [here](http://blog.sonatype.com/2011/10/publishing-your-artifacts-to-the-central-repository/#.VaGbAvlVhBc). This article is actually an indirection to the "real" article [here](https://docs.sonatype.org/display/Repository/Sonatype+OSS+Maven+Repository+Usage+Guide) which is... 404. The [next link](https://docs.sonatype.org/display/Repository/Uploading+3rd-party+Artifacts+to+Maven+Central) is also a 404. 

Extremely frustrating. 

## Next steps

[My current configuration](http://github.com/cbeust/testng) enables the following process: 

  * `./gradlew bintrayUpload` uploads the release to JCenter. It will fail if the version is a SNAPSHOT (intentional since I uploads the snapshots to Maven's snapshot repo, this part is straightforward and fully automated). If you want to publish snapshots to JCenter as well, you can do this by publishing to JFrog, although my attempts in that direction have never succeeded. 
  * `./gradlew uploadArchives` will upload the snapshot to [Maven's snapshots repo](https://oss.sonatype.org/content/repositories/snapshots) and the release to [Sonatype's staging repo](https://oss.sonatype.org/service/local/staging/deploy/maven2). This is decided automatically based on whether the version name contains the string "SNAPSHOT". 
The build files themselves add up to more than 300 lines, which is mind boggling to perform operations that should be close to standard. Gradle is certainly very far from having sensible defaults. 

I'm hoping to eventually be able to fully deploy to Maven Central from the command line but I'm not sure it's possible, so suggestions are welcome.
