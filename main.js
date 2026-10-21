const MenuBtn = document.getElementById("menubutton");                // Grab the menu button, the list of menu links, and the icon inside the button
const Navigationlink = document.getElementById("navlinks");
const burgericon = MenuBtn.querySelector("i");



MenuBtn.addEventListener("click", ()=>{
    Navigationlink.classList.toggle("open");
    const isopen = Navigationlink.classList.contains("open");                    // open or close the menu, and swap the icon between three lines and an X
    burgericon.setAttribute("class", isopen? "ri-close-line":"ri-menu-line"

    );
});

Navigationlink.addEventListener("click", () => {                            // When any menu link is tapped, close the menu and show the three lines again
    Navigationlink.classList.remove("open");
    burgericon.setAttribute("class","ri-menu-line");
});

const scrollrevealoption = {                                              //come up from the bottom, take 1 second
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".headercoffeeimage img", {       //the coffee image slides in from the right
    ...scrollrevealoption,
    origin: "right",
});

ScrollReveal().reveal(".headercontent h2", {            //heading slides in, followed by paragraph and other content after a small time delay to create a sequence
    ...scrollrevealoption,
    delay: 500,
});

ScrollReveal().reveal(".headercontent h1", {
    ...scrollrevealoption,
    delay: 1000,
});

ScrollReveal().reveal(".headercontent p", {
    ...scrollrevealoption,
    delay: 1500,
});

ScrollReveal().reveal(".headerbutton", {
    ...scrollrevealoption,
    delay: 2000,
});

ScrollReveal().reveal(".servicecard", {
    ...scrollrevealoption,
    interval: 500,
});

const numbers = document.querySelectorAll(".num");              // Find every number to animate, and set how long each count takes (2 seconds)
const countduration = 2000;

function countup(number) {
    const endvalue = parseInt(number.getAttribute("data-val"));
    let starttime = null;
  
    function step(timestamp) {                   // progress goes from 0 to 1 over 2 seconds, so every number, finishes at the same time whatever its size.
        if (!starttime) starttime = timestamp;
        const progress = Math.min((timestamp - starttime) / countduration, 1);
        number.textContent = Math.floor(progress * endvalue).toLocaleString("en-US");
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

const numberwatcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            countup(entry.target);
            numberwatcher.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

numbers.forEach((number) => numberwatcher.observe(number));

ScrollReveal().reveal(".statcard", {
    ...scrollrevealoption,
    interval: 500,
});

ScrollReveal().reveal(".testimonial:nth-child(odd)", {      // 1st and 3rd testimonials slide in from the right
    ...scrollrevealoption,
    origin: "right",
});

ScrollReveal().reveal(".testimonial:nth-child(even)", {   //2nd testimonial slides in from the left
    ...scrollrevealoption,
    origin: "left",
});