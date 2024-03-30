// Задача 1: Створення простого калькулятора з можливістю обчислення простих математичних операцій, 
//таких як додавання, віднімання, множення та ділення, за допомогою прототипів та прототипного наслідування.

const Calculator = function ({ a, b }) {
    this.a = a;
    this.b = b;
};
  
Calculator.prototype.add = function () {
    return this.a + this.b;
};
Calculator.prototype.sub = function () {
    return this.a - this.b;
};
Calculator.prototype.mul = function () {
    return this.a * this.b;
};
Calculator.prototype.div = function () {
    return this.a / this.b;
};
  
const calc = new Calculator({ a: 6, b: 3 });
  
console.log(calc.add());
console.log(calc.sub());
console.log(calc.mul());
console.log(calc.div());