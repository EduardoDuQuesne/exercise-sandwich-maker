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