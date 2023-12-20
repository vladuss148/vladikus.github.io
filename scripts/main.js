var myImage = document.querySelector("img");
myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/azov.png"){
        myImage.setAttribute("src", "images/azovtroops.jpg")
    } else {
        myImage.setAttribute("src", "images/azov.png");
      }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
    var myName = prompt("Please enter your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Приєднуйся до нас, " + myName;
};

if (!localStorage.getItem("name")){
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Все ще чекаємо, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};
