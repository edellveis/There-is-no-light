function greet(name) {
    return `hello ${name}`;
}
// Перевірка коректності роботи функції
console.log(greet("John")); // "Hello, John!"
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob")); // "Hello, Bob!"
// Задача 8: Перевірка наявності числа у масиві
// Напиши функцію containsNumber, яка приймає масив чисел (параметр numbers) і число (параметр num). Функція повинна повертати true, якщо число присутнє у масиві, і false в іншому випадку.

// javascript
// Копіювати код
function containsNumber(numbers, num) {
    // Твій код тут
    return numbers.includes(num);
}

// Перевірка коректності роботи функції
console.log(containsNumber([1, 2, 3, 4, 5], 3)); // true
console.log(containsNumber([10, 20, 30, 40], 25)); // false
console.log(containsNumber([7, 14, 21, 28], 14)); // true
// Задача 7: Перевірка початку рядка
// Напиши функцію startsWithA, яка приймає рядок (параметр str) і повертає true, якщо рядок починається з літери "A", і false в іншому випадку.

// javascript
// Копіювати код
function startsWithA(str) {
    let a = str.slice(0, 1);
     return a.includes("A");
}
// Перевірка коректності роботи функції
console.log(startsWithA("Apple")); // true
console.log(startsWithA("Banana")); // false
console.log(startsWithA("avocado")); // false