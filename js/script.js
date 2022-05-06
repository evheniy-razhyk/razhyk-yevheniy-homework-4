// alert("1.Напишите функцию max, которая сравнивает два числа и возвращает большее");
// let max = (firstNum, secondNum) => {return Math.max(firstNum, secondNum)};
// console.log(max(0, -1));



// alert("2.Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них");
// function minNum(...numbersArray) {
//     let minimum = numbersArray[0];
//     for (key of numbersArray) {
//         if (key < minimum) {
//             minimum = key;
//         }
//     }
//     return minimum;
// } 
// console.log(minNum(0, -1, 100, 500, 100500));



// alert(`3.Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции(методы) массивов:	
// •	Отфильтруйте пользователей младше 18 лет
// •	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
// •	Сформируйте новый массив, который содержит только полное имя пользователей
// `);
// let users = [
//     {
//         firstName: "John",
//         lastName: "Doe",
//         age: 7
//     }, 
//     {
//         firstName: "Charlotte",
//         lastName: "Johnson",
//         age: 21
//     }, 
//     {
//         firstName: "Noah",
//         lastName: "Smith",
//         age: 22
//     }, 
//     {
//         firstName: "William",
//         lastName: "Williams",
//         age: 26
//     }, 
//     {
//         firstName: "Mia",
//         lastName: "Davis",
//         age: 7
//     }, 
//     {
//         firstName: "Elijah",
//         lastName: "Brown",
//         age: 67
//     }, 
//     {
//         firstName: "Alexander",
//         lastName: "Hernandez",
//         age: 54
//     }, 
//     {
//         firstName: "James",
//         lastName: "Gonzales",
//         age: 34
//     }, 
//     {
//         firstName: "Amelia",
//         lastName: "Moore",
//         age: 32
//     }, 
//     {
//         firstName: "Olivia",
//         lastName: "Lee",
//         age: 9
//     }
// ];
// let minorUsers = users.filter(item => item.age < 18);
// users.forEach(function(item) {
//     item.fullName = `${item.firstName} ${item.lastName}`
// });
// let userFullName = users.map(item => item.fullName);
// console.log(minorUsers);
// console.log(users);
// console.log(userFullName);



// alert("4.Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.");
// let array = [12, "r", 4, null];
// function shiftAnalog (arrayShift) {
//     return arrayShift.splice(0, 1);
// }
// console.log(shiftAnalog(array));
// console.log(array);



// alert("5.Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.");
// function pushAnalog (array1, ...array2) {
//     return [...array1, ...array2];
// }
// let array = [10, "-22", 23];
// array = pushAnalog(array, 4, null, 6, undefined, "8", -5, {num: 1});
// console.log(array);



// alert("6.Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.");
// let sourceObject = {
//     firstName: "Tom",
//     age: 10 
// }
// let extendObject = {
//     firstName: "John", 
//     lastName: "Doe"
// }
// function objectAssignAnalog (target, ...source) {
//     let intermediateObject = {};
//     for (arrayKey of source) {
//         for (objectKey in arrayKey) {
//             intermediateObject[objectKey] = arrayKey[objectKey]
//         }
//     }
//     return {...target, ...intermediateObject};
// }
// let resultObject = objectAssignAnalog(sourceObject, extendObject, {country: "USA"});
// console.log(resultObject);



// alert(`7.Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате: 
// <имя_автора>, <дата>
// <текст_сообщения>
// `);
// function setComment(date, message, author = "Anonymous") {
//     if (!date || !message) {
//         alert("Данные переданы некорректно");
//         return;
//     }
//     console.log(`${author}, ${date}\n${message}`);
// }
// /*1*/setComment("2016-11-02", "Everything is ok", "John");

// /*2*/setComment("2016-11-02", "You could do it better!");

// /*3*/setComment("2016-11-02");