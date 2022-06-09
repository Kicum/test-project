// variables

var smth 
let smth1 = 2
const smth2 = smth1 * 3
// console.log(smth2)

// types of variables
let str = 'string' 
let num = '2'
let arr = ['65465t', 'hgfjhf', 'f06', 12, {}]
let bool = false
let obj = {
    'name-id': 'Irina',
    arr1: arr,
    obj: {
        obj: {}
    }
}
// undefined, null

// console.log(str[3])
// console.log(arr[2])
// console.log(obj['name-id'])
// console.log(obj.arr1)

// =,  ==, === 

// console.log(1 == '1')
// console.log(1 === '1')

// >, >=, >== !==

// if (typeof str === 'boolean') {
//     console.log('string')
// } else {
//     console.log('not string')
// }

// if (typeof str === 'boolean') {
//     console.log('string')
// } else if (typeof str ==='number ') {
//     console.log('number')
// } else {
//     console.log('something else')
// }

// if (typeof str === 'boolean') {
//     console.log('string')
// } 

// function addThree(num) {
//     num += 3
//     return num
// }

// let fortyThree = addThree(43)
// let three = addThree(3)



// function myltiplaySix(num) {
//     num *= 6
//     return num
// }

// let oneHundred = myltiplaySix(100)
// console.log (oneHundred)
// let nine = myltiplaySix(9)
// console.log (nine)


// записываем имя, а при консольлоге - пишет = меня зовут + имя

// function hello(name) {
//     const greetings = `Hello, ${name}!`
//     return greetings
// }
// console.log(hello('Luke'))

function dartWaider (name) {
    if (name === 'Luke') {
        console.log('I\'m your father!')
    } else {
        console.log('Kill him!')
    }

}

// dartWaider('Luke')


function closeCredit (monthSum, allSum) {
    return `You will close your debt in ${allSum / monthSum} months`
}

// console.log(closeCredit(30000, 60000))

function buyNewCar (allPrice, monthPay) {
    return `You will buy new car after ${allPrice / monthPay} months`
}

console.log(buyNewCar(14, 7))