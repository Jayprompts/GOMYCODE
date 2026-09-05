// sayHello = () => { let res = 2 * 3; console.log(res)}


// setTimeout(() => {
//     sayHello()
// }, 3000)



const people = [{name: 'Max'}, {name: 'Jack'}, {name: 'Mary'}]

//FIND METHOD - ES5


// function findPerson (username) {
//     for (let i = 0; i < people.length; i++){
//         let person = people[i]
//         if (person.name == username) {
//             return person.name
//         }

//     }
// }

// console.log(findPerson('Jack'))

// //ES6

// function findPerson(name) {
//     return people.find(person => person.name == name)
// }
// console.log(findPerson('Mary'))


//FOR EACH -ES5

// function showEachOne (name) {
//     for (let i = 0; i < people.length; i++) {
//         console.log(people[i].name)
//     }
// }
// showEachOne()

//ES6

// const showEachOne = name => people.forEach(person => console.log(person.name))
// showEachOne()


//FILTER ES5

const products = [
    {names: "Milk", price: 15},
    {names: "Water", price: 9},
    {names: "Bread", price: 5},
    {names: "Water", price: 4}
]


// function filterProducts() {
//     let cheapProducts = [];
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].price < 10) cheapProducts.push(products[i])
//     }
// return cheapProducts;
// }
// console.log(filterProducts()) //?



//ES6

// const filterProducts1 = () => products.filter(product => product.price < 10)
// console.log(filterProducts())





// MAP METHOD - ES5

// function changeProducts (){
//     for (let i = 0; i < products.length; i++) {
//         products[i].price -= 2
//     }
//     return products
// }

// console.log(changeProducts())
// console.log(products)



//ES6

// const changeProducts = () => 
//     products.map(product => ({...product, price: product.price -2}));
//     console.log(changeProducts());



//REDUCE 

const data = [ 5, 10, 15, 20, 25]
const res = data.reduce((total, currentValue) => total - currentValue )
// const res = data.reduce({(total, currentValue) => total - currentValue},0 ) - to set default value of total
console.log(res)


/////////////////////////////

//SPREAD OPERATOR

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]


//ES5

let newArr = arr1.concat(arr2)
let allArr = newArr.concat(arr3)

console.log(allArr)


//ES6

let arr = [...arr1, ...arr2, ...arr3]
console.log(arr)