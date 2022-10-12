console.log("Script running");

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

submitButton.addEventListener("click", async (e) => {
  let myKey = "Si7Th7BtVQbBTMD5AYyGFYAEXQfk8ApQ";
  let topic = queryField.value;

  const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=Si7Th7BtVQbBTMD5AYyGFYAEXQfk8ApQ&q=" + topic );

  const body = await response.json();
  const randomIndex = getRandomInt(10)
  const gifObject = body.data[randomIndex];
  const image = gifObject.images.downsized_large;
  const imageURL = image.url;
  console.log(imageURL);
  imageHolderDiv.innerHTML = `<img src='${imageURL}' alt='Searched gif goes here.'/>` + imageHolderDiv.innerHTML;
});

queryField.addEventListener("change", async (e) => {
  console.log("change happened!");
  let myKey = "Si7Th7BtVQbBTMD5AYyGFYAEXQfk8ApQ";
  let topic = queryField.value;

  const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=Si7Th7BtVQbBTMD5AYyGFYAEXQfk8ApQ&q=" + topic );

  const body = await response.json();
  const randomIndex = getRandomInt(10)
  const gifObject = body.data[randomIndex];
  const image = gifObject.images.downsized_large;
  const imageURL = image.url;
  console.log(imageURL);
  imageHolderDiv.innerHTML = `<img src='${imageURL}' alt='Searched gif goes here.'/>` + imageHolderDiv.innerHTML;
});
