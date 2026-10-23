# HTTP observations (Lab 4, Task 1)


 Request method for index.html  GET 
 Status code with Disable cache ticked  200 OK 
 Status code on a normal reload  304 
 Status code for /nothing-here.html  404 Not Found 
 Value of the Content-Type response header  text/html; charset=UTF-8 
 Remote Address (IP and port)  127.0.0.1:5500 
 Protocol in the address bar (http or https)  http 

## Why is this address http and not https?
This address uses http because 127.0.0.1 is my  laptop  had so  traffic never travels across a network where someone could read it. HTTPS protects data in transit and here there is no transit to protect my data and its server fails 



## Specificity experiment
An ID selector (#main p) has higher specificity (1,0,1) than a class and element selector (.hero p with 0,1,1), so it overrides the earlier rule regardless of order in the stylesheet. When changed to main p (0,0,2), it loses to .hero p and the hero paragraph returns to white.






## Bug hunt findings

1. **CSS Link and Filename Mismatch:**
   - **Symptom:** Website was displaying completely unstyled plain HTML text across all pages.
   - **Root Cause:** HTML files referenced `css/styles.css`, but the stylesheet was named `style.css` inside a folder named `cs`.
   - **Fix:** Renamed directory to `css` and stylesheet to `styles.css`.

2. **Malformed HTML and Broken Tags in `order.html`:**
   - **Symptom:** Page layout broken with duplicate `<main>` wrappers and misplaced structural tags.
   - **Root Cause:** Merge conflict leftovers and unclosed tags caused invalid nesting.
   - **Fix:** Cleaned markup, ensured one single `<main id="main">` block, valid fieldset pairing, and valid document closure.

3. **Safe DOM Insertion in `order.js`:**
   - **Symptom:** Potential cross-site scripting (XSS) risk if user input contains HTML/JavaScript.
   - **Root Cause:** Directly inserting raw user strings into innerHTML executes unsafe tags.
   - **Fix:** Used `cell.textContent = text;` inside `addCell()` to ensure customer text is treated strictly as plain text.




   ## Bug log (Lab 4, Task 6)

| # | What was wrong (file and line) | Which tool showed it | My fix |
|---|--------------------------------|----------------------|--------|
| 1 | bugs.html line 6: stylesheet link was `style.css` instead of `bugs.css` | Network tab (404 Not Found) | Changed href to `bugs.css` |
| 2 | bugs.html line 2: missing `lang` attribute on `<html>` | W3C Validator & Lighthouse | Added `lang="en"` |
| 3 | bugs.html line 9: `<div class="menu">` used instead of semantic `<nav>` | Accessibility tree | Changed `div` to `<nav class="menu" aria-label="Main">` |
| 4 | bugs.html line 16: heading jumped from `<h1>` to `<h4>` | Accessibility tree & Lighthouse | Changed `<h4>` to `<h2>` |
| 5 | bugs.html line 17: `<img>` tag was missing `alt` attribute | Lighthouse & W3C Validator | Added `alt="Campus Café logo"` |
| 6 | bugs.html line 20: label `for="mail"` mismatched input `id="email"` | DevTools Elements & Lighthouse | Changed label attribute to `for="email"` |
| 7 | bugs.html line 22: `<button>` element missing explicit `type` attribute | W3C Validator | Added `type="submit"` to button |
| 8 | bugs.css line 13: misspelled CSS property `colour` | DevTools Styles pane (invalid property warning) | Changed `colour` to `color` |
| 9 | bugs.css line 20: missing semicolon after `#0b1f3a` causing cursor to fail | DevTools Styles pane | Added semicolon `;` after the color value |
| 10 | bugs.css line 24: class selector `.notes` did not match HTML class `note` | DevTools Elements / Styles pane | Changed selector to `.note` |