function getInitialOdds(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.length == 0 ? answer.push(1) : answer.push(answer.at(-1) + 2);
  }
  return answer;
}

console.log(getInitialOdds(5));

// 2-m
function getEvenReverse(arr) {
  let evenNumbers = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

console.log(getEvenReverse([4, 5, 7, 8, 6, 9]));

// 3-m
const array = [4, 5, 7, 8, 6, 9];
let text = ``;
for (let i = 0; i < array.length; i++) {
  text += `${array.i}${arr.array.length - 1(i + 1)}`;
}

console.log(text);

// 4-m
function rangeSum(arr, K, L) {
  let sum = 0;
  for (let i = K; i <= L; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(rangeSum([1, 6, 9, 5, 8, 10, 15], 2, 5));

// 5-m
function getSingleArr(arr) {
  let result = [];
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;
  }
  for (let num in count) {
    if (count[num] === 1) {
      result.push(Number(num));
    }
  }
  return result;
}

console.log(getSingleArr([1, 1, 2, 2, 3, 4]));

// 6-m
function swapMinMax(arr) {
  let minIndex = arr.indexOf(Math.min(...arr));
  let maxIndex = arr.indexOf(Math.max(...arr));

  let temp = arr[minIndex];
  arr[minIndex] = arr[maxIndex];
  arr[maxIndex] = temp;

  return arr;
}

console.log(swapMinMax([7, 4, 2, 3, 1, 5]));

// 7-m
function shiftRight(arr) {
  let last = arr.pop();
  arr.unshift(last);
  return arr;
}

console.log(shiftRight([3, 7, 2, 4]));

// uy 1-m
function getLevel2(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

console.log(getLevel2(3));

// uy 2-m
function generateArray(n, A, B) {
  let arr = [A, B];
  for (let i = 2; i < n; i++) {
    let sum = arr.reduce((acc, val) => acc + val, 0);
    arr.push(sum);
  }
  return arr;
}

console.log(generateArray(5, 2, 3));

//  uy 3-m
function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4, 5]));

//  uy 4-m
function getOddNumbers(arr) {
  let oddNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }
  }
  return [oddNumbers.join(" "), "toq sonlar soni = " + oddNumbers.length];
}

console.log(getOddNumbers([4, 5, 7, 8, 6, 9]));

// uy 5-m
function sortEvenOdd(arr) {
  let evenNumbers = [];
  let oddNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    } else {
      oddNumbers.push(arr[i]);
    }
  }

  oddNumbers.reverse();

  return evenNumbers.concat(oddNumbers);
}

console.log(sortEvenOdd([4, 5, 7, 8, 6, 9]));

// uy 6-m
function evenIndexes(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

console.log(evenIndexes([4, 5, 7, 8, 6, 9]));

// uy 7-m
function oddIndexes(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i -= 2) {
    result.push(arr[i]);
  }
  return result;
}

console.log(oddIndexes([4, 5, 7, 8, 6, 9]));

// uy 8-m
function evenThenOdd(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  for (let i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

console.log(evenThenOdd([4, 5, 7, 8, 6, 9]));

// uy 9-m
function oddThenEvenReverse(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  for (let i = arr.length - 2; i >= 0; i -= 2) {
    result.push(arr[i]);
  }
  return result;
}

console.log(oddThenEvenReverse([4, 5, 7, 8, 6, 9]));

// uy 10-m
function alternateStartEnd(arr) {
  let result = [];
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    result.push(arr[left]);
    if (left !== right) result.push(arr[right]);
    left++;
    right--;
  }
  return result;
}

console.log(alternateStartEnd([1, 2, 3, 4, 5]));
// uy 11-m
function rangeOutSum(arr, K, L) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < K || i > L) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(rangeOutSum([1, 2, 3, 4, 5], 1, 3));

// uy 12-m
function separateTruthyFalsy(arr) {
  let truthy = [];
  let falsy = [];
  for (let el of arr) {
    if (el) truthy.push(el);
    else falsy.push(el);
  }
  return { truthy, falsy };
}

console.log(separateTruthyFalsy([10, false, "", "Abdulaziz", null]));

// uy 13-m
function getOddMin(arr) {
  let oddElements = [];
  for (let i = 0; i < arr.length; i += 2) {
    oddElements.push(arr[i]);
  }
  return Math.min(...oddElements);
}

console.log(getOddMin([1, 6, 9, 5, 8, 10]));

// uy 14-m
function getEvenMax(arr) {
  let evenElements = [];
  for (let i = 1; i < arr.length; i += 2) {
    evenElements.push(arr[i]);
  }
  return Math.max(...evenElements);
}

console.log(getEvenMax([1, 6, 9, 5, 8, 10]));
