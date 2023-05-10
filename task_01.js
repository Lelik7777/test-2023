//1.Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

//2.Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
  return str.startsWith("$") ? Number.parseInt(str.slice(1)) : "";
}
console.log(extractCurrencyValue("$120"));
console.log("0".charCodeAt());
console.log("x".localeCompare("hello"));
const arr = [];
arr[12] = "hello";
console.log(arr.length);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array);
array.push(function (params) {
  console.log(this);
});
console.log(array.length);
array[10]();

/*Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/
function sumInput() {
  const array = [];
  while (true) {
    let input = prompt("enter digit");
    if (input === null || input === "" || isNaN(input)) break;
    array.push(+input);
  }
  return array.reduce((acc, cur) => acc + cur, 0);
}
//? use a.localCompare(b) in sort() method for greater accuracy
let countries = ["Österreich", "Andorra", "Vietnam"];
console.log(countries.sort((a, b) => a.localeCompare(b)));

//! throw type Error because there is no initial value!!!
//console.log([].reduce((a,b)=>a+b));

//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//То есть дефисы удаляются, а все слова после них получают заглавную букву.
function camelize(str) {
  return str
    .split("-")
    .map((string, i) =>
      i === 0
        ? string
        : string
            .split("")
            .map((char, i) => (i === 0 ? char.toUpperCase() : char))
            .join("")
    )
    .join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));

//Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
//Функция должна возвращать новый массив и не изменять исходный.
const arr1 = [5, 3, 8, 1];
function filterRange(arr1, minValue, maxValue) {
  return arr1.filter((el) => el >= minValue && el <= maxValue);
}
console.log(filterRange(arr1, 1, 4));
console.log(arr1);

//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//Функция должна изменять принимаемый массив и ничего не возвращать.
function filterRangeInPlace(arr, minValue, maxValue) {
  const arrCopy = arr;
  arrCopy.forEach((element) => {
    if (element < minValue || element > maxValue) {
      arr.splice(arr.indexOf(element), 1);
    }
  });
}
filterRangeInPlace(arr1, 1, 4);
console.log(arr1);

//Сортировать в порядке по убыванию
let arr2 = [5, 2, 1, -10, 8];
console.log(arr2.sort((a, b) => b - a));

//У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
//Создайте функцию copySorted(arr), которая будет возвращать такую копию.
let arrStrings = ["HTML", "JavaScript", "CSS"];
function copySort(arrStings) {
  return [...arrStings].sort();
}
console.log(copySort(arrStrings));
console.log(arrStrings);

//Создать расширяемый калькулятор
class Calculator {
  operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  calculate(string) {
    const [leftOpernd, operation, rightOpernd] = string.split(" ");
    if (!this.operations[operation] || isNaN(leftOpernd) || isNaN(rightOpernd))
      return NaN;
    return this.operations[operation](+leftOpernd, +rightOpernd);
  }
  addOperation(name, fun) {
    this.operations[name] = fun;
  }
}
const calculator = new Calculator();
console.log(calculator.calculate("4 + 3"));
calculator.addOperation("*", (a, b) => a * b);
console.log(calculator.calculate("4 * 3"));

//Трансформировать в массив имён
//У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users1 = [vasya1, petya1, masha1];
let names = users1.map((name) => name.name);
console.log(names);

//Трансформировать в объекты
//У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
//Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];
const usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));
// users.forEach(user =>{
//   usersMapped.push({fullName:`${user.name} ${user.surname}`,id:user.id});
// });
console.log(usersMapped);

//Отсортировать пользователей по возрасту
//Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr22 = [vasya2, petya2, masha2];
// function sortByAge(arr) {
//   return arr.sort((a, b) => {
//     if (a.age < b.age) return -1;
//     if (a.age > b.age) return 1;
//     if (a.age === b.age) return 0;
//   });
// }
const sortByAge = (arr) => arr.sort((a, b) => (a.age > b.age ? 1 : -1));
console.log(sortByAge(arr22));

//Перемешайте массив
//Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
//simple array shuffle
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
//using method Fisher-Yates shuffle
function shuffle2(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
const arrNums = [1, 2, 3, 4];
shuffle2(arrNums);
console.log(arrNums);

//Получить средний возраст
//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
let vasya33 = { name: "Вася", age: 25 };
let petya33 = { name: "Петя", age: 30 };
let masha33 = { name: "Маша", age: 29 };

let arr33 = [vasya33, petya33, masha33];
function getAverageAge(users) {
  return users.reduce((acc, user) => acc + user.age, 0) / users.length;
}
console.log(getAverageAge(arr33));

//Оставить уникальные элементы массива
//Пусть arr – массив строк.
//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique(strings));

//Создайте объект с ключами из массива
//Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
//Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
let users11 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];
function groupById(users) {
  return users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
}
console.log(groupById(users11));
