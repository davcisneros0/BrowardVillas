// document.addEventListener('scroll', () => {
//     const textContainer = document.querySelector('.slide-text-container');
//     const textPosition = textContainer.getBoundingClientRect();

//     if (textPosition.top < window.innerHeight && textPosition.bottom >= 0) {
//         textContainer.querySelector('.animated-text').classList.add('show');
//     }
// });

// var wrapper = document.getElementsByClassName("animated-text");

// wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");

// var spans = wrapper.getElementsByTagName("p");

// for (let i = 0; i < spans.length; i++) {
//     spans[i].style.animationDelay = i*80+"ms";
// }