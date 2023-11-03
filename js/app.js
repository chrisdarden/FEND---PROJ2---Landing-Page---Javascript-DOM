const sections = document.querySelectorAll(".section");
const navBar = document.querySelector(".navbar__menu");
const navMenu = document.createElement("ul");
const navTitles = document.querySelectorAll("h2");



function isInViewport(e) {
    let bounding = e.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const titleName = function(x) {
    return navTitles[x].innerHTML;
};

function createNav() {
    for (let i = 0; i < sections.length; i++) {
        let li = document.createElement("li");
        let anchor = document.createElement("a");
        li.appendChild(anchor);
        anchor.href = "#section" + (i + 1);
        anchor.textContent = `${titleName(i)}`;
        navMenu.appendChild(li);
    }
    navBar.appendChild(navMenu);
}

createNav();


// Add class "active" to section when near top of viewport

const navHighlight = document.querySelectorAll("a");

function highlightSection() {
    for (let i = 0; i < sections.length; i++) {
        if (isInViewport(sections[i]) === true) {
            navHighlight[i].classList.add("section-highlight")
        } else navHighlight[i].classList.remove("section-highlight");
    }
}


// Scroll to anchor ID using scrollTO event
function scrollHere(location) {
    location.scrollIntoView();
}

function scrollUp() {
    window.scrollTo(0, 0)
}


document.addEventListener("scroll", function() {
    highlightSection();
});