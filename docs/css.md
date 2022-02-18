## CSS info

https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS

> css opacity : https://developer.mozilla.org/en-US/docs/Web/CSS/opacity

> web safe fonts : use google fonts for OS compatibility issues.

### fonts

https://www.w3schools.com/css/tryit.asp?filename=trycss_font-size_percent_em

> `font-family : font-family: Verdana, Geneva, Tahoma, sans-serif;` 

> The above example tells the browser to use fonts in order of availability

>  css text-indent property : 

### values & units
```  
if you set an element's font-size as a percentage, 
 it will be a percentage of the font-size of the element's parent. If you use a percentage for a width value, 
 it will be a percentage of the width of the parent.
 
 ```
 
 https://web.dev/learn/css/sizing/

### background/background-image

```
#example1 {
  background: url(img_tree.gif) left top no-repeat, url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
  background-size: 50px, 130px, auto;
  }

```


### For full background-image use html tag

```
html { 
  background: url(img_man.jpg) no-repeat center fixed; 
  background-size: cover;
}

```

### Box-shadow

https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow

https://www.w3schools.com/cssref/css3_pr_box-shadow.asp

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Box-shadow_generator

>box-shadow is defined in terms of : x-offset,y-offset,blur radius,spread radius

> The more the blur radius value , the shadow will become more lighter

> Increasing spread radius increases the area covered by shadow.


### selectors

### pseudo classes/elements

> css pseudo class is used to style/define the specific state of an element.

```
tr:first-child{
 color:blue;
}
```

> A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). 

> For example, ::first-line can be used to change the font of the first line of a paragraph.


### Box model

> https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#aside_inner_and_outer_display_types

> everything in css has a box around it. 

> Boxess have outer display type and inner display type.

> Outer display type takes up values as **block** or **inline**

> Inner display type determines layout of elements inside the box. inner display type can be : flex , inline-flex,grid


**Box-sizing switch to border-box**

https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/

**Using display inline-block for li span elements**

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#using_display_inline-block

**Margins/Padding**

> Below example shows using padding in em units, which is relative to element's own font-size

```
div.box{
font-size:2em;
padding:1em;
}

```
> Here padding becomes = 2em = 2*16 = 32px;

https://codepen.io/mavpks/pen/yLPPbYM


**pseudoclass/pseudoelements**

 pseudoclass tend to act as if you had applied a class to some part of your document,
 often helping you cut down on excess classes in your markup, and giving you **more flexible, maintainable code**.

> A **pseudo-element** is like adding or targeting an extra element via css without having to add more HTML.

> **While DevTools may show pseudo-elements in the Elements panel, pseudo-elements won't be found in the HTML, they're owned by the browser.**

> Use values from https://unicodelookup.com/ for inserting special characters/emojis into pseudoelement's content

```
p::after{
 content: " \27A5"; //hex value for ➥	heavy black curved downwards and rightwards arrow
}
```
