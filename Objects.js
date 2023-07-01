//First way to isntantiate an object:

const Hopper = {
    rabbit: '🕳',
    name: 'Bugs',
    age: 13.5
};

Hopper['name'] = 'Bunny';   //values are edited through array notation (dot notation cannot be used for this object instantiation type)
console.log(Hopper['name']+'\n');
//---------------------------------

//Second way to instantiate an object

const Hare = new Object();
Hare.home = '🏡';   //Is compatible with dot notation
Hare.name = 'Harry';
Hare.age = '982';

console.log(Hare.name);
//---------------------------------------------------------

//Third way to instantiate an object:

const Organism = {
    DNA: Math.random(),
    Kingdom: 'Animalia'
}   //Organism is the "Prototype"
const Panda = Object.create(Organism);  //best when wanting to establish inheritance

console.log(Panda.DNA);
console.log(Object.getPrototypeOf(Panda));
//--------------------------------------------------------
