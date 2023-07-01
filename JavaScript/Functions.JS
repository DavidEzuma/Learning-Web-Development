//Function declerations are initialized at the top of the scope, so they can be accessed from anywhere in the code
const Bakery = MakeBread(2);
console.log(Bakery);

function MakeBread(amount){    //Hoisted
    return Array(amount).fill("🍞").join(" ");
}
//------------------------------------------------------------------------------------

//Function expressions cannot be accessed until they are defined

try{const Bar = MakeBeer(3);
    console.log(Bar);}
catch(ReferenceError){console.log("😯MakeBeer is not defined⚠")}

const MakeBeer = function(amount){    //Not hoisted
    return Array(amount).fill("🍺").join(" ");
}
//---------------------------------------------------------------------------------------

//A function that is imeditaitely called upon definition can be written as follows
//only expressed functions can be instantlly executed though

(function(amount) {
    return console.log(Array(amount).fill("Bark!").join(" "));
}(3));    //dog will imediately bark 3 times once the code reaches this block
//---------------------------------------------------------------------------------------

//using agrs to present multiple params as a array

(function Meal(...args){
    return console.log(`the list of things to be eaten consist of ${args.join(", ")}. Delicious!!`)
}("🍔","🍕","🥓","👢","🍖","🚒"))
//-----------------------------------------------------------------------------------------

//impure function: Funciton that directly mutates a value outside of its local scope

let x = 0;

const impure = () => x+10;
///pure function: Function that does not directly mutate a value outside of its local scope. ()only realise on parameters

const pure = (x) => x**2;
//--------------------------------------------------------------------

//Higher order functions: Functions that take in functions as arguments or return functions as results
const HOF = (inputFun) => {
    const called = inputFun();

    return () => 'OutputFun';
}
//--------------------------------------------------------------

//after a certain amount of time, the callback function will be called 

setTimeout(() => {'Callback';}, 1000); //milliseconds