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


//Question 1

function freelancer(){
    //rate = random number * # of possible numbers rounded down + 20 since we start at 20
    let rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) + PRICE_RANGE.min ) //the 200 -20 + 1 dictates how many possible numbers there are (inclusive). The +20 means start at 20.
    
    
    let nameIndex = Math.floor(Math.random() * NAMES.length)
    let name = NAMES[nameIndex]

    let occupationIndex = Math.floor(Math.random() * OCCUPATIONS.length)
    let occupation = OCCUPATIONS[occupationIndex]


    return {name, occupation, rate}
}

//Question 2

let freelancers = []


function freelancerArray(){
    for(let i=0; i<NUM_FREELANCERS;i++){
        let newFreelancer = freelancer()
        freelancers.push(newFreelancer)
    }

    console.log(`Length of freelancers array: ${freelancers.length} fellas`)
    console.log(freelancers)
}

freelancerArray()

//Question 3 and 4 average rate of all freelancers

//.reduce is our summing function. (total, the number we're on) => total + num.newFreelancer.rate, starting at 0 / number of freelancers we have. This gives us average rate.
let avgFreelancerRate 

function avgRate(){
    avgFreelancerRate = freelancers.reduce((total, num)=>total + num.rate, 0)/freelancers.length
    console.log(avgFreelancerRate)
}

avgRate()


//Question 5: representing a single freelancer

function freelancerCard(freelancer){
    const {name, occupation, rate } = freelancer

    const $card = document.createElement("article");
    $card.classList.add('card')
    $card.innerHTML = `
        <p class='operation'>${name}</p>
        <p>${occupation}</p>
        <p>${rate}</p>
    `;

    return $card
    
}




//Question 6: Write a component function to represent an array of freelancers.

function freelancerCards(){
    const $container = document.createElement("article");
    $container.classList.add("cards");


    const $cards = freelancers.map(freelancerCard)
    $container.replaceChildren(...$cards)

    return $container
}

//Question 7: avg rate card

function avgRateCard(){

    const $card = document.createElement("article");
    $card.classList.add('card')
    $card.innerHTML = `
        <p>Average Rate: ${avgFreelancerRate}</p>
    `;

    return $card
    
}


function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `    
      <h1>Freelancer Cards</h1>
      <avgRateCard></avgRateCard>
      <freelancerCards></freelancerCards>
      
    `;
    $app.querySelector("avgRateCard").replaceWith(avgRateCard());
    $app.querySelector("freelancerCards").replaceWith(freelancerCards());
}

render()