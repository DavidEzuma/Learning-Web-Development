//using recursion, write a funciton that takes a string and returns the reverse of the string.

function reverse(str){
    let temp = str.substring(1,str.length());

    return str[0] + reverse(temp);
}

var word = "hello";
console.log(reverse(word));