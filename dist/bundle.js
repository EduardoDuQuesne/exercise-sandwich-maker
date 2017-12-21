(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./bread":3,"./cheese":4,"./condiment":5,"./meats":6,"./veggies":7}],2:[function(require,module,exports){
/*jshint esversion: 6 */

require("./DOMHandler");

},{"./DOMHandler":1}],3:[function(require,module,exports){
/*jshint esversion: 6 */

let breadPrices = { 
    baguette: 2,
    focaccia: 2, 
    sourdough: 1.5, 
    bagel: 1.5
}; 

const addBread = function(breadSelection) {
    return breadPrices[breadSelection]; 
};

module.exports = { addBread };
},{}],4:[function(require,module,exports){
/*jshint esversion: 6 */

let cheesePrices = { 
    swiss: 1,
    american: 1, 
    muenster: 1.25, 
    gouda: 1.25, 
    havarti: 1.25
}; 

const addCheese = function(cheeseSelection) {
    return cheesePrices[cheeseSelection]; 
};

module.exports = { addCheese };
},{}],5:[function(require,module,exports){
/*jshint esversion: 6 */

let condimentPrices = { 
    mayo: 0.5,
    ketchup: 0.5, 
    mustard: 0.5, 
    sriracha: 0.5
}; 

const addCondiment = function(condimentSelection) {
    console.log("CONDOS");
    return condimentPrices[condimentSelection]; 
};

module.exports = { addCondiment };
},{}],6:[function(require,module,exports){
/*jshint esversion: 6 */

// if you cannot answer the questions in the example, do not copy and paste it. Know what's going on before you use code you didn't write

// Private variable to store the different meat prices. How is it private?
let meatPrices = { 
    ham: 1,
    turkey: 1, 
    pastrami: 1.25, 
    "roast-beef": 1.25, 
    bacon: 1.50
}; 

//why is one key in quotes but the other isn't?

const addMeat = function(meatSelection) {
    return meatPrices[meatSelection];
  
    //code that grabs the correct meat price and returns it
};



module.exports = { addMeat }; //What exactly is being exported here?



},{}],7:[function(require,module,exports){
/*jshint esversion: 6 */

let veggiePrices = { 
    lettuce: 0.5,
    tomatoes: 1, 
    onions: 0.5, 
    pickles: 0.5,
    peppers: 1
}; 

const addVeggies = function(veggieSelection) {
    console.log("CONDOS");
    return veggiePrices[veggieSelection]; 
};

module.exports = { addVeggies };
},{}]},{},[2]);
