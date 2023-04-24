// Declare variables for diffrent datatypes
// translate javascript code in typescript
// let course = "TypeScript"
/*--------------------write code here--------------------*/
var course = "TypeScript";
// -----------------Uncomment testcases----------------------
console.log("course", course); //course TypeScript
// --------------------------------------------------------------------------------------------------
// let day = 3
/*--------------------write code here--------------------*/
var day = 3;
// -----------------Uncomment testcases----------------------
console.log("day", day); //day 3
// ------------------------------------------------------------------------------------------------------
// let isPublic = true
/*--------------------write code here--------------------*/
var isPublic = true;
// -----------------Uncomment testcases----------------------
console.log("isPublic", isPublic); //isPublic true
// -----------------------------------------------------------------------------------------------------
// let set = new Set()
/*--------------------write code here--------------------*/
// let set = new Set()
// set.add(1)
// -----------------Uncomment testcases----------------------
// console.log(set)
// -----------------------------------------------------------------------------------------------------
// let obj = {name:"Max"}
/*--------------------write code here--------------------*/
var obj = { name: "Max" };
// -----------------Uncomment testcases----------------------
console.log(obj);
// --------------------------------------------------------------------------------------------------------------
//  let nums = [1,2,3,4]
/*--------------------write code here--------------------*/
var nums = [1, 2, 3, 4];
// -----------------Uncomment testcases----------------------
console.log("nums", nums); //nums [ 1, 2, 3, 4 ]
// --------------------------------------------------------------------------------------------------------------
// let strs = ["a","b","c","d"]
/*--------------------write code here--------------------*/
var strs = ['a', 'b', 'c', 'd'];
// -----------------Uncomment testcases----------------------
console.log("strs", strs); //strs [ 'a', 'b', 'c', 'd' ]
// ---------------------------------------------------------------------------------------------------------------
// let arr = [1,2,"a",[],{},true]
/*--------------------write code here--------------------*/
var arr = [1, 2, "a", [], {}, true];
// -----------------Uncomment testcases----------------------
console.log("mixArr", arr); //mixArr [ 1, 2, 'a', [], {}, true ]
// --------------------------------------------------------------------------------------------------------------
// declare tuple for following values. Tuple means couple of types of values in an arr
// let tup = [1,"Tom"]
/*--------------------write code here--------------------*/
var tup = [1, "Tom"];
// -----------------Uncomment testcases----------------------
console.log("tuple", tup); //tuple [ 1, 'Tom' ]
// ------------------------------------------------------------------------------------------------------------
// declare Enum for following variables. Enum is group of constant variables
// const small = 1
// const medium = 2
// const large =3
/*--------------------write code here--------------------*/
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
// -----------------Uncomment testcases----------------------
console.log("Enum Size", Size); //  Enum Size {'1': 'small', '2': 'medium',  '3': 'large',  small: 1,  medium: 2,  large: 3}
// ----------------------------------------------------------------------------
// convet Javascript function is typescript
// function print(name){
//
//     return `Hello ${name}
// }
/*--------------------write code here--------------------*/
function printname(name) {
    return "Hello ".concat(name);
}
// -----------------Uncomment testcases----------------------
console.log(printname("Max")); //Hello Max
// --------------------------------------------------------------------------------------------------
// Convert javascript class in typeScript
// class Cat{
//     constructor(name,age,color){
//         this.name = name
//         this.age = age
//         this.color = color
//     }
//     myCatData(){
// return `My cat name is ${this.name}, she is ${this.age} yr old and she is ${this.color}`
//     }
// }
/*--------------------write code here--------------------*/
var Cat = /** @class */ (function () {
    function Cat(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    Cat.prototype.myCatData = function () {
        return "My cat name is ".concat(this.name, ", she is ").concat(this.age, " yr old and she is ").concat(this.color);
    };
    return Cat;
}());
// -----------------Uncomment testcases----------------------
var c1 = new Cat("Fluffy", 2, 'white');
console.log(c1.myCatData()); //My cat name is Fluffy, she is 2 yr old and she is black & white
