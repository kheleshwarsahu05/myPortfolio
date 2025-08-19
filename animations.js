const boxes = document.querySelectorAll("#aboutBoxContainer > div");
const aboutTxt = document.getElementById("about-logo-break");
const aboutOneLiner = document.getElementById("aboutOneLiner");
const skillsTxt = document.getElementById("skills-logo-break");
const technicalOuter = document.getElementById("technicalOuter");
const skillsHeading = document.getElementById("skillsHeading");
const softOuter = document.getElementById("softOuter");
const projectsTxt = document.getElementById("projects-logo-break");
const projectsHeading = document.getElementById("projectsHeading");
const projectsOuter = document.querySelectorAll("#projectsOuter > div");
const projectsSlider = document.getElementById("projectsSlider");
const contactTxt = document.getElementById("contactUs-logo-break");
const contactHeading = document.getElementById("contactHeading");
const formContainer = document.getElementById("formContainer");


let value = 0.6;
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.id === "about-logo-break") {
        entry.target.classList.add("aboutTxtShow");
      } 
      else if (entry.target.id === "aboutOneLiner") {
        entry.target.classList.add("oneLinerShow");

      }else if(entry.target.id === "skills-logo-break"){
        entry.target.classList.add("skillsTxtShow");

      }else if(entry.target.id === "skillsHeading"){
        entry.target.classList.add("skillsHShow");

      }else if(entry.target.id === "projects-logo-break"){
        entry.target.classList.add("projectsTxtShow");
      }else if(entry.target.id === "projectsHeading"){
        entry.target.classList.add("projectsHeadingShow");
      }else if(entry.target.parentElement?.id === "projectsOuter"){
        entry.target.classList.add("projectsOuterShow");
      }else if(entry.target.id === "projectsSlider"){
        entry.target.classList.add("projectsSliderShow");
      }else if(entry.target.id === "contactUs-logo-break"){
        entry.target.classList.add("contactTxtShow");
      }else if(entry.target.id === "contactHeading"){
        entry.target.classList.add("contactHeadingShow");
      }else if(entry.target.id === "formContainer"){
        entry.target.classList.add("formContainerShow");
      }
      else {
        entry.target.classList.add("show");
      }
    } else {
      entry.target.classList.remove(
        "show", 
        "aboutTxtShow", 
        "oneLinerShow",
        "skillsTxtShow",
        "skillsHShow",
        "projectsTxtShow",
        "projectsHeadingShow",
        "projectsOuterShow",
        "projectsSliderShow",
        "contactTxtShow",
        "contactHeadingShow",
        "formContainerShow"
      );
      if(entry.target.id === "skills-logo-break"){
        entry.target.classList.add("skillsTextShow01");
        // entry.target.classList.add("skillsHShow01");
      }
    }
  });
}, {
  threshold: value
});


const observer2 = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
        if(entry.target.id === "technicalOuter"){
          entry.target.classList.add("technicalShow");
        }else if(entry.target.id === "softOuter"){
          entry.target.classList.add("softOuterShow");
        }
    }else{
        entry.target.classList.remove(
          "technicalShow",
          "softOuterShow"
        );
    }
  })
},{threashold: 0.6});


boxes.forEach(box => observer.observe(box));
projectsOuter.forEach(box => observer.observe(box));

observer.observe(aboutTxt);
observer.observe(aboutOneLiner);
observer.observe(skillsTxt);
observer2.observe(technicalOuter);
observer.observe(skillsHeading);
observer2.observe(softOuter);
observer.observe(projectsTxt);
observer.observe(projectsHeading);
observer.observe(projectsSlider);
observer.observe(contactTxt);
observer.observe(contactHeading);
observer.observe(formContainer);