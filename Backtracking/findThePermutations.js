// Given the Array [1,2,3], find all the permutations of the array

function findThePermutations(arr, partial = [], used = []) {
  if (partial.length === arr.length) {
    console.log(partial);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!used[i]) {
      used[i] = true;
      partial.push(arr[i]);
      findThePermutations(arr, partial, used);
      used[i] = false;
      partial.pop();
    }
  }
}

findThePermutations([1, 2, 3]);
