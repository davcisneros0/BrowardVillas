//MAKE VARIABLE THAT ATTACHS TO .ABOUT-CONTAINER.. SECTION THAT HOLDS PARAGRAPHS AND DIVS INSIDE
const paragraphs = document.querySelectorAll(".about-container");

//WHEN USER SCROLLS DOWN TO SECTION, FADES IN WHEN USER IS CLOSE TO SECTION
document.addEventListener("scroll", function() {
    paragraphs.forEach(paragraph => {
        if(textInView(paragraph)) {
            paragraph.classList.add("about-container--visible");
        }
    });
});

//FADE IN FUNCTION
function textInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && 
        rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}