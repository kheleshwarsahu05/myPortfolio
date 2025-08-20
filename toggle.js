const darkMode = document.getElementById("dark-mode");
const modeTxt = document.getElementById("modeTxt");
const nav = document.getElementById("nav");
const body = document.getElementById("body");
const round = document.getElementById("round");
const heroTxt = document.getElementById("heroTxt");
const navHome = document.querySelector(".navHome");
const profileContainer = document.getElementById("profileContainer");
const navigatoionLinks = document.getElementById("navigationLinks");
const downloadR = document.getElementById("downloadResume");
const jfd = document.getElementById("JFD");
const heroBtn = document.querySelector("#heroButtonContainer > a > button");
const contactBtn = document.getElementById("contactBtn");
const profileDesc = document.getElementById("profileDesc");
const aboutUs = document.getElementById("about-us");
const aboutOne = document.getElementById("aboutOneLiner");
const aboutSpan = document.querySelector("#aboutOneLiner > span");
const skills = document.getElementById("skills-logo-break");
const skillsHead = document.getElementById("skillsHeading");

darkMode.style.flexDirection = "row";
const toggle = ()=>{
    if(darkMode.style.flexDirection === "row"){
        darkMode.style.flexDirection = "row-reverse";
        round.style.backgroundColor = "black";
        LigthMode();
    }else{
        darkMode.style.flexDirection = "row";
        round.style.backgroundColor = "white";
        DarkMode();
    }
}

const LigthMode = ()=>{
    console.log("light")
    body.classList.toggle("bodyColors");
    nav.classList.toggle("navColors");
    darkMode.classList.toggle("toggleButtonColors");
    navHome.classList.toggle("navHomeButton");
    document.querySelectorAll(".navlinks").forEach(Element => {
        Element.classList.toggle("navButtons");
    });
    profileContainer.classList.add("profileContainerColors");
    navigatoionLinks.classList.add("navContainerColor");

    document.querySelectorAll(".imgRound").forEach(el =>{
        el.classList.toggle("imgRoundColors");
    })

    downloadR.classList.toggle("downloadRColor");
    heroTxt.classList.toggle("heroTxtColors");
    jfd.classList.toggle("jfdColors");
    heroBtn.classList.add("heroBtnColors");
    document.querySelectorAll(".iconDiv").forEach(el => {
        el.classList.toggle("iconDivColors");
    })

    contactBtn.classList.toggle("contactBtnColors");
    profileDesc.classList.toggle("profileDescColors");


    aboutUs.classList.toggle("aboutUsColors");
    aboutOne.classList.toggle("aboutOneLinerColors");
    aboutSpan.classList.toggle("aboutSpan");
    document.querySelectorAll("#aboutBoxContainer > div").forEach(el =>{
        el.classList.toggle("aboutBoxesColors");
    });
    skills.classList.toggle("aboutUsColors");
    skillsHead.classList.toggle("aboutUsColors");
    document.querySelector("#skillsContainer > h2 span").classList.toggle("aboutSpan");
    // document.querySelector("#technical").classList.toggle("aboutBoxesColors");
    document.querySelector("#technicalSkillsContainer").classList.toggle("aboutBoxesColors");
    document.querySelector("#softSkillsContainer").classList.toggle("aboutBoxesColors");
    document.querySelector("#toolsContainer").classList.toggle("aboutBoxesColors"); 
    document.querySelector("#projects-logo-break").classList.toggle("aboutUsColors"); 
    document.querySelector("#projectsContainer > h2").classList.toggle("aboutUsColors"); 
    document.querySelector("#projectsContainer > h2 span").classList.toggle("aboutSpan"); 
    document.querySelectorAll("#projectsOuter > div > h4").forEach(el => {
        el.classList.toggle("aboutUsColors"); 
    })
    document.querySelectorAll("#projectsSlider > .insideSlider > h4").forEach(el => {
        el.classList.toggle("aboutUsColors"); 
    })
    document.querySelector("#contactUs-logo-break").classList.toggle("aboutUsColors"); 
    document.querySelector("#contactHeading").classList.toggle("aboutUsColors"); 
    document.querySelector("#contactHeading > span").classList.toggle("aboutSpan"); 


    document.querySelector("#formContainer").classList.toggle("aboutBoxesColors"); 
    document.querySelectorAll("#formContainer > input").forEach(el => {
        el.classList.toggle("inputColors");
    });
    document.querySelector("#formContainer > #textAreaContainer > textarea").classList.toggle("inputColors");
    document.querySelector("#sendContainer > button").classList.toggle("sendColors");
}

const DarkMode = ()=>{
    console.log("dark")
    body.classList.remove("bodyColors");
    nav.classList.remove("navColors");
    darkMode.classList.remove("toggleButtonColors");


    navHome.classList.remove("navHomeButton");
    document.querySelectorAll(".navlinks").forEach(Element => {
        Element.classList.remove("navButtons");
    });
    profileContainer.classList.remove("profileContainerColors");
    navigatoionLinks.classList.remove("navContainerColor");

    document.querySelectorAll(".imgRound").forEach(el =>{
        el.classList.remove("imgRoundColors");
    })

    downloadR.classList.remove("downloadRColor");
    heroTxt.classList.remove("heroTxtColors");
    jfd.classList.remove("jfdColors");
    heroBtn.classList.remove("heroBtnColors");
    document.querySelectorAll(".iconDiv").forEach(el => {
        el.classList.remove("iconDivColors");
    })

    contactBtn.classList.remove("contactBtnColors");
    profileDesc.classList.remove("profileDescColors");

    aboutUs.classList.remove("aboutUsColors");
    aboutOne.classList.remove("aboutOneLinerColors");
    aboutSpan.classList.remove("aboutSpan");
    document.querySelectorAll("#aboutBoxContainer > div").forEach(el =>{
        el.classList.remove("aboutBoxesColors");
    });
    skills.classList.remove("aboutUsColors");
    skillsHead.classList.remove("aboutUsColors");
    document.querySelector("#skillsContainer > h2 span").classList.remove("aboutSpan");
    // document.querySelector("#technical").classList.toggle("aboutBoxesColors");
    document.querySelector("#technicalSkillsContainer").classList.remove("aboutBoxesColors");
    document.querySelector("#softSkillsContainer").classList.remove("aboutBoxesColors");
    document.querySelector("#toolsContainer").classList.remove("aboutBoxesColors"); 
    document.querySelector("#projects-logo-break").classList.remove("aboutUsColors"); 
    document.querySelector("#projectsContainer > h2").classList.remove("aboutUsColors"); 
    document.querySelector("#projectsContainer > h2 span").classList.remove("aboutSpan"); 
    document.querySelectorAll("#projectsOuter > div > h4").forEach(el => {
        el.classList.remove("aboutUsColors"); 
    })
    document.querySelectorAll("#projectsSlider > .insideSlider > h4").forEach(el => {
        el.classList.remove("aboutUsColors"); 
    })
    document.querySelector("#contactUs-logo-break").classList.remove("aboutUsColors"); 
    document.querySelector("#contactHeading").classList.remove("aboutUsColors"); 
    document.querySelector("#contactHeading > span").classList.remove("aboutSpan"); 


    document.querySelector("#formContainer").classList.remove("aboutBoxesColors"); 
    document.querySelectorAll("#formContainer > input").forEach(el => {
        el.classList.remove("inputColors");
    });
    document.querySelector("#formContainer > #textAreaContainer > textarea").classList.remove("inputColors");
    document.querySelector("#sendContainer > button").classList.remove("sendColors");
}