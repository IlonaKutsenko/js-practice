import { fetchPeople } from './api.js';
import { Person } from './person.js';

let people = [];

async function checkTask() {
    const data = await fetchPeople();
    people = data.map(item => new Person(item.name, item.height, item.mass, item.gender));
    const cardsFromFilter = getFemaleCardsFilter(people);
    console.log(cardsFromFilter);
    const cardsFromLoop = getFemaleCardsLoop(people);
    console.log(cardsFromLoop);
}

function getFemaleCardsFilter(personsArray) {
    const result1 = [];
    for (const person of personsArray) {
        if (person.gender === 'female') {
            const card = person.getDisplayCard();
            result1.push(card);
        }
    }
    return result1;
}

function getFemaleCardsLoop(personsArray) {
    const result2 = [];
    for (let i = 0; i < personsArray.length; i++) {
        if (personsArray[i].gender === 'female') {
            result2.push(personsArray[i].getDisplayCard());
        }
    }
    return result2;
}

checkTask();