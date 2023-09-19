function computeSimpleCalculations() {
    let firstValue = parseInt(prompt("Enter the first number, please: "));
    let operator = prompt("Enter the operator, please: ");
    let secondValue = parseInt(prompt("Enter the second number, please: "));

    if (operator.includes(`+`)) {
        console.log(firstValue + secondValue);
    }
    else if (operator.includes(`-`)) {
        console.log(firstValue - secondValue);
    }
    else if (operator.includes(`*`)) {
        console.log(firstValue * secondValue);
    }
    else if (operator.includes(`/`)) {
        console.log(firstValue / secondValue);
    }
    else {
        console.log(`Invalid operator`);
    }
}

computeSimpleCalculations();


// ! DRAFT BELOW

// console.log(`Hello wilders!`);

// let firstValue = 1;
// let operator = `+`;
// let secondValue = 2;

// console.log(`${firstValue}`);
// console.log(`${operator}`);
// console.log(`${secondValue}`);
// // * I see the values of the variables printed one after the other

// console.log(`${firstValue + secondValue}`);
// // * I see the result of the addition printed

// if (operator.includes(`+`)) {
//     console.log(`${firstValue + secondValue}`);
// }
// else if (operator.includes(`-`)) {
//     console.log(`${firstValue - secondValue}`);
// }
// else if (operator.includes(`*`)) {
//     console.log(`${firstValue * secondValue}`);
// }

// else if (operator.includes(`/`)) {
//     console.log(`${firstValue / secondValue}`);
// }

// else {
//     console.log(`Invalid operator`);
// }

