//using recursion, write a funciton that takes a string and returns the reverse of the string.

function reverse(str){

    if (str.length <= 1){
        return str;
    }

    return reverse(str.slice(1)) + str[0];
}

var word = "hello";
console.log(reverse(word));