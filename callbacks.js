function findWaldo(arr, found) {
  arr.forEach((elm, i) => {
    if (elm === "Waldo") {
      return found(i);
       // execute callback
    }
  })
}

function actionWhenFound(found) {

  console.log("Found him at index", found);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);