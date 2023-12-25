# Color Flipper

![image](https://github.com/shahbazalamjobs/01-Javascript-Beginners-Project/assets/125631878/e33684a8-2d7b-4d1f-8308-bcdfa5bcd0ce)

Color Flipper Live Project : [Link](https://shahbazalamjobs.github.io/Colour-Flipper/)

## Interview Questions


Q1. Why we put JavaScript files just before the closing `</body>` tag

- Page Loading Performance: Placing JavaScript at the end of the body allows the HTML content to load first. Since JavaScript execution is often blocking, it ensures that the user sees the page content before any potentially heavy JavaScript operations are performed. This can improve perceived page load times.

- Progressive Rendering: Users can start interacting with the page even before all JavaScript is loaded. If JavaScript were placed in the head, it might delay the rendering of the entire page until the script is fetched and executed.

- Dependency on DOM Elements: Placing scripts at the end ensures that, by the time the script is executed, the DOM (Document Object Model) elements above it have been parsed. If your JavaScript relies on manipulating or interacting with DOM elements, this arrangement prevents issues related to elements not being available when the script runs.

Q2. Basic Animation 
```js

    transform: scale(1.05);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
    transition: background-color 1s, transform 0.3s, box-shadow 0.3s;

/*
   Add a box shadow to the element with the following properties:
   - Horizontal offset: 0
   - Vertical offset: 5px (creates a slight lift)
   - Blur radius: 8px (provides a soft and spread-out shadow)
   - Color: RGBA black with 30% opacity for a subtle and translucent shadow effect.
   - Apply a slight scale transformation to the element, increasing its size by 5% for zoom effect.
*/
```
