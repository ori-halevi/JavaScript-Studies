function randomFunc() {
  const funcArray = [Math.cos, Math.sin, Math.sqrt, Math.abs, Math.cbrt];
  const retFunc = funcArray[Math.floor(Math.random() * 5)];
  console.log(retFunc);
  return retFunc;
}

const newFunc = randomFunc();
console.log(newFunc(5));
