import { heroes } from '../data/heroes'

// const getHeroeId = (id) => {
//     return heroes.find(items => {

//         if (items.id == id) {
//             return heroes;
//         }

//     });
// }

const getHeroeId = (id) => heroes.find((heroe) => heroe.id === id);


const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)


console.log(getHeroeId(4));

console.log(getHeroesByOwner('DC'));