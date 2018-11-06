let msg = 'This is a JavaScript Calculator';
alert(msg);

/**
calculate() takes no inputs.

calculate() is run every time the submit button is run.
It takes the two values that were input into valueOne and valueTwo and performs the correct math operation on them.
It prints this result to the screen.

calculate() does not return anything.
*/

function calculate() {

  let valueOne = Number(document.getElementById("valueOne").value);
  let valueTwo = Number(document.getElementById("valueTwo").value);
  let operations = document.getElementsByName("operation");

  for (let i = 0, length = operations.length; i < length; i++) { // step through each button from operations (4 possibilities - add, subtract, multiply, divide)
    if (operations[i].checked) { // if particular operation is checked run through this loop
      if (operations[i].value === "add") { // if the "add" button was checked, then add results
        document.getElementById("result").innerHTML = "Result: " + (valueOne+valueTwo);
      } else if (operations[i].value === "subtract") { // if the "subtract" button was checked, then subtract results
        document.getElementById("result").innerHTML = "Result: " + (valueOne-valueTwo);
      } else if (operations[i].value === "multiply") { // if the "multiply" button was checked, then multiply results
        document.getElementById("result").innerHTML = "Result: " + (valueOne*valueTwo);
      } else { // otherwise, the "divide" button was checked and then divide results
        document.getElementById("result").innerHTML = "Result: " + (valueOne/valueTwo);      }
    }
  }
}
