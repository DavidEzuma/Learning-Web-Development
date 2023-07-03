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

const obj = Object.create({});

Object.defineProperty(obj, 'unicorn',{
    get: () => '🦄',
    enumerable: false
});
//---------------------------------------------------------------------

const Spider = '🕷';
const Legs = 8;

const Arachnid = {
    Spider,
    Legs,
    Legs: 8.0   //Value will overwrite the one previously defined
};
//-------------------------------------------------------------------------

//funcions (which return a value) can be assigned to an object property

const Baby = '👶';
const numTeeth = (ageMonths) => {
    if (ageMonths <= 8){
        return 1;
    }
    else ageMonths >= 8
        return Math.round(1.8*ageMonths);
}

const newKid = {name: "Hector", ageMonths: 18,};
newKid.amountTeeth = numTeeth(newKid.ageMonths);
console.log(newKid.name+" is "+newKid.ageMonths+" months old and has "+newKid.amountTeeth+" teeth");
//---------------------------------------------------------------------------------------------------------

//functions that live within an object is called a method

const melody = {
    composer: "Bach",
    piece: "sunlight sonata",
    notes: '',
    play(){
        this.notes+='🎵🎵🎵';
        return this;
    }
}

console.log(melody  
    .play()
    .play()
    .play());