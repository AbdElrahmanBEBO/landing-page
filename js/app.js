const navbar = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();

//Create Links for navbar
let items = function (i){
    let x = document.createElement('li');
    x.style.cursor = "pointer";
    x.innerHTML =`<a class="menu__link" data-link="section${i}">Section${i}</a>`;
    fragment.appendChild(x);
}
for (let i = 1; i <= 4; i++) {
    items(i);
}
navbar.appendChild(fragment);


const links = document.querySelectorAll(".menu__link");
const sections = document.querySelectorAll("main section");

//Change styles when scrollup and scrolldown
window.addEventListener("scroll",function (){
    let currentSection = "";
    sections.forEach(function (section){
        const sectionTop = section.offsetTop;
            section.style.background ="none";
        if(pageYOffset+70 >= sectionTop){
            currentSection = section.getAttribute('id');
            section.style.background ="rgba(95,158,160,0.5)";
        }
    });
    links.forEach(function (link){
        link.style.color = "black";
        link.style.background = "white";
        if(link.getAttribute("data-link") === currentSection){
            link.style.color = "aqua";
            link.style.background = "black";
        }
    });
});


links.forEach(function(items){
    items.addEventListener("click",function (){
        let element = document.getElementById(items.getAttribute("data-link"));
        element.scrollIntoView({behavior:"smooth",block:"start"});
    });
});


