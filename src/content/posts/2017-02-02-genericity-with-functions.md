---
title: Genericity with functions
date: '2017-02-02T14:10:37'
slug: genericity-with-functions
categories:
- Kotlin
---

I can't count the number of times I have manipulated trees and graphs in my career as a software engineer. They are the kind of structure that crops up over and over again in your code, pretty much regardless of the kind of application you are working on. And along these tasks, something that I've had to do over and over again is to display such a tree, usually for debugging purposes. Here is what a simple implementation can look like: 

```kotlin
class Node(val value: String, val children: List<Node> = emptyList())
fun displayGraph(roots: List<Node>, indent: String = "") {
    roots.forEach {
        println(indent + it.value)
        displayGraph(it.children, indent + "  ")
    }
}
```

The `Node` contains a payload and a list of children. The `displayGraph()` function simply displays the value of each current node and then calls itself recursively with an increased indentation. Here is an example of the output: 

```kotlin
val node = Node("Root", listOf(
    Node("A", listOf(
        Node("A1"),
        Node("A2"),
        Node("A3"))
    ),
    Node("B", listOf(
        Node("B1"),
        Node("B2", listOf(
                Node("B21"),
                Node("B22"))
        )))
    )
)
displayGraph(listOf(node))



Root
  A
    A1
    A2
    A3
  B
    B1
    B2
      B21
      B22
```

## Down the rabbit hole

Now imagine that another part of your code is also manipulating graphs, and you'd like to display those as well. However, they are currently using their own data structure: 

```kotlin
class Tree(val payload: Int, val leaves: List<Tree>)
```

Different payload type, different name, but same structure. Obviously, your code should be able to display this structure in a generic fashion, so you introduce an interface: 

```kotlin
interface INode<T> {
    val children: List<INode<T>>
    val value: T
}
```

You rewrite your `displayGraph()` implementation with that interface: 

```java
fun <T> displayGraph(roots: List<INode<T>>, indent: String = "") {
    roots.forEach {
        println(indent + it.value)
        displayGraph(it.children, indent + "  ")
    }
}
```

And you make your two types conform to that interface: 

```kotlin
class Node(override val value: String,
    override val children: List<Node> = emptyList()) : INode<String>
class Tree(val payload: Int, val leaves: List<Tree>) : INode<Int> {
    override val children: List<Tree> = leaves
    override val value: Int = payload
}
```

And you can now pass either `Node` or `Tree` to your `displayGraph()` function: 

```kotlin
    val graph = listOf(Node("A", listOf(
            Node("A1"),
            Node("A2")))
    )
    displayGraph(graph)
    val tree = listOf(Tree(1, listOf(
            Tree(11),
            Tree(12)))
    )
    displayGraph(tree)
```

Output: 

```text
A
  A1
  A2
1
  11
  12
```

So we made a solid step toward making our code generic while avoiding duplication, but we're not going to stop here. 

Imagine now that this `Tree` class doesn't belong to you (for example, it came from a library or some other portion of code that you can't modify). Therefore, you can't make it conform to your `INode` interface. How can you still reuse your code despite this limitation? 

This brings us to the main take away of this post: 

> If you can't adapt your data structures to your algorithms, adapt your algorithms to your data structures. 

Let's ask ourselves the following question: what would it take for `displayGraph()` to work if it can't make any assumption about the types it's working on? Because these types can come from areas we don't control, we can't assume anything about them. In other words, they are some `T` type, which we know nothing about. 

Well, we can ask the caller to pass us functions to manipulate this type. Looking at the implementation of `displayGraph()`, all we need is two functions that will give us: 

  * The children of a node.
  * The value contained in a node.

```java
fun <T, U> displayGraphGeneric(roots: List<T>,
        children: (T) -> List<T>,
        value: (T) -> U,
        indent: String = "") {
    roots.forEach {
        println(indent + value(it))
        displayGraphGeneric(children(it), children, value, indent + "  ")
    }
}
```

As promised, you can see that the code above is manipulating an unknown type `T`, and in order to do that, we use the functions passed in parameters. Notice also the arrival of a second type parameter `U`, which is used to define the type of the payload. As you might have noticed, `Node` has a payload of type `String` while `Tree`'s is `Int`. Therefore, we need a second type parameter to capture this flexibility. 

How do we call this new generic function for our two types? 

```text
displayGraphGeneric(graph, Node::children, Node::value)
displayGraphGeneric(tree, Tree::leaves, Tree::payload)
```

What if you sometimes want to display the graph on standard out and other times display it with the logger? You guessed it: you can make this generic by passing an additional closure. 

## Stepping back

So what did we do exactly through this exercise? 

Functions need a contract in order to do their job. With the first approach, the contract is encoded in the type, which places a constraint on the kind of value you can pass to the function. In our second approach, the contract has been extracted from the type and passed on the side, as function parameters. This makes the syntax a bit more verbose but you gain a very important piece of functionality: the ability to apply functions to types even though they don't conform to a certain interface. 

Does this characterization ring a bell? The concept you might be thinking of is "type class". 

In effect, we have just implemented our own version of a type class mechanism. If you are not familiar with type classes, you can think of them as a "family of types" in much the same way that a type is a "family of values". It's just one step above on the abstraction ladder. Type classes look like interfaces except they can be defined after the types they apply to have been defined, just like we did with our `Tree` and `Graph` classes. 

Our manual implementation shown above is actually a lot closer from a real type class implementation than you think. Compilers typically implement type classes by passing along invisible parameters commonly referred to as ["dictionaries"](http://okmij.org/ftp/Computation/typeclass.html#dict) that contain the information necessary for the compiler to generate the code that will connect the value to whatever it takes to make it conform to the expected interface. The only difference with our implementation above is that we passed these functions explicitly. 

Notice also how this approach allows you to "adapt" types to obey a certain contract, and from that standpoint, it could qualify as the "Adapter" pattern, except that this time, it's implemented in a functional way instead of an object oriented way. The emphasis has moved away from the object and the class (which is unknown) and toward functions (which are clearly specified). Next time someone tells you design patterns don't exist in functional programming because they are not necessary, point them to this post. 

Next time you are confronted with a problem where you'd like to reuse an existing generic algorithm, remember that you can implement your own type class mechanism as shown in this article.
