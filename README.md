Sticky Nav
====

Sticky Nav is a JavaScript library for preventing HTML elements such as navigations from leaving the viewport.  Once a sticky element reaches the specified distance in pixels from the top of the user's browsers stops scrolling with the page and stays where it is.

Usage
====

Include the script in your HTML head:

```html
<script type="text/javascript" src="sticky_nav.js"></script>
```

Then run some JavaScript like the following sometime after the relevant elements have been loaded:

```javascript
StickyNav.init({selector: '.selector-for-the-sticky-element', topMargin: 15});
```

You can also make several elements sticky with different margins in a batch:

```javascript
StickyNav.init({selector: '.selector-for-element-1', topMargin: 0},
               {selector: '.selector-for-element-2', topMargin: 100});
```
