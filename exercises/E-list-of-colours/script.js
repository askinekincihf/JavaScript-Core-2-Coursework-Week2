function listOfColours(colours) {
  const content = document.querySelector("#content");
  const selectElement = document.createElement("select");
  const para = document.createElement("p");
  content.append(selectElement, para);
  colours.forEach(color => {
    selectElement.innerHTML += `<option>${color}</option>`;
  });
  selectElement.addEventListener("change", (e) => {
    para.textContent = `You have selected: ${e.target.value}`
    para.style.backgroundColor = e.target.value;
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
