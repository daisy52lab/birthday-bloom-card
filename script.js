const button = document.getElementById("openButton");
const wish = document.getElementById("wish");
const title = document.getElementById("title");
const hint = document.getElementById("hint");
const card = document.getElementById("card");

button.addEventListener("click", function() {
button.textContent = "🌷";
button.classList.add("bloom");
card.classList.add("open");

    setTimeout(function() {
        wish.style.display = "block";
        title.textContent = "Happy Birthday 🎂";
        hint.style.display = "none";
        button.style.display = "none";
    }, 700);
});