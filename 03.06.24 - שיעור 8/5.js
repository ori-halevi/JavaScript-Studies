function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (key in obj1) {
      if (obj1[key] === obj2[key]) {
        continue;
      } else {
        console.log("they dont match");
        break;
      }
    }
    console.log("they match");
  } else {
    console.log("they realy dont match");
  }
}

let obj1 = {
  name: "amit",
  age: 25,
  s: "",
};

let obj2 = {
  name: "amit",
  age: 25,
  s: "1",
  s: "3",
  s: "",
};
compareObjects(obj1, obj2);
