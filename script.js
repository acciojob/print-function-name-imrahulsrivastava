const getFuncName = (str) => {
  let arr = str.split("");
  let hasCorrectBrackets = brackets(arr);
  let hasCorrectNaming = naming(arr);

  if (hasCorrectBrackets && hasCorrectNaming) {
    return arr.join("");
  }

  return "Please enter a valid invoking function.";
};

function semiColons(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== ";") {
      break;
    }
    arr.pop();
  }
}

function brackets(arr) {
  semiColons(arr);

  if (arr[arr.length - 1] === ")" && arr[arr.length - 2] === "(") {
    arr.pop();
    arr.pop();
    return true;
  }

  return false;
}

function naming(arr) {
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
}

// Do not change the code below.

alert(getFuncName("functionName();"));
