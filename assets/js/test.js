
// Tennent's principle of correspondence method
/*
Any expression of statement can be wrapped in an immediately invoked function without changing meaning
Except:
this, var,
*/
let test = function (){
    return(function(){

        console.log("hello")
    })()
}

test() // hello

// Array
/*
JS very efficient for sparse arrays

Indexes are converted to strings and used as names for
retrieving values

**If the array is sparse, the value of the length property is greater than the number of elements. Sparse arrays can be created with the Array() constructor or simply by assigning to an array index larger than the current array length.
[https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/ch07s03.html]

useful Array methods 
concat, reduce, every,reduceRight,filter,reverse
forEach,shift,indexOf, slice,join,some,lasIndexOf,splice
map,toLocaleString,pop,toString,push,unshift
*/

let a = new Array(5); // very efficient
console.log(a.length)

let n = [4,8,15,16,23,42]
// the result is wired because sort function works here after converting to string
console.log(n.sort()) // [ 15, 16, 23, 4, 42, 8 ]

let l = ['one', 'two', 'three']
console.log(l.sort()) // [ 'one', 'three', 'two' ]

// not recommended to use delete method 
delete n[2]
console.log(n) // [ 15, 16, <1 empty item>, 4, 42, 8 ]
// so recommended to use splice method
n.splice(2,2)
console.log(n) // now the result [ 15, 16, 42, 8 ]
//===============================================================
/*
when to use Array or Objects
1.  use object when the names ar arbitrary strings
2.  use array when the names(key) are sequential integers
3.  In javascript associative array is object
example

associative_array ={'a':'b', 'c':'d'}

*/
/*
Notes:

1.  RegExp is the best option to check the string 
2.  All values are objects in JS however, null and undefined are not. 
*/

// one way to check the object is array or not. 
console.log(Array.isArray('s'))

// null and defined are not a object but null shows as object in JS
console.log('undefined' === null)
// === this is not check the object not the value 

console.log(typeof 2)
console.log(typeof '2')
//  also recommended to use "//" not block comments.
// another point that don't use the + , use concat
// don't use for loop anymore use forEach or Map method.
 
try{
    // let r = 2/as;
    // console.log(r)
    
}catch(ignore){
    
    console.log("Error detected: ",ignore);
    // throw new Error(2 === '2');
    // throw {
    //     name:"Detected Error",
    //     message: 2 === '2'
    // }
    
}
console.log("function:",test.prototype)

let t = {
    'a':12,
    'b':3
}

console.log(Object.entries(t))

let dict = {
    '[': '5B',
    ']': '5D',
    ',': '2C',
    'x': '78',
    'm': '6D',
    '#': '23',
    '-': 'FF',
    '.': '2E',
    '0': '00',
    '1': '01',
    '2': '02',
    '3': '03',
    '4': '04',
    '5': '05',
    '6': '06',
    '7': '07',
    '8': '08',
    '9': '09',
    ' ': '20'
};

// convert object to array
Object.entries(dict).forEach((e)=>
{
    console.log(e)
})