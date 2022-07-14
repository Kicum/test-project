// variables

var smth;
let smth1 = 2;
const smth2 = smth1 * 3;
// console.log(smth2)

// types of variables
let str = "string";
let num = "2";
let arr = ["65465t", "hgfjhf", "f06", 12, {}];
let bool = false;
let obj = {
  "name-id": "Irina",
  arr1: arr,
  obj: {
    obj: {},
  },
};
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

function dartWaider(name) {
  if (name === "Luke") {
    console.log("I'm your father!");
  } else {
    console.log("Kill him!");
  }
}

// dartWaider('Luke')

// function closeCredit (monthSum, allSum) {
// return `You will close your debt in ${allSum / monthSum} months`
// }

// // console.log(closeCredit(30000, 60000))

// function buyNewCar (allPrice, monthPay) {
//     return `You will buy new car after ${allPrice / monthPay} months`
// }

// console.log(buyNewCar(14, 7))

/*let myWay = {
    distance: 800, 
    rate: 8,
    price: 52,
    fuel: 'electro',
    'car-id': 563
} 
for (let key in myWay) {
    console.log(key + ": " + myWay[key])
}

const wayDistance = myWay.distance
const id = myWay['car-id']

function myWayCost(item) {
    if (item.fuel === 'electro' && item.distance > 300){
        console.log('You shall not pass dat distance, you need portable generator')
    } else {
        console.log( `You need ${item.distance / item.rate * item.price}UAH to ride ${item.distance} kilometers`)
    }

}

myWayCost(myWay) */

// function displayNumbers(num){
//     for (let i = 1;  i <= num; i++){
//         console.log(i)
//     }
// }
// displayNumbers(7)

// function sqware(num) {
//     for (let i = 1; i <= num; num--) {
//         if (i % 2 === 0) {
//             console.log (i)
//         }
//     }
// }
// sqware (100)

// function displayLessNumber(num) {
//     for (let i = num; i >= 1; i--) {
//         console.log(i)
//     }
// }
// displayLessNumber(5)

// function summUp() {
//     let num1 = prompt("Write first number")
//     let num2 = prompt("Write second number")
//     alert(+num1 + +num2)
// }

// summUp()

function greetings() {
  alert("Hello. My name is Kojima, what is your name?");
  let hel1 = prompt("what is your name?");
  alert("Nice to meet u, where u are form?");
  let hel2 = prompt("where u are form?");
  if (hel2.toLowerCase() === "ukraine") {
    alert("!WoW!");
  } else {
    alert("Its fine");
  }
  let hel3 = confirm("Do tou want try again?");
  if (hel3) {
    greetings();
  }
}
// greetings()

// let array = ["afm", "igdj", "212", "fgidmk", "isdg"];
// function displayEverySecond(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 1) {
//       console.log(array[i]);
//     }
//   }
// }
// // displayEverySecond(array);

// const example1 = array.join(";");
// // console.log(example1);

// // array.push(true);
// // console.log(array);

// // let example2 = array.pop();
// // console.log(example2);
// // console.log(array);

// // array.unshift(525);
// console.log(array);
// // array.shift();
// // console.log(array);

// переменная со списком покупок
// функция в которій заходит массив
// c prompt задать вопрос, нужно ли что-то еще, если да - добавляем в массив, до тех пор пока человек не скажет - нет

// let purchases = ["Sugar", "Milk", "Watermellon", "Tea", "Bread"];
// function whatToBuy() {
//   const allList = purchases.join("; ");
//   let question = confirm(`We have: ${allList}, Do you want smth else?`);
//   if (question) {
//     let newItem = prompt("Write new item:");
//     purchases.push(newItem);
//     whatToBuy();
//   } else {
//     alert(`${allList}.`);
//   }
// }

// whatToBuy();

// функция заранее создані 2 переменніе сумма квадратов катетов = гипотенузе, есть 2 катета (они в переменніх)
// функция должна вернуть квадрат гепотенузі, а потом візвать єту функцию и консольложнуть

let firstSide = 3;
let secondSide = 4;

function findThirdSide() {
  return Math.sqrt(firstSide * firstSide + secondSide * secondSide);
}
console.log(findThirdSide());
