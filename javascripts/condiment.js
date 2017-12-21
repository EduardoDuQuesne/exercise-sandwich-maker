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