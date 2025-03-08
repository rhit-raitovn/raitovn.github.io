document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".fg").forEach(circle => {
        let percent = circle.getAttribute("data-percent");
        let dashoffset = 283 - (283 * percent) / 100; // Correct stroke-dashoffset calculation
        circle.style.strokeDashoffset = dashoffset;
    });
});

function scrollToFooter() {
    document.getElementById("contact-footer").scrollIntoView({ behavior: "smooth" });
}

