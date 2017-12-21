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
        console.log("selected", selectedTopping);
        sandwichPrice += meat.addMeat(selectedTopping);
        console.log("Price Add: ", sandwichPrice);
    } else {
        sandwichPrice = sandwichPrice - meat.addMeat(selectedTopping);
        console.log("Price Removed: ", sandwichPrice);

    }
});


// CHEESE SELECTION
var cheeseChooser = document.getElementById("cheese-items");
cheeseChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    if (event.target.checked) {
        console.log("selected", selectedTopping);
        sandwichPrice += cheese.addCheese(selectedTopping);
        console.log("Price Add: ", sandwichPrice);
    } else {
        sandwichPrice = sandwichPrice - cheese.addCheese(selectedTopping);
        console.log("Price Removed: ", sandwichPrice);

    }
});

//CONDIMENT SELECTION
var condimentChooser = document.getElementById("condiment-items");
condimentChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    if (event.target.checked) {
        console.log("selected", selectedTopping);
        sandwichPrice += condiment.addCondiment(selectedTopping);
        console.log("Price Add: ", sandwichPrice);
    } else {
        sandwichPrice = sandwichPrice - condiment.addCondiment(selectedTopping);
        console.log("Price Removed: ", sandwichPrice);

    }
});

//VEGGIES SELECTION
var veggieChooser = document.getElementById("veggie-items");
veggieChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    if (event.target.checked) {
        console.log("selected", selectedTopping);
        sandwichPrice += veggies.addVeggies(selectedTopping);
        console.log("Price Add: ", sandwichPrice);
    } else {
        sandwichPrice = sandwichPrice - veggies.addVeggies(selectedTopping);
        console.log("Price Removed: ", sandwichPrice);

    }
});


// BREAD SELECTION
let breadPrice = 0;
var breadChooser = document.getElementById("bread-items");
breadChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    breadPrice = bread.addBread(selectedTopping);
    console.log(breadPrice);
});

let submitBtn = document.getElementById("submit-order");
submitBtn.addEventListener("click", () => {
    printToDom(sandwichPrice + breadPrice);
});

let outputOrder = document.getElementById("your-order");
let printToDom = (price) => {
    outputOrder.innerHTML = `Total: $${price.toFixed(2)}`;
};