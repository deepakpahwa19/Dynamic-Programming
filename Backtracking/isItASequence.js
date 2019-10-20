function isItASequence(arr, i) {
  if (i === 0) {
    return true;
  }
  const flag = arr[i] === arr[i - 1] + 1;
  return flag ? flag && isItASequence(arr, i - 1) : flag;
}

const ar = [2, 3, 4, 5, 6, 7];
console.log(isItASequence(ar, ar.length - 1));
