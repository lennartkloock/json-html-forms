# json-html-forms
This is a small js script to transmit HTML forms as json. It prevents the HTML form to be send and instead sends it as a json object.  
It needs to be added at **the end of the DOM** to detect all forms.

## Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Json HTML Forms – Example</title>
</head>
<body>
<form action="/submit" method="post">
    <p>This form will be submitted to <code>/submit</code></p>
    <label>
        Name:
        <input type="text" name="name">
    </label>
    <br>
    <label>
        How old are you?
        <input type="number" name="age" min="0">
    </label>
    <br>
    <label>
        Telephone Number:
        <input type="tel" name="tel-number">
    </label>
    <br>
    <label>
        Do you like Pizza?
        <input id="check" type="checkbox" name="pizza">
    </label>
    <br>
    <input type="submit" value="Submit">
</form>
<script src="https://raw.githubusercontent.com/lennartkloock/json-html-forms/master/json-forms.js"></script>
</body>
</html>
```
***
This software is licensed under the `GNU General Public License v3.0`.  
So please make your software open-source too!
