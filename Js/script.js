// JavaScript variables, let, counst
// .................................

var name = "Ali Haider"
var name = "Abdul Manan"
console.log(name)


var age = 22
age = 21
console.log(age)


var city = "Shahkot"
{
    var city = "Faisalabad"
}
console.log(city)


var id = 1
{
    id = 10
}
console.log(id)


// name cannot redeclare for let as already declared for var
// let name = "Ahmad"
// console.log(name)


// We can assign value in let again
let student = "Ahmer"
student = "Umair"
console.log(student)


// stdAge cannot redeclare for let as already declared for let
// let stdAge = 23
// let stdAge = 20
// console.log(stdAge)


let stdCity = "Shk"
{
    let stdAge = "FSD"
    // console.log(stdAge)
}
console.log(stdCity)


let stdId = 100
// console.log(stdId)
{
    stdId = 1100
    // console.log(stdId)
}
console.log(stdId)


// Cannot change value(Reassign) in const
// const teacherId = 2
// teacherId = 20
// console.log(teacherId)


// Cannot redeclare any kind of variable for const
// const teacherCity = "FSD"
// const teacherCity = "Faisalabad"
// console.log(teacherCity)


const teacher = "Umair Sb"
{
    const teacher = "Umair Ahmad"
    console.log(teacher)

}
console.log(teacher)


// Cannot assign value in Block Scope(inside curly braces)
// const teacherName = "Sir Umair"
// {
//     teacherName = "Sir Umair Ahmad"
// }
// console.log(teacherName)


// const clgName = "Pgc Shahkot"
// Cannot redeclare variable in let if it is already daclared in const
// let clgName = "Punjab College Shahkot"
// Cannot redeclare variable in var if it is already daclared in const, let
// var clgName = "Punjab Group of Colleges Shahkot"
// console.log(clgName)


// We can create new array in let
let pakCities = ["Shk", "Fsd", "Lhr", "Isl"]
pakCities = []
pakCities.push("Shahkot")
console.log(pakCities)


// Cannot create new array in const
// const cities = ["Shk", "Fsd", "Lhr", "Isl"]
// cities = []
// console.log(cities)


// We can reassign or push values for count in arrays
const countries = ["Pak", "Ind", "Aus", "Eng", "Nz"]
countries[1] = "SL"
countries.push("SA")
console.log(countries)


let worldCountries = [{ids: 1, country: "Pak"}, {ids: 2, country: "Eng"}, {ids: 2, country: "Aus"}]
let ids = 1
for (let i = 0; i < worldCountries.length; i++) {
    if (ids === worldCountries[i].ids) {
        console.log(worldCountries[i].country)
    }
}

// ........................................................................................................................


// JavaScript Template Literals
// ............................

// Back-Tics(`) Syntax

let fullName = "Abdul Manan"
let myAge = 21
let myCity = "Shahkot"
// Without Back-Tics
var myIntro = 'My name is ' + fullName + ' and my age is almost ' + myAge + ' years old and i belongs to ' + myCity + '.'
console.log(myIntro)

// with Back-Tics
var myIntro = `My name is ${fullName} and my age is almost ${myAge} years old and i belongs to ${myCity}.`
console.log(myIntro)

// ........................................................................................................................


// JavaScript Arrow Functions
// ..........................

// Simple Functions

function sum(num) {
   return  num + 4
}
console.log(sum(11))

const multiply = function(num) {
    return num * 7
}
console.log(multiply(5))

// Arrow Function
const divide = (num) => {
    return num / 5
}
console.log(divide(40))

// Arrow Function without return
const Modulous = (num) => num % 10
console.log(Modulous(35))

// Arrow Function without return and small braces before num
const minus = num => num - 10
console.log(minus(12))

// this keyword in Arrow Function that represent window 
const useThis = () => {
    console.log(this)
}
window.addEventListener("load", useThis)

// ........................................................................................................................

// JavaScript Default Parameters
// .............................

// Not a best way
const callMyNums = (num1, num2) => {
    if (num2 === undefined) {
        num2 = 21
    }
    return num1 * num2 
}
console.log(callMyNums(3))


const callNums = (num1, num2 = 15) => {
    return num1 * num2 
}
console.log(callNums(5))

