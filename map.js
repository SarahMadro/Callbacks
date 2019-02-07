var words = ["ground", "control", "to", "major", "tom"];

//function name = map
//takes two parameters, wrd & cb
//create new array
//loop through array (over each word)
//the callback is applied to each word
//add the result to the new array.

function map(arr, cb) {
  let newArr = [];
  arr.forEach((word) => {
    let result = cb(word);
    newArr.push(result);
  });
  console.log(newArr);
  return newArr;
};

map(words, function (word) {
  return word.length;
});

map(words, function (word) {
  return word.toUpperCase();
});

map(words, function (word) {
  return word.split('').reverse().join('');
});



