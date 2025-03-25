// Генерируем случайное число от 1 до 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Умножаем число на 2
let multipliedNumber = randomNumber * 2;

// Разделим число на 2 (оставим только целую часть)
let dividedNumber = Math.floor(multipliedNumber / 2);

// Выводим информацию в alert
alert("Случайное число: " + randomNumber + "\n" +
      "Число, умноженное на 2: " + multipliedNumber + "\n" +
      "Результат деления на 2: " + dividedNumber);
