let numbers = [1, 2, 3, 4, 5];

const myWalker = (arr, callback) => {
  for (let i = 0; i < numbers.length; i++) {
    callback(arr[i]);
  }
};
myWalker(numbers, (element) => {
  console.log(element);
});
