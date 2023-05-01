const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.buttons');
let result = "";
//Eventlistener for keyboard press
document.addEventListener('keydown', (e) => {
  const key = e.key;
  buttons.forEach((button) => {
    const buttonText = button.innerHTML;
    const supValue = button.getAttribute("data-sup");
    if (document.querySelector('.input:focus')) {
      return; // Exit the function early
    }
    // Check if the button's innerHTML matches the key pressed
    if (buttonText === key) {
      button.click();// Trigger the button click event
    }
  });
});
// Function to convert binary string to decimal
function binaryToDecimal(binaryString) {
  return parseInt(binaryString, 2);
}
// Function to convert decimal to binary string
function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}
//Eventlistener for button press in the screen
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML;
    const supValue = e.target.getAttribute("data-sup");
    //switch statement for variours functions
    switch (buttonText) {
      case "=": //Evaluate expression
        result = eval(input.value);
        input.value = result;
        break;

      case "C": //Clear input field
        input.value = "";
        result = "";
        break;

      case "AND": //AND operation
        input.value += "&";
        break;

      case "OR": //OR operation
        input.value += "|";
        break;

      case "XOR": //XOR operation
        input.value += "^";
        break;

      case "NOT": //NOT operation
        result = (~parseInt(input.value, 10)).toString(2);
        input.value = result;
        break;

        case "conv": //conversion case to change field value to binary to decimal and vice versa
        const binaryRegex = /^[01]+$/; // Regular expression to match binary strings
        const inputVal = input.value.trim();
        if (binaryRegex.test(inputVal)) {
          // If input is a valid binary string, convert to decimal
          const decimal = binaryToDecimal(inputVal);
          input.value = decimal;
          result = decimal;
        } else {
          // If input is a decimal number, convert to binary
          const decimal = parseFloat(inputVal);
          if (!isNaN(decimal)) {
            const binary = decimalToBinary(decimal);
            input.value = binary;
            result = binary;
          }
        }
        break;

        case "sin": //Trignometric sine operation in radians
        result = Math.sin(parseFloat(input.value)).toFixed(4);
        input.value = result;
        break;

      case "cos": //Trignometric cosine operation in radians
        result = Math.cos(parseFloat(input.value)).toFixed(4);
        input.value = result;
        break;

      case "tan": //Trignometric tangent operation in radians
        result = Math.tan(parseFloat(input.value)).toFixed(4);
        input.value = result;
        break;

      case "cosec": //Trignometric cosecant operation in radians -- as 1/sine
        result = (1 / Math.sin(parseFloat(input.value))).toFixed(4);
        input.value = result;
        break;

      case "sec": //Trignometric secant operation in radians -- as 1/cosine
        result = (1 / Math.cos(parseFloat(input.value))).toFixed(4);
        input.value = result;
        break;

      case "cot": //Trignometric cotangent operation in radians -- as 1/tangent
        result = (1 / Math.tan(parseFloat(input.value))).toFixed(4);
        input.value = result;
        break;

       case "←": //Clear the last element in the input field -- backspace operation
        result = input.value.substring(0, input.value.length - 1);
        input.value = result;
        break;

      case "x²": //Square operation on a number 'x'
        result = Math.pow(parseFloat(input.value), 2).toFixed(4);
        input.value = result;
        break;
      
      /*
      //This function is disabled as there no available button to use 

      case "x³": //Cube operation on a number 'x'
        result = Math.pow(parseFloat(input.value), 3).toFixed(4);
        input.value = result;
        break;

      */
  
      case "x<sup>n</sup>": //'x' raised to 'n' operation
        input.value += "**";
        break;

      case "x<sup root='root'>1/2</sup>" : //Squareroot operation on a number x -- as 'x' raised to '1/2'
        result = Math.pow(parseFloat(input.value),0.5).toFixed(4);
        input.value = result;
        break;

      case "%": // Modulus operation on 2 numbers -- gives reminder when first number is divided by second number
        input.value += "%";
        break;

      default: // When button clicked is a number or a mathamatical operation ex: +,-,*,/
        input.value += supValue ? `**${supValue}` : buttonText;
        break;
    }
  });
});