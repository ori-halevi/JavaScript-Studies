// function getInfo(name) {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/users/?username=${name}`)
//       .then((res) => {
//         if (res.ok) {
//           return res.json(); // Parse the JSON from the response body
//         } else {
//           throw new Error("Network response was not ok.");
//         }
//       })
//       .then((data) => {
//         if (data.length !== 0) {
//           console.log(data);
//           resolve("good");
//         } else {
//           throw new Error("The value is empty!");
//         }
//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//         reject("bad");
//       });
//   });
// }

async function readFile(name) {
  try {
    const getInfoResult = await fetch(
      `https://jsonplaceholder.typicode.com/users/?username=${name}`
    );
    const asJSON = await getInfoResult.json();
    if (asJSON.length !== 0) {
      console.log(asJSON);
    } else {
      throw new Error("The value is empty!");
    }

  } catch (error) {
    console.error("Error reading file:", error);
  }
}

readFile("Bret");
