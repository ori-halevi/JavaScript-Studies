function getInfo(name) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/?username=${name}`)
      .then((res) => {
        if (res.ok) {
          return res.json(); // Parse the JSON from the response body
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        if (data.length !== 0) {
          console.log(data);
          resolve("good");
        } else {
          throw new Error("The value is empty!");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        reject("bad");
      });
  });
}

async function readFile(name) {
  try {
    const getInfoResult = await getInfo(name);
    console.log(getInfoResult);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

readFile("Bret");

function rwt(resolve, reject) {
  if (0 === 0) {

    resolve("yes");
  } else {
    reject("no");
  }
}
console.log(rwt());

