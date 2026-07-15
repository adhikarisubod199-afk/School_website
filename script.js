console.log("Connected");

const buttonlast = document.getElementById("buttonlast");

window.addEventListener("scroll", () => {
    console.log(window.scrollY); // Check scrolling

    if (window.scrollY > 200) {
        buttonlast.style.display = "flex";
    } else {
        buttonlast.style.display = "none";
    }
});

buttonlast.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const preb = document.getElementById("preb");
preb.addEventListener("click", () => {
    open("apply.html", "_blank");
});
const preb1 = document.getElementById("preb1");
preb1.addEventListener("click", () => {
    open("apply.html", "_blank");
});
const moreb = document.getElementById("moreb");
moreb.addEventListener("click", () => {
    open("more.html", "_blank");
});