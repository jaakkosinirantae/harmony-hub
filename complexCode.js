// Filename: complexCode.js
// Description: A complex code example showcasing various JavaScript concepts and techniques.

// Define a class for creating geometric shapes
class Shape {
  constructor(name, area, perimeter) {
    this.name = name;
    this.area = area;
    this.perimeter = perimeter;
  }

  getInfo() {
    return `A ${this.name} with area ${this.area} and perimeter ${this.perimeter}.`;
  }
}

// Define some useful functions
function calculateArea(length, width) {
  return length * width;
}

function calculatePerimeter(length, width) {
  return 2 * (length + width);
}

// Create instances of geometric shapes
const rectangle = new Shape("rectangle", calculateArea(4, 6), calculatePerimeter(4, 6));
const square = new Shape("square", calculateArea(5, 5), calculatePerimeter(5, 5));

// Print information about the shapes
console.log(rectangle.getInfo());
console.log(square.getInfo());

// Perform some complex mathematical operations
let result = Math.pow(2, 10) + Math.sqrt(81) - Math.random() * 100;
result = Math.ceil(result);
result = Math.floor(Math.abs(result));

// Generate a random string using ASCII character codes
let randomString = "";
for (let i = 0; i < 10; i++) {
  randomString += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Simulate a complex algorithm using recursion
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const fibonacciResult = fibonacci(10);

// Demonstrate the use of closures and higher-order functions
function greet(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const greetHello = greet("Hello");
greetHello("John");

// Create a complex data structure using arrays and objects
const complexData = [
  {
    name: "Object 1",
    properties: [
      { key: "property1", value: 10 },
      { key: "property2", value: 20 },
    ],
  },
  {
    name: "Object 2",
    properties: [
      { key: "property1", value: 30 },
      { key: "property2", value: 40 },
    ],
  },
];

// Modify the complex data structure
complexData[0].properties.push({ key: "property3", value: 50 });
complexData[1].properties[0].value = 60;

// Create a complex regular expression for validating email addresses
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Test the regular expression
const email = "test@example.com";
const isEmailValid = emailRegex.test(email);

// Execute WebGL rendering using a sophisticated 3D library (omitted for brevity)

// Fetch data from a complex API and perform various operations
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    const filteredData = data.filter((item) => item.price < 100);
    const sortedData = filteredData.sort((a, b) => b.price - a.price);
    console.log(sortedData);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// ... continue with more complex and elaborate code

// End of complexCode.js