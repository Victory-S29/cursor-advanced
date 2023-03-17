const arr1 = ['Spider-man', "Iron man", "Captain America"];

arr1.forEach(function(item, index, arr){
    console.log(item, index, arr);
})

const avan = []
arr1.forEach(function(item){
    avan.push(item)
})
 
// return elements of res - new array
//res.length === arr1.length
const res = arr1.map((arr, i) => {
    const str = `${i + 1}. ${arr}`
    return str
})

const res2 = arr1.filter((arr) => {
    return arr.includes('-')
})
console.log(res2); // => ["Spider-man"]

const res3 = arr1.find((item, index, arr) => {
    return item.includes('-')
})
console.log(res3); // => "Spider-man", if several - first

const res4 = arr1.findIndex((item, index, arr) => {
    return !item.includes('-')
})

const res5 = arr1.sort() //за алфавітом
const res7 = arr1.sort((a, b) => a.localeCompare(b)) //sort str-s

const numb = [14, 8, 22];
function sortNumbers(a, b){
    if (a > b) return 1;
    if (a===b) return 0;
    if (a < b) return -1;
}

function sortNumbers2(a, b){ // max -> min
    return b - a;
}
const res6 = numb.sort(sortNumbers2)

 

const res8 = numb.every((n) => { //всі елементи
    return n > 10;
})

const res9 = numb.some((n, i, arr) => { //чи є елементи
    return n < 10;
})
 

const numbers = [14, 8, 22, 99];
numbers.reduce((prevValue, item, index, arr) => { //sum
    console.log(prevValue, item)
    const res = prevValue + item
    console.log(res)
    return res
}, 0) // 0 - перше значення яке попадає в prevValue


const res10 = numbers.filter(() =>{

}).map(() => {

})

const res11 = numbers.reverse();