const getFuncName = (str) => {
  // Write your code here

  // Making an array of characters of the input string.
  let arr = str.split("");

  // Removing all semicolons from end.
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== ";") {
      break;
    }
    arr.pop();
  }

  // Finding and removing opening and closing bracket from end.
  const hasCorrectBrackets = () => {
    if (arr[arr.length - 1] === ")" && arr[arr.length - 2] === "(") {
      arr.pop();
      arr.pop();
      return true;
    }

    return false;
  };

  // Checking if the function name is valid a/c to naming convention.
  const hasCorrectNaming = () => {
    if (arr.length === 0) {
      return false;
    }

    let i = 0;
    while (i < arr.length) {
      if (
        (arr[i] >= "0" && arr[i] <= "9") ||
        (arr[i] >= "a" && arr[i] <= "z") ||
        (arr[i] >= "A" && arr[i] <= "Z") ||
        arr[i] === "_" ||
        arr[i] === "$"
      ) {
        i++;
      } else {
        return false;
      }
    }

    return true;
  };

  if (hasCorrectBrackets() && hasCorrectNaming()) {
    return arr.join("");
  }

  return "Please enter a valid invoking function.";
};

// Do not change the code below.

const str = prompt("Enter a valid invoking function !!");
alert(getFuncName(str));
