## BookList Technical requriments 

The app is a form with 3 inputs and ability to render a list of books the user adds through the form .

## Folder Structure 

- `index.html` - the main sturucre of the app .
- `style.css` - the css style of the app
- `script.js` - the logic added to the app

## Requirements

1. A form with 3 inputs:
   - The form consiste of :
       -**title** input : with type `text`
       -**auther** input : with type `text`
       -**description** :textarea
   - The form has basic validation of the brawser and additional validation with js :
       -**title** required
       -**auther** required
       -**description** required & minimum length is 20 words 
2. The form should have a good appearance
3. Handle form submit :
   -Capture inputs value *
   -validate description *
   -create book element :
     -title ---> h3
     -description --->p
     -auther --->p
     -delete --->btn
   -create delete button
   -append delete to the book element
   -append the book elements to the books container
   -clear the fields after submitting
4. The `add` button should initiate the submit event
5. There should be an event listener on `Enter` button that submits also the form
6. Every book element should have a delete button, when clicked removed the item from the list & from storage
7. When adding a new book ,it should be stored in `localStorge`.
8. when loading/reloading the page it should retrive the books from storge.
