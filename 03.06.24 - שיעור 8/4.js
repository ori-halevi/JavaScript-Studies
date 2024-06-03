function printKeysAndTypes(obj) {
  for (i in obj) {
    console.log(i, typeof obj[i]);
  }
}
printKeysAndTypes({ name: "ori", age: 34 });
