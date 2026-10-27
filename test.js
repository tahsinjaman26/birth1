
const heart = document.getElementById("heart");

const loveMessage = document.getElementById("loveMessage");

const messages = [
    "You make the world beautiful! 💖",
    "Sending you lots of love! 💕",
    "You are special! ❤️",
    "Keep smiling! 🌹",
    "Love is everywhere! 💗"
];

heart.addEventListener("click", function () {

    // Show a random love message

    const randomIndex = Math.floor(
        Math.random() * messages.length
    );

    loveMessage.textContent = messages[randomIndex];

    loveMessage.classList.remove("show");

    // Restart the message animation

    void loveMessage.offsetWidth;

    loveMessage.classList.add("show");

    // Create floating hearts

    createHearts(25);

    // Heart click effect

    heart.animate(
        [
            {
                transform: "rotate(-45deg) scale(1)"
            },
            {
                transform: "rotate(-45deg) scale(1.4)"
            },
            {
                transform: "rotate(-45deg) scale(1)"
            }
        ],
        {
            duration: 400,
            easing: "ease-out"
        }
    );

});


function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const miniHeart = document.createElement("div");

        miniHeart.classList.add("mini-heart");

        // Random heart symbols

        const symbols = ["❤️", "💖", "💕", "💗", "💘"];

        miniHeart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        // Start position

        const rect = heart.getBoundingClientRect();

        miniHeart.style.left =
            (rect.left + rect.width / 2) + "px";

        miniHeart.style.top =
            (rect.top + rect.height / 2) + "px";

        // Random movement

        const x = (Math.random() - 0.5) * 400;

        const y = -(100 + Math.random() * 300);

        const rotation = (Math.random() - 0.5) * 720;

        miniHeart.style.setProperty("--x", x + "px");

        miniHeart.style.setProperty("--y", y + "px");

        miniHeart.style.setProperty(
            "--rotation",
            rotation + "deg"
        );

        miniHeart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        // Add to the page

        document.body.appendChild(miniHeart);

        // Remove after animation

        miniHeart.addEventListener("animationend", function () {
            miniHeart.remove();
        });

    }

}
;
