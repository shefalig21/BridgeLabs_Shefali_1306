// Q4. Enter 3 Numbers do following arithmetic operation and find the one that
// is maximum and minimum
// 1. a + b * c 3. c + a / b
// 2. a % b + c 4. a * b + c



function calculate(a, b, c) {
    const result1= a + b * c;
    const result2= a % b + c;
    const result3= c + a / b;
    const result4= a * b + c;
  
    let max = result1;
    let min = result1;
  
    if (result2 > max) {
      max = result2;
    }
    if (result2 < min) {
      min = result2;
    }
    if (result3 > max) {
      max = result3;
    }
    if (result3 < min) {
      min = result3;
    }
    if (result4 > max) {
      max = result4;
    }
    if (result4 < min) {
      min = result4;
    }
  
    console.log(result1, result2, result3, result4);
    console.log(max);
    console.log(min);
  }
  const a = parseFloat(prompt("value of a:"));
  const b = parseFloat(prompt("value of b:"));
  const c = parseFloat(prompt("value of c:"));

  calculate(a, b, c);