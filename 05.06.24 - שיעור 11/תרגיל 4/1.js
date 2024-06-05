// function getInfo(name) {
fetch(`https://jsonplaceholder.typicode.com/users/?username=Samantha`)
  .then((res) => {res.json()})
  .then((data) => console.log(data))
  .catch((error) => {console.log(error)});
// }

// console.log(getInfo("Samantha"));
