// Задача 2: Напишіть програму для обчислення середнього балу студента. 
//Програма має мати можливість вводити інформацію про студента, таку як його ім'я, прізвище та оцінки з різних предметів. 
//Для обчислення середнього балу необхідно використовувати прототипне наслідування.
const Student = function ({ name, surname, grades }) {
    this.name = name;
    this.surname = surname;
    this.grades = [];
};
  
Student.prototype.addGrades = function (grade) {
    return this.grades.push(grade);
};
Student.prototype.calculate = function () {
    const sum = this.grades.reduce((acc, value) => acc + value, 0);
    return sum / this.grades.length;
};
  
const studentKarina = new Student ({ name: "Karina", surname: "Danylivska" });
studentKarina.addGrades(90);
studentKarina.addGrades(95);
studentKarina.addGrades(98);
studentKarina.addGrades(100);
  
const studentMaryana = new Student({ name: "Maryana", surname: "Onushchuk" });
studentMaryana.addGrades(85);
studentMaryana.addGrades(90);
studentMaryana.addGrades(95);
studentMaryana.addGrades(100);
  
console.log(studentKarina);
console.log(studentKarina.calculate());
console.log(studentMaryana);
console.log(studentMaryana.calculate());
  

function showInfo() {
    return `Середній бал студнта ${this.name} ${
      this.surname
    }: ${this.calculate()}`;
}
console.log(showInfo.call(studentKarina));
console.log(showInfo.call(studentMaryana));