---
title: Statistical testing
date: '2006-02-21T15:57:42'
slug: statistical-testing
categories:
- Java
comments:
- id: 4893
  author: Piotr Kaminski
  date: '2006-02-21T16:39:31'
  content: 'Hi Cedric.  While the new features look cool, using testing for randomness as an example might not have been the best idea as evidenced by this [1] discussion.  Statistical tests can at best demonstrate that a sequence is *not* random, but (from what I understood), never prove that it is random in any but the weakest sense.

    [1] http://www.mail-archive.com/cryptography@metzdowd.com/msg05464.html'
  replies: []
- id: 4894
  author: Muthu Ramadoss
  date: '2006-02-21T20:18:39'
  content: 'Cedric,

    Great to see a lot of super-duper functionalties for TestNG. I can already see how TestNG is becoming kind of the Next Gen testing framework ahead of JUnit. Good work.. keep up with the frequent releases which JUnit lacks.

    One suggestion on this post,

    Can we get rid of this foo, bar, f1 kind of methods, and get into some simple real world examples. The reason is, its very hard to figure out the semantics and the real functionalities being offered by TestNG when we read foo, bar etc.,

    Testing the code for thread safe is definitely what we need, but looking for better examples.

    Thanks & Keep up the great work with TestNG.

    Ok.. one more suggestion:

    Can TestNG embrace JUnit.. so the JUnit creators will move on and not compete with TestNG anymore ;)'
  replies: []
- id: 4895
  author: t800t8
  date: '2006-02-22T01:20:05'
  content: 'Cedric,

    Where can I get version 4.6 beta? Thanks!

    t800t8'
  replies: []
- id: 4896
  author: JB
  date: '2006-02-22T01:29:14'
  content: C
  replies: []
- id: 4897
  author: David Rabinowitz
  date: '2006-02-22T02:17:59'
  content: 'Cedric,

    Another method for testing random() functions is to generate a large set of numbers, and then test its entropy. For a good definition you can look at [1]. In a nutshell, it is a number that represents the "randomness" of the result. 0 (zero) is a constant, and the larger the number it is best. The optimum in such functions is the log_2 of the results domain - for example, if our domain is the numbers 0-255, then the optimum is 8 (log_2 256).

    David

    [1] http://en.wikipedia.org/wiki/Information_entropy'
  replies: []
- id: 4898
  author: Frank Bolander
  date: '2006-02-22T09:39:48'
  content: 'Actually, Uniform noise(random) distributions are but one type of random distribution. Gaussian noise(white noise) is definitely a valid test case and is prominent in Radar applications and other DSP apps as well as Monte Carlo simulations. Brownian noise, 1/f noise are other examples.

    http://en.wikipedia.org/wiki/Gaussian_noise.

    One way to test randomness is also by using a Null Hypothesis technique. Since there are parametric quantities that describe the random distributions any violation would prove an alternative solution(ie failure). These could easily be described as a unit test case since the parameters are finite.'
  replies: []
- id: 4899
  author: David Saff
  date: '2006-02-22T10:20:43'
  content: 'Thanks for the post, Cedric.  One thought.  You said "If you multiply the number of "yield points" of your code (locations where the JVM can preempt your thread) with the number of ways the JVM can preempt you, you quickly realize that there is no way you can be 100% sure that you covered all the scenarios."

    Actually, an alternative or complementary approach to random testing is to limit the amount of code that is exposed to multi-threading, and then go ahead and use the vast computing resources at our disposal to be 100% sure.  See

    http://javapathfinder.sourceforge.net/

    Actually, is "statistical testing" really what you''re doing here?  Perhaps stochastic testing: you''re using some inherent nondeterminism to test a nondeterministic system, but there''s not a statistical test at the end, just a simple predicate on the system state, right?'
  replies: []
- id: 4900
  author: Robert Wenner
  date: '2006-02-22T17:53:49'
  content: 'The thread safety testing is basically brute force thread safety testing -- quite usable to confirm a bug report due to improper synchronization. Can be a little tricky to come up with a sensible number of threads and repetitions, though.

    It''s surely nice to have support for this in a testing framework.

    When doing these tests, I found I sometimes use mocks to artificially delay certain operations. I also rarely have one method I want to confirm to be threadsafe, but the combination of two, with one (or 10) thread(s) each running one of the participating methods.

    Maybe aspects would also be nice to get in at certain points in the code under test and simulate a thread switch at an especially bad point in  time. (Helpful again for bug reports and after code reviews.)'
  replies: []
- id: 4901
  author: Cedric
  date: '2006-02-22T17:58:13'
  content: 'Hi Robert,

    Interesting point about forcefully preempting a thread, but I thought only the JVM could do this?

    Or maybe we are talking about a pointcut that would correspond to "yield points" in a section of code, but I''m not aware of any AOP framework that supports that...  Are you?

    --

    Cedric'
  replies: []
- id: 4902
  author: t800t8
  date: '2006-02-23T05:04:44'
  content: 'Cedric,

    I''m just a newbie with TestNG. Can you help me? I want to implement a setup method but it will only serve for a group of test methods. How can I declare it in @Configuration? Thanks!

    And when I run test case in IntelliJ Demetra build 5162, TestNG can run and return correct result but it has some exceptions

    update failed for AnAction with ID=GuiDesigner.DataBindingWizard

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    java.lang.NullPointerException

    at com.theoryinpractice.testng.ui.TestTreeView.getData(TestTreeView.java:68)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:7)

    at com.intellij.ide.impl.DataManagerImpl.a(DataManagerImpl.java:27)

    at com.intellij.ide.impl.DataManagerImpl.access$200(DataManagerImpl.java:21)

    at com.intellij.ide.impl.DataManagerImpl$MyDataContext.getData(DataManagerImpl.java:18)

    at com.intellij.uiDesigner.actions.DataBindingWizardAction.update(DataBindingWizardAction.java:63)

    at com.intellij.openapi.actionSystem.impl.Utils.expandActionGroup(Utils.java:52)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl.updateActionsImmediately(ActionToolbarImpl.java:106)

    at com.intellij.openapi.actionSystem.impl.ActionToolbarImpl$MyTimerListener.run(ActionToolbarImpl.java:5)

    at com.intellij.openapi.actionSystem.impl.WeakTimerListener.run(WeakTimerListener.java:0)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.a(ActionManagerImpl.java:15)

    at com.intellij.openapi.actionSystem.impl.ActionManagerImpl$MyTimer.actionPerformed(ActionManagerImpl.java:6)

    at javax.swing.Timer.fireActionPerformed(Timer.java:271)

    at javax.swing.Timer$DoPostEvent.run(Timer.java:201)

    at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:209)

    at java.awt.EventQueue.dispatchEvent(EventQueue.java:461)

    at com.intellij.ide.IdeEventQueue.defaultDispatchEvent(IdeEventQueue.java:178)

    at com.intellij.ide.IdeEventQueue.a(IdeEventQueue.java:1)

    at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:147)

    at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:242)

    at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:163)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:157)

    at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:149)

    at java.awt.EventDispatchThread.run(EventDispatchThread.java:110)

    t800t8'
  replies: []
- id: 4903
  author: t800t8
  date: '2006-02-23T05:15:23'
  content: 'Oop, sorry, it''s too long. Please delete it for me. Thanks!

    t800t8'
  replies: []
- id: 4904
  author: Ruslan Zenin
  date: '2006-02-23T12:17:36'
  content: 'Thanks Cedric for considering thread pools for your testing framework!

    I''m really exited to start using this new feature!

    Also, please think how to nicely report these multi-threaded test results. I mean HTML report and Eclipse plugin. Somehow these tests have to be marked as multithreaded (and # of threads used)'
  replies: []
- id: 4905
  author: Cedric
  date: '2006-02-23T12:33:06'
  content: 'Ruslan,

    This information is already there (in the HTML reports).  Each test result shows the thread ID on which the test ran (and also the instance ID if you are using invocationCount, for example, and you want to make sure the methods are invoked on separate instances).'
  replies: []
- id: 4906
  author: Bill de hOra
  date: '2006-02-23T15:08:19'
  content: Highly random sequences shouldn't compress well. I'd run gzip over a sequence and check the compression effectiveness ;)
  replies: []
- id: 4907
  author: George Petrov
  date: '2006-02-25T14:47:33'
  content: 'I think this is a somewhat inappropriate comparison. A random method should yield a certain distribution. In statistics the random() method itself IS the variable. So all you need to do is generate a large enough (this exact number be calculated) number of random numbers and check if their distribution is the same as the required distribution (again, there are statistical tests for that - different distributions have different parameters).

    On the other hand, testing for thread-safety seems to be just a matter of beating your app with requests until you reach a point where you get unexplainable results. If that''s high above your non-functional requirements, you''re safe.....  Well, with some level of confidence (which again can be calculated.)'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/gaussian.png)

How would you test a `random()` function?

Let's assume that it can be initialized with a seed that you supply in order to generate different sequence of random numbers, but that the same seed will always generate the same sequence.

The first idea that comes to mind is to pick a constant seed, write down the numbers returned, make them the "expected" value of your test, run the test with that same seed and compare these values one by one.  It's a start, but it's a far cry from testing the actual specification of your method, which is approximately "returns a (pseudo)-random number between 0.0f and 1.0f".

Enter statistical testing.

First of all, you need to define exactly what you mean by "random".  One way would be to define it in terms of average:  "For a big enough sample of numbers, the average will be 0.5f with an error of 0.01f".

Here is a quick implementation:

> @Test  
>  **public  ****void  **verifyAverage() {  
>    **float  **sum = 0;  
>    **int  **count = 10000;  
>    **for  **(**int  **i = 0; i < count; i++) {  
>      sum += random();  
>    }  
>    **float  **average = sum / count;  
>    **float  **tolerance = 0.01f;  
>    assertTrue(0.5 - tolerance <= average && average <= 0.5 + tolerance);  
>  }

Of course, you should extend this test in many ways, such as testing on bigger samples, use different seeds (I didn't use any in this example) or use a different metric.  For example, what if your algorithm is buggy and returns pairs of 0.1, 0.9, 0.1, 0.9, etc...  It will pass this test but the distribution is obviously not correct.  To address this, you might want to measure the standard deviation of the returned values.

Here is another potential bug:  what if the values "bunch up" around the average, say, they are always between 0.4 and 0.6?  Again, both `verifyAverage()` and `verityStandardDeviation()` will probably pass, so you might want to introduce a third test for the distribution, say "[`verifyEntropy()`](http://en.wikipedia.org/wiki/Information_entropy)".

Statistical testing comes in handy in many other situations.  Here are two more examples.

How would you verify that your Web application can create simultaneously a thousand users?  Imagine that your Web site is tremendously popular and you have people sign up in bursts.  All these pages are going to try to insert/update rows in the database roughly at the same time, so how do you make sure that your transactions are correctly isolated?

Again, statistical testing to the rescue.  Simulate all these users accessing your database simultaneously and make sure your database contains the right values at the end (this is slightly different from load-testing, which only makes sure that the performance of your server remains acceptable, but you do test these two approaches similarly:  by firing a lot of simultaneous requests to your server).

And finally, I reach the point of this post:

> **How can you test that your code is thread-safe?**

Of course, your first reaction should be to understand the code you are trying to test, analyze the various values that can come in contention and make sure these  values are adequately protected (typically with synchronization).  But as soon as your code becomes complicated enough and starts calling into more methods (some of which you might not even have the source of), this approach becomes very quickly impractical and your implementation is at best theoretical.

If you multiply the number of "yield points" of your code (locations where the JVM can preempt your thread) with the number of ways the JVM can preempt you, you quickly realize that there is no way you can be 100% sure that you covered all the scenarios.

Again, statistical testing is can help you increase the percentage of comfort you have in your testing.

The upcoming [TestNG 4.6](http://testng.org) contains a very powerful feature that makes this kind of testing trivial:  individual method thread pools.

Consider the following code:

> @Test(threadPoolSize = 10, invocationCount = 10000)  
>  **public  ****void  **verifyMethodIsThreadSafe() {  
>    foo();  
>  }  
>    
>  @Test(dependsOnMethods = "verifyMethodIsThreadSafe")  
>  **public  ****void  **verify() {  
>    // make sure that nothing was broken  
>  }

`invocationCount` has been in TestNG for quite a few releases but `threadPoolSize` is new, and it basically instructs TestNG to create a pool of ten threads that will then be used to invoke the test methods ten thousand times.  Thanks to its dependency, the `verify()` method will be invoked once all the `verifyMethodIsThreadSafe()` methods have been called and it will double check that the data modified by the concurrent code is what we expect.

Here is a quick illustration of this feature where the test method sleeps a random interval before exiting.  We call this method six times with a pool of three threads:

> **private  ****void  **log(String s) {  
>    System.out.println("[" + Thread.currentThread().getId() + "] " + s);  
>  }  
>      
>  @Test(threadPoolSize = 3, invocationCount = 6)  
>  **public  ****void  **f1() {  
>    log("start");  
>    **try  **{  
>      **int  **sleepTime = **new  **Random().nextInt(500);  
>      Thread.sleep(sleepTime);  
>    }  
>    **catch  **(Exception e) {  
>      log("  *** INTERRUPTED");  
>    }  
>    log("end");  
>  }

Here is a sample output:

> [10] start  
>  [8] start  
>  [9] start  
>  [10] end  
>  [10] start  
>  [9] end  
>  [9] start  
>  [8] end  
>  [8] start  
>  [8] end  
>  [10] end  
>  [9] end  
>  PASSED: f1  
>  PASSED: f1  
>  PASSED: f1  
>  PASSED: f1  
>  PASSED: f1  
>  PASSED: f1

As you can see, the first three runs fill the thread pool, which then blocks until one of the threads finish.  Thread#10 finishes first, and it is reallocated to another run of the method right away, and so on.  Finally, all the threads end and TestNG reports that all six invocations have passed.

What if one of these methods is taking too long to respond?

You can use another feature of TestNG to make sure that your tests won't be locked up forever:  `timeOut `(this attribute already existed in older versions of TestNG and it's simply being reused here).

Let's make things a bit more interesting and specify a `timeOut` of 500ms but this time, making the method sleep a random number of milliseconds between 0 and 1000.  What this means is that whenever the method sleeps for less than 500ms, it will pass, but if it takes longer to wake up, TestNG will interrupt it and mark it as a failure.

Here is the code:

> @Test(threadPoolSize = 3, invocationCount = 6, timeOut = 500)  
>  **public  ****void  **f1() {  
>    log("start");  
>    **try  **{  
>      **int  **sleepTime = **new  **Random().nextInt(1000);  
>      **if  **(sleepTime > 500) log("   should fail");  
>      Thread.sleep(sleepTime);  
>    }  
>    **catch  **(Exception e) {  
>      log("  *** INTERRUPTED");  
>    }  
>    log("end");  
>  }

And the output:

> [11] start  
>  [12] start  
>  [12] should fail  
>  [13] start  
>  [13] should fail  
>  [11] end  
>  [14] start  
>  [14] should fail  
>  [12] *** INTERRUPTED  
>  [12] end  
>  [13] *** INTERRUPTED  
>  [13] end  
>  [15] start  
>  [16] start  
>  [16] end  
>  [14] *** INTERRUPTED  
>  [14] end  
>  [15] end  
>    
>  ===============================================  
>  Test Suite  
>  Total tests run: 6, Failures: 3, Skips: 0  
>  ===============================================

In this run, three methods came up with a sleep time greater than 500 and therefore, announced that they should fail.  A few seconds later, these three methods got interrupted by TestNG and then marked as failures.

Individual method thread pools will appear in TestNG 4.6, which will be released very soon (beta versions are available if you are interested).

 

_Update: Thanks to JB and David for pointing out that the property you want to test about the returned values is entropy and not a Gaussian distribution. I updated this article accordingly._

_Update 2: TestNG 4.6 beta can be downloaded[here](http://testng.org/testng-4.6beta.zip)_.
