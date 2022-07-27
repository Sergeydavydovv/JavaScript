//Задание 1

let name = prompt('Ваше имя');
let age = prompt('Возраст');
let city = prompt('Город проживания');
let phone = prompt(' Ваш номер телефона');
let email = prompt('Ваш email');
let company = prompt('Ваша компания');

document.write('Меня зовут ' + name + '. Мне ' + age + '  лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '');

// Задание 2 

let birthday = 2022 - age;

document.write(  name + ' родился в ' + birthday  + ' году');

// Задание 3 

/*let number = prompt('Введите цифру');

if ((+number[1] + +number[2] + +number[3]) == (+number[4] + + number[5])); {
    alert('Да');
} else {
    alert('Нет');
}

// Задание 4

let a = prompt('Введите число');

if (a > 0); {
    console.log('Верно');
} else {
    console.log('Неверно');
}*/

// Задание 5 

let a = 10;
let b = 2;
    console.log('a + b');
    console.log('a - b');
    console.log('a * b');
    console.log('a / b');
if (a + b > 1) {
    console.log((a + b) ** 2)
}

// Задание 6

let a6 = 10;
let b6 = 2;

(a > 2 || a < 11 && b >=6 || b < 14) ? console.log('Верно')
                                     : console.log('Неверно');

// Задание 7

let n = prompt('Введите число от 0 до 59');
if (n >= 0 && n <= 14){
    console.log('Первая четверть')
}
if (n >= 15 && n <= 30){
    console.log('Вторая четверть')
}
if (n >= 31 && n <= 45){
    console.log('Третья четверть')
}
if (n >= 46 && n <= 59){
    console.log('Четвертая четверть')
}

// Задание 8 

let day = prompt('Введите число от 1 до 31');
if (day >=1 && day<=10) {
    console.log('Первая декада');
}
if (day >=11 && day<=20) {
    console.log('Вторая декада');
}
if (day >=21 && day<=31) {
    console.log('Третья декада');
}