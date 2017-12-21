# Sandwich-Maker

## Your project should have one HTML file that has:

A section of options for each sandwich part
The ability to select multiple, or zero, choices for each section (such as turkey and bacon, or "no meat")
An empty DOM element into which the final sandwich order and its cost will be inserted
Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a Sandwich module, then create the following as individual modules.

- bread
 -meat
 -cheese
- condiments
- veggies

The ingredient choices in each module should be stored as JS objects that contain the ingredients as keys and their cost as the value. {"turkey": 0.90, "bacon": 1.50}

Make sure the ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.

Each module should expose, via module.exports, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. That argument's value should be the ingredient selected by the user. You will need to implement Browserify as a task in a Gruntfile, in order to compile your modules into a single JS file.

You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

Don't worry about exposing the prices to the user until you display the final cost. This is just an exercise, not a business model.
