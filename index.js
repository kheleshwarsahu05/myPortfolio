const darkMode = document.getElementById("dark-mode");
const modeTxt = document.getElementById("modeTxt");
const nav = document.getElementById("nav");
const body = document.getElementById("body");
const round = document.getElementById("round");
const navImgContainer = document.getElementsByClassName("navImgContainer");
const heroTxt = document.getElementById("heroTxt");

    const toggle = ()=>{
        if(round.style.marginLeft === "2px" || round.style.marginLeft === ""){
            round.style.marginLeft = "32px";
            round.style.border = "1px solid";
            round.style.marginRight = "2px";
            round.style.backgroundColor = "black";
        }else{
             round.style.marginLeft = "2px";
             round.style.backgroundColor = "white";
        }

        if(round.style.marginLeft === "2px" || round.style.marginLeft === ""){
            body.style.backgroundImage = "url(sl_0210121_40570_43.jpg)";
            darkMode.style.backgroundColor = "black";
            nav.style.color = "white";
            heroTxt.style.color = "black";
        }else{
            body.style.backgroundImage = "none";
            body.style.backgroundColor = "white";
            nav.style.color = "black";
            darkMode.style.backgroundColor = "white";
            navImgContainer.style.borderColor = "white";
            heroTxt.style.color = "white";
        }
    }