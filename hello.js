// Мой первый скрипт на JavaScript.
// Запуск в Node:    node hello.js
// Запуск в браузере: открыть index.html через Live Server и нажать F12 → Console
const name = "Павел";
const today = new Date().toLocaleDateString("ru-RU");

console.log(`Привет, ${name}! Сегодня ${today}.`);
console.log("Где я запущен:", typeof window === "undefined" ? "Node.js" : "браузер");
