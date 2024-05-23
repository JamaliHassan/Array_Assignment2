//************** Question 1 ******************\\
// Basic Arrays - Product Inventory
// Challenge:
// You are tasked with creating a Product Inventory system. Implement functions and logic to
// manage object manipulation effectively.
var product1 = {
    name: "Fx Impact MK3",
    price: 300000,
    type: "PCP Air Rifle",
    inventory: {
        stock: 100,
        colorOp: ["Black", "Bronze"],
    },
};
var product2 = {
    name: "Baretta A400",
    price: 600000,
    type: "Shotgun",
    inventory: {
        stock: 100,
        colorOp: ["Wood", "Black"],
    },
};
var product3 = {
    name: "Colt 1911",
    price: 300000,
    type: "Pistol",
    inventory: {
        stock: 100,
        colorOp: ["Silver", "Black"],
    },
};
var products = [product1, product2, product3];
var changeColor = function (products, newColor) {
    products["inventory"].colorOp = newColor;
    if (newColor == "Bronze") {
        products.price = products.price + (products.price / 100) * 5;
    }
    else if (newColor == "Wood") {
        products.price = products.price + (products.price / 100) * 15;
    }
    else if (newColor == "Silver") {
        products.price = products.price + (products.price / 100) * 10;
    }
    else if (newColor == "Black") {
        products.price = products.price + (products.price / 100) * 5;
    }
    return products;
};
var students = [
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
var calculateAverage = function (percentage) {
    var result = percentage.reduce(function (acc, sum) {
        return sum + acc;
    }, 0);
    return result / percentage.length;
};
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    var average = calculateAverage(student.Grade);
    //  console.log(`Student : ${student.name}`)
    //  console.log(`Grades : ${student.Grade}`)
    //  console.log(`Average : ${average}%`)
    //  console.log(`\n`)
}
var employees = [
    {
        name: "Farhan",
        hoursWorked: 22,
        hourlyRate: 60,
        Salary: 0,
    },
    {
        name: "Osama",
        hoursWorked: 11,
        hourlyRate: 60,
        Salary: 0,
    },
    {
        name: "Aqib",
        hoursWorked: 28,
        hourlyRate: 60,
        Salary: 0,
    },
];
var calculateSalary = function (employee) {
    var employeeSalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hourlyRate >= 20) {
        employeeSalary += (employeeSalary * 10) / 100;
    }
    else if (employee.hourlyRate >= 10) {
        employeeSalary += (employeeSalary * 5) / 100;
    }
    return employeeSalary;
};
for (var _a = 0, employees_1 = employees; _a < employees_1.length; _a++) {
    var employee = employees_1[_a];
    employee.Salary = calculateSalary(employee);
}
console.log(employees);
