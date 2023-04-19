document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#myButton");
    
    function add7() {
      let num1 = prompt("What is do you want to add 7 to?");
      let total = num1*1 + 7;
      alert(`Adding 7 to ${num1} gives you ${total}`);
    }

    function add8() {
      let num1 = prompt("What is do you want to add 8 to?");
      let total = num1*1 + 8;
      alert(`Adding 8 to ${num1} gives you ${total}`);
    }

    function multiply() {
      let num1 = prompt("What is your first number?");
      let num2 = prompt("What is your second number?");
      let total = num1 * num2;
      alert(total);
    }

    function capitalize() {
      let string = prompt("Enter a string:");
      let stringArray = string.split('');
      stringArray[0] = stringArray[0].toUpperCase();
      string = stringArray.join('');
      alert(string);
    }
    
    function lastLetter() {
      let string = prompt("Enter a string:");
      let stringArray = string.split('');
      lastChar = stringArray[stringArray.length-1];
      alert(lastChar);
    }

    function fizzBuzz() {
      let answer = parseInt(prompt("Fizz or Buzz?"));
      
      for (let i = 1; i <= answer; i++) {
        let number = "";        
        if (i%3 == 0) {
          number = number + "Fizz";
        }
        if (i%5 == 0) {
          number = number + "Buzz";
        }
        if (i%5 != 0 && i%3 != 0) {
          number = i;
        }
        console.log(number)
      }
    }

    button.addEventListener("click", fizzBuzz);
  });
  