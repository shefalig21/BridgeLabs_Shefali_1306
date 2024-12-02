//Q5. Unit Conversion
//(a) 1ft = 12 in then 42 in = ? ft 

function inchesToFeet(inch)
{
    return inch/12;
    
}

const inch=42;
const feet=inchesToFeet(inch);
console.log(feet);


//(b) Rectangular Plot of 60 feet x 40 feet in meters

function calculateArea(length,width)
{
    return length*width;
    
}

let length=60;
let width=40;

const lengthMeters=length*0.3048;
const widthMeters=width*0.3048;

const areaofRectangle=calculateArea(lengthMeters,widthMeters);
console.log(areaofRectangle);


