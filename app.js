const imageArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];
imageArray.sort(() => 0.5 - Math.random());
// Need to learn this
console.log(imageArray);
///////// KEYWORDS /////////
// createElement setAttribute append setTimeOut

///////// SELECTING ELEMENTS and NEW ELEMENTS /////////
//////////////////////////////////////
const container = document.querySelector(".container");
const displayResult = document.querySelector("#result");
let storeId = [];
let storeName = [];
let result = 0;
///////// CREATING MAIN LAYOUT /////////
//////////////////////////////////////
for (let i = 0; i < imageArray.length; i++) {
  const image = document.createElement("img");
  image.setAttribute("src", "images/blank.png");
  //   image.setAttribute("name", imageArray[i].name);
  image.id = i;
  container.append(image);
  image.addEventListener("click", flipImage);
  console.log(image);
}

///////// CHECK FOR MATCH /////////
///////////////////////////////////
function checkMatch() {
  const images = document.querySelectorAll("img");
  console.log(images);
  if (storeId.length === 2) {
    if (storeName[0] === storeName[1]) {
      result++;
      if (result === imageArray.length / 2)
        displayResult.innerHTML =
          `${result} Hey congrats you did it all!`.toUpperCase();
      else displayResult.textContent = result;
      alert("You found the match!");
      images[storeId[0]].setAttribute("src", "images/white.png");
      images[storeId[1]].setAttribute("src", "images/white.png");
      images[storeId[0]].removeEventListener("click", flipImage);
      images[storeId[1]].removeEventListener("click", flipImage);
    } else {
      alert("Try again!");
      images[storeId[0]].setAttribute("src", "images/blank.png");
      images[storeId[1]].setAttribute("src", "images/blank.png");
    }
  }
  storeId = [];
  storeName = [];
}

///////// IMAGE FLIP FUNCTION /////////
//////////////////////////////////////
function flipImage() {
  const id = this.getAttribute("id");
  const name = imageArray[id].name;
  storeId.push(id);
  storeName.push(name);
  this.setAttribute("src", imageArray[id].img);
  console.log(storeId, storeName);
  console.log(id, name);
  if (storeId.length === 2) {
    setTimeout(checkMatch, 200);
  }
}
