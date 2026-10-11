---
title: Templates in Visual Basic
date: '2004-07-09T06:45:06'
slug: templates-in-visual-basic
categories:
- General
comments:
- id: 1758
  author: Merrick
  date: '2004-07-09T07:59:50'
  content: 'Your example is the normal form we get today. The generic version is slightly more obfuscated: Sub Sort(Of T)(Byval Arr() As T) ... End Sub.'
  replies: []
- id: 1759
  author: Robert Watkins
  date: '2004-07-13T04:47:53'
  content: This isn't really surprising; VB.NET is really just a syntatic translation of C#. Makes you wonder why they bothered...
  replies: []
---

For those of you still complaining about the introduction of Generics in Java, know that [ Visual Basic will have Generics](http://msdn.microsoft.com/vbasic/whidbey/default.aspx?pull=/library/en-us/dnvs05/html/vb2005_generics.asp) as well in Whidbey (the next version of Visual Studio):
    
    
    Class MyCollection(Of ElementType)
    Sub Add(Byval key As String, Byval Element As ElementType)
    'Note that the type parameter ElementType is being used inside
    'the generic type just like any other type
    '
    Dim Element2 As ElementType
    ...
    End Sub
    ...
    End Class
    Dim IntegerCol As New MyCollection(Of Integer)
    Dim DateCol As New MyCollection(Of Date)
    

Needless to say this beast bears very little resemblance with the Basic of my childhood (Applesoft Basic).
