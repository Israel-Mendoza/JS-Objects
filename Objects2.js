const numbers = {
    100: "one hundred",
    16: "sixteen",
    12: "twelve",
    "7 eleven": "it sucks!!!"
};

// We can use the keys in brackets to access the properties
// All "keys" will be coerced into a string
// This works when we have properties that would not be valid identifiers on their own

console.log(numbers[100]);
console.log(numbers["16"]);
console.log(numbers["12"]);
console.log(numbers["7 eleven"])


const palette = {
    red: "#eb4d4b",
    yellow: "#f9ca24",
    blue: "#30336b"
};

console.log(palette.red);
console.log(palette["blue"]);
console.log(palette["yellow"]);

// We can use an external variable within the bracket notation:

let aCoolColor = "blue";
console.log(palette[aCoolColor]);
