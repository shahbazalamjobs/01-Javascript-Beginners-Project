# Color Flipper

![image](https://github.com/shahbazalamjobs/01-Javascript-Beginners-Project/assets/125631878/e33684a8-2d7b-4d1f-8308-bcdfa5bcd0ce)


## Interview Questions


Q1. Why we put JavaScript files just before the closing `</body>` tag

- Page Loading Performance: Placing JavaScript at the end of the body allows the HTML content to load first. Since JavaScript execution is often blocking, it ensures that the user sees the page content before any potentially heavy JavaScript operations are performed. This can improve perceived page load times.

- Progressive Rendering: Users can start interacting with the page even before all JavaScript is loaded. If JavaScript were placed in the head, it might delay the rendering of the entire page until the script is fetched and executed.

- Dependency on DOM Elements: Placing scripts at the end ensures that, by the time the script is executed, the DOM (Document Object Model) elements above it have been parsed. If your JavaScript relies on manipulating or interacting with DOM elements, this arrangement prevents issues related to elements not being available when the script runs.




