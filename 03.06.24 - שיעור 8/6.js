const person1 = {
  firstName: "spongebob",
  lastName: "squerpance",
  helloText: function () {
    console.log(`Hi, i am ${this.firstName}`);
  },
};

person1.helloText();
