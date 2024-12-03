// Q4. Write a program that takes User Inputs and does Unit Conversion of
// different Length units
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet

function unitConversion() {
    const choice = parseInt(prompt(
        `Select the conversion you want to perform:
        1. Feet to Inch
        2. Feet to Meter
        3. Inch to Feet
        4. Meter to Feet`
    ));

    const value = parseFloat(prompt("Enter the value:"));

    let result;

    switch (choice) {
        case 1:
            result = value * 12; // Feet to Inch
            alert(`${value} Feet is equal to ${result} Inches.`);
            break;
        case 2:
            result = value * 0.3048; // Feet to Meter
            alert(`${value} Feet is equal to ${result.toFixed(2)} Meters.`);
            break;
        case 3:
            result = value / 12; // Inch to Feet
            alert(`${value} Inches is equal to ${result.toFixed(2)} Feet.`);
            break;
        case 4:
            result = value / 0.3048; // Meter to Feet
            alert(`${value} Meters is equal to ${result.toFixed(2)} Feet.`);
            break;
        default:
            alert("Invalid");
            break;
    }
}

unitConversion();
