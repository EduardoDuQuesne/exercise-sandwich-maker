/*jshint esversion: 6 */
// pull in the module(s) you'll need to fetch the toppings' prices
const meat = require("./meats"); 
const cheese = require("./cheese"); 
const bread = require("./bread"); 
const condiment = require("./condiment"); 
const veggies = require("./veggies"); 
//If this is the path to your mat.js file, how do you need to structure your files to make this work?

// Variable to hold the price of the sandwich. Default to 0.
var sandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-items");

meatChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    if (event.target.checked) {
        sandwichPrice += meat.addMeat(selectedTopping);
    } else {
        sandwichPrice = sandwichPrice - meat.addMeat(selectedTopping);
    }
});


// CHEESE SELECTION
var cheeseChooser = document.getElementById("cheese-items");
cheeseChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    if (event.target.checked) {
        sandwichPrice += cheese.addCheese(selectedTopping);
    } else {
        sandwichPrice = sandwichPrice - cheese.addCheese(selectedTopping);
    }
});

//CONDIMENT SELECTION
var condimentChooser = document.getElementById("condiment-items");
condimentChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    if (event.target.checked) {
        sandwichPrice += condiment.addCondiment(selectedTopping);
    } else {
        sandwichPrice = sandwichPrice - condiment.addCondiment(selectedTopping);
    }
});

//VEGGIES SELECTION
var veggieChooser = document.getElementById("veggie-items");
veggieChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    if (event.target.checked) {
        sandwichPrice += veggies.addVeggies(selectedTopping);
    } else {
        sandwichPrice = sandwichPrice - veggies.addVeggies(selectedTopping);

    }
});


// BREAD SELECTION
let breadPrice = 0;
var breadChooser = document.getElementById("bread-items");
breadChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    breadPrice = bread.addBread(selectedTopping);
});

let submitBtn = document.getElementById("submit-order");
submitBtn.addEventListener("click", () => {
    printToDom(sandwichPrice + breadPrice);
});

let outputOrder = document.getElementById("your-order");
let printToDom = (price) => {
    outputOrder.innerHTML = `Total: $${price.toFixed(2)}`;
};
