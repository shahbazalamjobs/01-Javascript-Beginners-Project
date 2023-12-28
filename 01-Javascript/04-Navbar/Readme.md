
# Navbar

![image](https://github.com/shahbazalamjobs/01-Javascript-Beginners-Project/assets/125631878/5400ff95-2b53-4282-8764-2eef19b597be)


![image](https://github.com/shahbazalamjobs/01-Javascript-Beginners-Project/assets/125631878/c0a81636-9d52-47e4-b718-8d1e421e97a7)

![image](https://github.com/shahbazalamjobs/01-Javascript-Beginners-Project/assets/125631878/587ace32-c689-4e28-ae02-1928bdeff878)



Live Link: [https://shahbazalamjobs.github.io/Sidebar/](https://shahbazalamjobs.github.io/Sidebar/)

---
### JS main logic

1. **Bars Icon Click Event:**
   ```javascript
   barsIcon.addEventListener('click', function (event) {
       // Stop the event from propagating to the document
       event.stopPropagation();
       // Toggle the 'show' class on the centerNav element
       centerNav.classList.toggle('show');
   });
   ```
   - This code sets up a click event listener on the `barsIcon` element (presumably representing a bars icon in a navigation menu).
   - `event.stopPropagation()` is used to prevent the click event from propagating up to the document. This ensures that clicking the bars icon doesn't immediately trigger the body click event listener.

   - `centerNav.classList.toggle('show')` toggles the presence of the 'show' class on the `centerNav` element. This class likely controls the visibility or styling of the center-aligned navigation menu.

2. **Body Click Event:**
   ```javascript
   document.body.addEventListener('click', function (event) {
       // Check if the clicked element is not a child of barsIcon
       if (!barsIcon.contains(event.target)) {
           // If true, hide the menu by removing the 'show' class
           centerNav.classList.remove('show');
       }
   });
   ```
   - This code sets up a click event listener on the `document.body`, listening for clicks anywhere on the body.
   - `barsIcon.contains(event.target)` checks if the clicked element is a child of the `barsIcon`. If it's not (meaning the click is outside the bars icon), the condition is true.

   - Inside the condition, `centerNav.classList.remove('show')` is executed, removing the 'show' class from `centerNav`. This ensures that clicking outside the bars icon hides the center-aligned navigation menu.

In summary, these event listeners work together to toggle the visibility of the center-aligned navigation menu when clicking the bars icon and hide the menu when clicking outside the icon. The use of `stopPropagation()` prevents unintended interactions with the body click event.

---


### CSS logic of icon inside input field

```css
/* Relative positioning for the search container */
.navbar__search {
    position: relative;
}

/* Placing search icon inside input field */
.search-icon {
    padding-right: 4px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #999;
}
```

1. **Relative Positioning for Search Container:**
   - The `.navbar__search` class has `position: relative;`. This means that any child elements with `position: absolute;` will be positioned relative to this container.

2. **Placing Search Icon Inside Input Field:**
   - The `.search-icon` class is applied to the search icon.
   - `position: absolute;`: Takes the icon out of the normal flow of the document and positions it relative to its nearest positioned ancestor, which is the element with `position: relative;` (`.navbar__search` in this case).
   - `top: 50%;`: Positions the top of the icon at 50% of the height of its containing element (`.navbar__search`), effectively centering it vertically.
   - `right: 10px;`: Positions the right edge of the icon 10 pixels from the right edge of its containing element.
   - `transform: translateY(-50%);`: Adjusts the vertical position of the icon by moving it up by 50% of its own height. This ensures perfect vertical centering within the `.navbar__search` container.

