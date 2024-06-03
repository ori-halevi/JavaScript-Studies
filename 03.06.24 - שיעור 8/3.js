function customAlert(x) {
  return window.alert(x);
}

function arrayForEach(arr, func) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

arrayForEach([1, 2, 3, 4], customAlert);
