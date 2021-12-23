[check HTML5 support](https://caniuse.com/)

## DOM
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure
wherein each node is an object representing a part of the document. **The DOM represents a document with a logical tree**. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them one can change the structure, style or content of a document. 
Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed.[2]

![Screenshot](pic_htmltree.gif)


## HTML5 syntax

https://www.w3schools.com/html/html_entities.asp

> Reserved characters in HTML must be replaced with character entities. (e.g. < , > , non breaking space)

### Form input ###
> All input types should have a "id" and "name" attribute.

> "name" attribute is essential for including the input value in data sent to server side. 

```<input type="radio" id="java" name="codinglanguage">```


> **textarea resize** option : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#controlling_whether_a_textarea_is_resizable

### Form fieldset details ###

Each time you have a set of radio buttons, you should nest them inside a `<fieldset>` element
  
 ```Each time you have a set of radio buttons, you should nest them inside a <fieldset> element.
  There are other use cases, and in general the <fieldset> element can also be used to section a form. 
  Ideally, long forms should be spread across multiple pages, 
  but if a form is getting long and must be on a single page,
  putting the different related sections inside different fieldsets improves usability.```
