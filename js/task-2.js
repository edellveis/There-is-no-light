// Задача 6: Перетворення числа в рядок
// Напиши функцію numberToString, яка приймає число (параметр num) і повертає його як рядок.

// javascript
// Копіювати код
function numberToString(num) {
    return String(num);
}
// Перевірка коректності роботи функції
console.log(numberToString(123)); // "123"
console.log(numberToString(0)); // "0"
console.log(numberToString(-45)); // "-45"

// Задача 5: Порівняння двох чисел
// Напиши функцію compareNumbers, яка приймає два числа (параметри a і b) і повертає рядок "greater", якщо a більше за b, "less", якщо a менше за b, і "equal", якщо a дорівнює b.

// javascript
// Копіювати код
function compareNumbers(a, b) {
    return a > b ? a : b;
    }

// Перевірка коректності роботи функції
console.log(compareNumbers(10, 5)); // "greater"
console.log(compareNumbers(3, 7)); // "less"
console.log(compareNumbers(4, 4)); // "equal"
console.log(compareNumbers(9, 2)); // "greater"
console.log(compareNumbers(1, 1)); // "equal"