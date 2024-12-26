document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".scroll-footer");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
            // Scrolling up
            footer.style.bottom = "0";
        } else {
            // Scrolling down
            footer.style.bottom = "-100px"; // Hide footer
        }

        lastScrollY = currentScrollY;
    });
});
