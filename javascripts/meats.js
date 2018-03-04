/*jshint esversion: 6 */

let meatPrices = { 
    ham: 1,
    turkey: 1, 
    pastrami: 1.25, 
    "roast-beef": 1.25, 
    bacon: 1.50
}; 

const addMeat = function(meatSelection) {
    return meatPrices[meatSelection];
};

module.exports = { addMeat }; //What exactly is being exported here?


