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