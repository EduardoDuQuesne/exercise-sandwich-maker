/*jshint esversion: 6 */

let veggiePrices = { 
    lettuce: 0.5,
    tomatoes: 1, 
    onions: 0.5, 
    pickles: 0.5,
    peppers: 1
}; 

const addVeggies = function(veggieSelection) {
    return veggiePrices[veggieSelection]; 
};

module.exports = { addVeggies };
