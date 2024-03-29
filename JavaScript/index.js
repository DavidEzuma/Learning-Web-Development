//using recursion, write a funciton that takes a string and returns the reverse of the string.
function reverse(str){

    if (str.length <= 1){
        return str;
    }

    return reverse(str.slice(1)) + str[0];
}

var word = "hello";
console.log(reverse(word));

// Display the type of all of the objects wihtin an array.
const arr = [1,4.5,"hello World",true];

console.log(arr.map(i => typeof i));

const arr2 = ["Puneesh","Evan","Nabil","Istanbul","Stephen"];
console.log(arr2.map(x => x.charAt(0))); //Let's use this as an oppourtunity to practice the map method.

//* object data type deals with more complex data types, including arrays, class isntances, function, and objects. Anything that is not a primative type is an object
//truthy vs falsy

console.log([!! "",!! "Hello!",!! [],!! {}, !! 0, !! 1, !! -1]) //The bang is a logical operator, so not not returns the boolean equivalent of the value
var x = 24 == "24" //abstract comparison operator
var y = 24 === "24" //strict comparison operator
console.log([x,y]);

//terniary operators
const TestScore = 94;
const grade = (TestScore >= 90) ? "A" : "B";
console.log(grade);

//switch statements
switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did alright!");
        break;
    default:
        console.log("You did poorly!");
}

var value;
try {
    throw TypeError;
    value[1]+6;
    
} catch (error) {
    console.log("error");
}
finally {
    console.log("to be ran at the end of try catch");
}

if (true) {
    var l = "Hey there";     //l should be hoisted, since it was defined with the var literal
    let m = "hey again";     //m cannot be hoisted, since it was defined with the let literal

}
console.log(l+" (could be hoisted from a block statement, for it was instantiated with 'var')\n");
try {
    console.log(m);
} catch (ReferenceError) {
    console.log("m cannot be hoisted - innstantiated with 'let'");
} 

//closures

const ReversedWordMaker = function(array)
{
    let word = "";  //can be referenced by a funciton within the parent block
    for (let i = 0; i < array.length; i++)
    {
        word += array[i];
    }

    return reverse(word);   // 'word' variable will be kept in memory (heap), since it is a closure.
}

const arr3 = ["a","m","o","n","g"," ","u","s"];
console.log(ReversedWordMaker(arr3));

const obj = {   //an object is a collection of key value pairs.
    name : "clown",
    face : "🤡",
    age : "100",
    greeting : function(){
        console.log("Hello, my name is "+this.name+" and I am "+this.age+" years old. "+this.face); //'this' references the object as a whole
    },
    greeting2: () => {
      console.log(this) //'this' references the global object, since it is a arrow function. In the context of web development, the window Object
    }
}

obj.greeting();

