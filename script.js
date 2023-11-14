const getFuncName = (name) => {
  // Write your code here

  let isValidFunc = validFunc(name);

  if (isValidFunc) {
    let arr = name.split("");
    arr.pop();
    arr.pop();
    return arr.join("");
  } else {
    return "Please enter a valid invoking function.";
  }
};

const validFunc = (str) => {
  function hasCorrectNaming(str, brackets) {
    let arr = str.split("");

    if (brackets) {
      arr.pop();
      arr.pop();
    }

    if (arr.length === 0) {
      return false;
    }

    let i = 0;
    while (i < arr.length) {
      let ch = arr[i];
      if (
        (ch < "0" || ch > "9") &&
        (ch < "a" || ch > "z") &&
        (ch < "A" || ch > "Z") &&
        ch !== "_" &&
        ch !== "$"
      ) {
        return false;
      }
      i++;
    }

    return true;
  }

  function removeSemiColons(str) {
    let arr = str.split("");
    for (let i = arr.length - 1; i >= 0; i--) {
      if (str.charAt(i) !== ";") {
        break;
      }
      arr.pop();
    }
    return arr.join("");
  }

  str = removeSemiColons(str);
  let n = str.length;
  let hasCorrectBrackets = str[n - 2] === "(" && str[n - 1] === ")";

  return hasCorrectBrackets && hasCorrectNaming(str, hasCorrectBrackets);
};

// Do not change the code below.

const funcName = prompt("Enter the function: ");
alert(getFuncName(funcName));
