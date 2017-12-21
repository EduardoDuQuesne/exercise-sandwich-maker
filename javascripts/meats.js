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


