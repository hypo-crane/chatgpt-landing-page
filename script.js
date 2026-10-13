
/* Select the HTML elements */
const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const goSearch = document.getElementById("goSearch");

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

/* Show or hide the search field */
searchBtn.addEventListener("click", function () {
    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {
        searchInput.focus();
    }
});

/* Simple search interaction */
goSearch.addEventListener("click", function () {
    const query = searchInput.value.trim();

    if (query === "") {
        alert("Please enter something to search.");
    } else {
        alert("You searched for: " + query);
    }
});

/* Show or hide the mobile navigation */
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
