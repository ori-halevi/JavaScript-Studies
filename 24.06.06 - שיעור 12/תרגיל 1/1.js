// code yuck
async function readFile(name) {
  try {
      // send request to server
    const getInfoResult = await fetch(
      `https://jsonplaceholder.typicode.com/users/?username=${name}`
    );
    if(!getInfoResult.ok){
      throw new Error("This Info doesn't exsist in our website, check your URL.")
    }
    // return it JSON
    const asJSON = await getInfoResult.json();
    if (asJSON.length !== 0) {
      console.log(asJSON);
    } else {
      throw new Error("There is not such a person in our website!");
    }
    // catch errors
  } catch (error) {
    console.error("Error reading file:", error);
    setTimeout(() => {
      document.getElementById("nameInput").value = "";
    }, 3000);
  }
}

async function runLookup() {
  let name = await document.getElementById("nameInput").value;
  readFile(name);
}
const submitNameButton = document.getElementById("submitNameButton");
submitNameButton.addEventListener("click", () => {
  runLookup();
});


