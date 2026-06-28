
console.log("Connected");

const buttonlast = document.getElementById("buttonlast");

if (buttonlast) {
    window.onscroll = () => {
        buttonlast.style.display = window.scrollY > 400 ? "block" : "none";
    };

    buttonlast.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
} else {
    console.error("Button with id='buttonlast' not found.");
}
