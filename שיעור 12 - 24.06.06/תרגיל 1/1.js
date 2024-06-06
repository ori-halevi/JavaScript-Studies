// code yuck
async function readFile(name) {
  try {
    const getInfoResult = await fetch(
      `https://jsonplaceholder.typicode.com/users/?username=${name}`
    );
    const asJSON = await getInfoResult.json();
    if (asJSON.length !== 0) {
      console.log(asJSON);
    } else {
      throw new Error("There is not such a person in our website!");
    }
  } catch (error) {
    console.error("Error reading file:", error);
    setTimeout(() => {
      document.getElementById("nameInput").value = "";
    }, 3000);
  }
}

const submitNameButton = document.getElementById("submitNameButton");
submitNameButton.addEventListener("click", () => {
  runLookup();
});

async function runLookup() {
  let name = await getNameFromInput();
  readFile(name);
}

function getNameFromInput() {
  return document.getElementById("nameInput").value;
}
