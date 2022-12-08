// variables

var smth;
// между ними разница в областях видимости
// var будет видно везде (hoisting) - переменная будет создано сначала, но значение присвоено в моменте -> null
let smth1 = 2;
const smth2 = smth1 * 3;// num не изменится
const smth3 = [1]
smth3.push(2) // [1, 2]
smth3.length = 0 // []
// smth3 = 2 // do not work!!
// у них другая область видимости {}, не поднимаются -> undefined
// let изменяется
// сonst - константа для простых типов, а для массива и объекта тожет изменятся, но не переназначиваться
// console.log(smth2)

// types of variables
let str = "string";
let num = 2;
let bool = false;
let simple1 = null;
let simple2 = undefined;

let arr = ["65465t", "hgfjhf", "f06", 12, {}, []];
let obj = {
  "name-id": "Irina",
  arr1: arr,
  obj: {
    obj: {},
    arr: []
  },
};

// Symbol
// BigInt

// console.log(str[3])
// console.log(arr[2])
// console.log(obj['name-id'])
// console.log(obj.arr1)

// =,  ==, ===

// console.log(1 == '1') - true
// console.log(1 === '1') - false

// >, >=, >== !==

// if (typeof str === 'boolean') {
//   console.log('string')
// } else {
//   console.log('not string')
// }

// if (typeof str === 'boolean') {
//   console.log('string')
// } else if (typeof str ==='number ') {
//   console.log('number')
// } else {
//   console.log('something else')
// }

// if (typeof str === 'boolean') {
//   console.log('string')
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

// function dartWaider(name) {
//   if (name === "Luke") {
//     console.log("I'm your father!");
//   } else {
//     console.log("Kill him!");
//   }
// }

// dartWaider('Luke')

// function closeCredit (monthSum, allSum) {
// return `You will close your debt in ${allSum / monthSum} months`
// }

// // console.log(closeCredit(30000, 60000))

function buyNewCar (allPrice, monthPay) {
    return `You will buy new car after ${allPrice / monthPay} months`
}

// console.log(buyNewCar(14, 7))


// array functions
const func1 = function (num) {
  return num
}
func1(1)

const func2 = function close (num) {
  return num
}
func2(1)

// const func3 = buyNewCar(100, 3)
// func3()

const func4 = () => {}
const func5 = num => num + 20
const func6 = (num1, num2) => {
  let one = num1 + num2;
  one ++;
  return one;
}

const multiplyByThree = (num) => num * num * num
const answer = multiplyByThree(5)


const myWay = {
    distance: 800, 
    rate: 8,
    price: 52,
    fuel: 'electro',
    'car-id': 563
} 

// принимает расстояние которое нужно проехать, а показывает сколько это стоит

const totalPrice = distance => distance / myWay.rate * myWay.price
// console.log(totalPrice(60))

const totalPrice2 = (distance, price) => distance / myWay.rate * price

const totalPrice3 = (distance, price) => {
  console.log(`You need ${distance / myWay.rate * price} $ to finish the trip`)
}

// принимает массив с людьми, считаешь сколько там мужчин, 
//средний возраст и есть ли люди с одинаковой профессие и все это 
//возвращаешь в консоль 
// всего 3 человека, из них 2 мужчин Средний возраст - н . Есть/нет с одинаковой профессией
const menInArr = (persons) => {
  let numberOfMen = 0;
  let totalAge = 0;
  let allJob = [];

  for (let person in persons) {
    if (persons[person].female === false) {
      numberOfMen += 1
    }
    totalAge += persons[person].age
    allJob.push(persons[person].job)
  }

  return `The total number of people is ${persons.length},
    among them there are ${numberOfMen} men. 
    The average age is ${totalAge / persons.length} years old. 
    And it's ${allJob.length !== [...new Set(allJob)].length} 
    dat we have peoples with same job`
}

// high order functions - functions that receive functions as an arguments
// function which is an argument is called - Callback

// array - what type is it?
// array methods - build-in functions
// push/pop, splice, shift/unshift, includes, indexOf, slice, findIndex, concat, join
// forEach, map, filter, some, every, sort, find, reduce,
const persons = [{
  name: 'Amy',
  job: 'engineer',
  age: 25,
  female: true
},
{
  name: 'Rory',
  job: 'doctor',
  age: 26,
  female: false
},
{
  name: 'Doctor',
  job: 'doctor',
  age: 1125,
  female: false
},
{
  name: 'Serhii',
  job: 'unemployed',
  age: 32,
  female: false
},
{
  name: 'Iryna',
  job: 'unemployed',
  age: 27,
  female: true
},
{
  name: 'Kathy',
  job: 'kindergarten-goer',
  age: 5,
  female: true
},
{
  name: 'Penny',
  job: 'promoter',
  age: 20,
  female: true
}, 
{
  name: 'Sheldon',
  job: 'scientist',
  age: 20,
  female: false
}]

const personsReduce = persons.reduce(
  (accumulator, current) => {
    if (accumulator && Object.keys(accumulator).includes(current.job)) {
      accumulator[current.job]++
    } else {
      accumulator[current.job] = 1
    }
    return accumulator
  },
  {}
);



// const persons2 = persons.map(person => {
//   let surname = 'Pond';

//   return {
//     name: person.name,
//     job: person.job,
//     surname: person.name !== 'Doctor' ? surname : 'Who'
//   }
// })
const persons2 = persons.filter(person => person.age < 300)
const persons3 = persons.filter(item => item.name.includes('r'))
const someR = persons.some(person => person.name.includes('r'))
const everyR = persons.every(person => person.name.includes('r'))
const find1 = persons.find(person => person.name.includes('r'))



// console.log(persons)
// console.log(persons3)

// функция получает массив людей/ Нужно вывести список людей чей возраст меньше заданого в аргументах
function getByAge(persons, age) {
  return persons.filter(person => person.age < age)
}

// for (let key in myWay) {
//     console.log(key + ": " + myWay[key])
// }

// const wayDistance = myWay.distance
// const id = myWay['car-id']

// function myWayCost(item) {
//     if (item.fuel === 'electro' && item.distance > 300){
//         console.log('You shall not pass dat distance, you need portable generator')
//     } else {
//         console.log( `You need ${item.distance / item.rate * item.price}UAH to ride ${item.distance} kilometers`)
//     }

// }

// myWayCost(myWay) 

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
// console.log(findThirdSide());


const booksList = [
  {
    name: 'Lord of the Ring', 
    author: 'JJR Tolkien',
    year: 1935,
    rating: 5, 
    price: '33,65',
    addToFavourites: ['Suzie', 'Mike', 'Elen']
  },
  {
    name: 'Bible', 
    author: '',
    year: 0,
    rating: 5, 
    price: '10,00',
    addToFavourites: ['Elen', 'Tag', 'Miro']
  },
  {
    name: 'Harry Potter', 
    author: 'JJ Rowling',
    year: 1992,
    rating: 4, 
    price: '16,76',
    addToFavourites: ['Mike', 'Suzie', 'Miro']
  },
  {
    name: 'Taras Bulba', 
    author: 'NV Gogol',
    year: 1865,
    rating: 3, 
    price: '8,54',
    addToFavourites: ['Natalya']
  },
  {
    name: 'Karamazov Brothers', 
    author: 'Dostoyesky',
    year: 1884,
    rating: 4, 
    price: '15,00',
    addToFavourites: ['Elen', 'Natalya',]
  },
]

// функция, которая принимает список книг и рейтинг и выдает книги которые больше или равны этому рейтингу

const chosenRating = (booksList, chosenRequest) => {
  return booksList.filter(book => book.rating >= chosenRequest)
}

//принимает список и название которые мы и ищем

const chosenNames = (booksList, chosenName) => {
  let result = booksList.find(book => book.name === chosenName)
  return result ? result : 'We do not have such book!'
}
// принимает список и выводит только книги с автором

const existAuthors = (booksList) => {
  return booksList.filter(book => book.author)
}


//принимает список и создает список с авторами

const authorList = (booksList) => {
  return booksList.map(book => book.author)
}


// принимает список и к каждому элементу списка добавляет новый ключ с текущей датой

const newKey = (booksList) => {
  booksList.forEach(book => book.date = new Date())
}

//сортировка списка по году

const sortByYear = (booksList) => {
  booksList.sort((a,b) => a.year - b.year)
}


//сортировка по имени автора

const sortByAuthor = (booksList) => {
  booksList.sort((a,b) => {
    if (a.author > b.author) {
      return 1
    } if (a.author < b.author){ 
      return -1
    }
    return 0
  })
}


// принимает список и считает средний рейтинг массива
const averageRating = (booksList) => {
  const average = booksList.reduce((acc, cur) => acc + cur.rating, 0) / booksList.length;
  console.log(`The average rating of all library are ${average}`) 
}
averageRating(booksList)


// принимает список и считает кол-во уникальных пользователей
const getUniqUsers = (booksList) => {
  const allUsers = booksList.reduce((acc, curr) => acc = [...curr.addToFavourites, ...acc], [])
  return [...new Set(allUsers)]
}


// принимает список и человека, и выдает массив книг, которые этот человека добавил в избранное

const getFavBook = (booksList, user) => {
 return  booksList.reduce((acc, curr) => {
  if (curr.addToFavourites.includes(user)) {
    acc.push(curr)
  }
  return acc
 }, [])

}

console.log(getFavBook(booksList, 'Natalya'))