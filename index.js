/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function freelancer(){
    //rate = random number * # of possible numbers rounded down + 20 since we start at 20
    let rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) + PRICE_RANGE.min ) //the 200 -20 + 1 dictates how many possible numbers there are (inclusive). The +20 means start at 20.
    
    
    let nameIndex = Math.floor(Math.random() * NAMES.length)
    let name = NAMES[nameIndex]

    let occupationIndex = Math.floor(Math.random() * OCCUPATIONS.length)
    let occupation = OCCUPATIONS[occupationIndex]

    console.log(name)
    console.log(occupation)
    console.log(rate)
    
    return {name, occupation, rate}


}

freelancer()