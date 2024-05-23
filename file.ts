//************** Question 1 ******************\\
// Basic Arrays - Product Inventory
// Challenge:
// You are tasked with creating a Product Inventory system. Implement functions and logic to
// manage object manipulation effectively.

type Product = {
  name: string;
  price: number;
  type: string;
  inventory: {
    stock: number;
    colorOp: string[];
  };
};

let product1: Product = {
  name: "Fx Impact MK3",
  price: 300000,
  type: "PCP Air Rifle",
  inventory: {
    stock: 100,
    colorOp: ["Black", "Bronze"],
  },
};
let product2: Product = {
  name: "Baretta A400",
  price: 600000,
  type: "Shotgun",
  inventory: {
    stock: 100,
    colorOp: ["Wood", "Black"],
  },
};
let product3: Product = {
  name: "Colt 1911",
  price: 300000,
  type: "Pistol",
  inventory: {
    stock: 100,
    colorOp: ["Silver", "Black"],
  },
};

const products: Product[] = [product1, product2, product3];

let changeColor = (products: Product, newColor) => {
  products["inventory"].colorOp = newColor;
  if (newColor == "Bronze") {
    products.price = products.price + (products.price / 100) * 5;
  } else if (newColor == "Wood") {
    products.price = products.price + (products.price / 100) * 15;
  } else if (newColor == "Silver") {
    products.price = products.price + (products.price / 100) * 10;
  } else if (newColor == "Black") {
    products.price = products.price + (products.price / 100) * 5;
  }
  return products;
};

console.log(changeColor(product1, "Black"));
console.log(changeColor(product2, "Wood"));
console.log(changeColor(product3, "Silver"));

// ************* Question 2 *****************\\

//  Multi-Dimensional Arrays and Tuples - Student Grades
// Challenge:
// You are tasked with creating a student grading system. Implement functions and logic to
// manage student grades effectively.

type Student = {
  name: string;
  Grade: number[];
};
let students: Student[] = [
  {
    name: "Aqib",
    Grade: [95, 78, 65, 55, 82],
  },
  {
    name: "Osama",
    Grade: [66, 55, 76, 48, 60],
  },
  {
    name: "Shafiq",
    Grade: [44, 56, 60, 52, 40],
  },
];

let calculateAverage = (percentage: number[]): number => {
  let result = percentage.reduce((acc, sum) => {
    return sum + acc;
  }, 0);
  return result / percentage.length;
};

for (let student of students) {
  let average = calculateAverage(student.Grade);
  console.log(`Student : ${student.name}`);
  console.log(`Grades : ${student.Grade}`);
  console.log(`Average : ${average}%`);
  console.log(`\n`);
}

// +++++++++++++++ Question 3 +++++++++++++++++++ \\

// Part 3: Array with Types and Indexing - Employee Salaries
// Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and
// handle bonuses

type Employee = {
  name: string;
  hoursWorked: number;
  hourlyRate: number;
  Salary: number;
};
let employees: Employee[] = [
  {
    name: "Farhan",
    hoursWorked: 22,
    hourlyRate: 60, // in USD
    Salary: 0,
  },
  {
    name: "Osama",
    hoursWorked: 11,
    hourlyRate: 60, // in USD
    Salary: 0,
  },
  {
    name: "Aqib",
    hoursWorked: 28,
    hourlyRate: 60, // in USD
    Salary: 0,
  },
];
let calculateSalary = (employee: Employee) => {
  let employeeSalary = employee.hoursWorked * employee.hourlyRate;
  if (employee.hourlyRate >= 20) {
    employeeSalary += (employeeSalary * 10) / 100;
  } else if (employee.hourlyRate >= 10) {
    employeeSalary += (employeeSalary * 5) / 100;
  }
  return employeeSalary;
};

for (const employee of employees) {
  employee.Salary = calculateSalary(employee);
}
console.log(employees);
