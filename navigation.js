const navToggle = document.querySelector("#nav-toggle");
const topNav = document.querySelector("#topnav");

navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    topNav.classList.toggle("is-open", !isExpanded);
});

topNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        navToggle.setAttribute("aria-expanded", "false");
        topNav.classList.remove("is-open");
    }
});
