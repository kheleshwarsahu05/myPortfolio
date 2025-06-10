const darkMode = document.getElementById("dark-mode");
const modeTxt = document.getElementById("modeTxt");
const nav = document.getElementById("nav");
const body = document.getElementById("body");

const toggle = ()=>{
    if(darkMode.style.flexDirection == "row"){
        darkMode.style.flexDirection = "row-reverse";
        modeTxt.textContent = "Dark Mode";
        nav.style.backgroundColor = "white";
        nav.style.color = "black"
        body.style.backgroundColor = "#c9c9c9d1";

    }else{
        darkMode.style.flexDirection = "row";
        modeTxt.textContent = "Light Mode";
        nav.style.backgroundColor = "black";
        nav.style.color = "white";
        body.style.backgroundColor = "#000000d1";

    }
}