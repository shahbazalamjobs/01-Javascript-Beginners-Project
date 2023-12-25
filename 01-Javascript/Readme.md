
# Important Concepts

Center a container inside the body using CSS. Here are some common methods:

1. **Flexbox:**
   ```css
   body {
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100vh;
       margin: 0;
   }
   ```

2. **Grid:**
   ```css
   body {
       display: grid;
       place-items: center;
       height: 100vh;
       margin: 0;
   }
   ```

3. **Absolute Positioning:**
   ```css
   body {
       position: relative;
       height: 100vh;
       margin: 0;
   }

   .container {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
   }
   ```

4. **Text-Align and Line-Height (for inline or inline-block elements):**
   ```css
   body {
       text-align: center;
       height: 100vh;
       margin: 0;
   }

   .container {
       display: inline-block;
       vertical-align: middle;
       line-height: 100vh;
   }
   ```

5. **Table Cell (for older browser compatibility):**
   ```css
   body {
       display: table;
       width: 100%;
       height: 100vh;
       margin: 0;
   }

   .container {
       display: table-cell;
       text-align: center;
       vertical-align: middle;
   }
   ```

