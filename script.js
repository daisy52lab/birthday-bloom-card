const button = document.getElementById("openButton");
const wish = document.getElementById("wish");

button.addEventListener("click", function() {
    wish.style.display = "block";
    button.style.display = "none";
});