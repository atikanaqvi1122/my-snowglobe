const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");
const backgroundSnow = document.querySelector(".background-snow");
const globeSnow = document.querySelector(".globe-snow");

function createSnowflakes(container, count) {
    for (let index = 0; index < count; index += 1) {
        const flake = document.createElement("span");
        flake.className = "flake";
        flake.textContent = "*";
        flake.style.setProperty("--size", `${0.45 + Math.random() * 0.7}rem`);
        flake.style.setProperty("--opacity", `${0.35 + Math.random() * 0.6}`);
        flake.style.setProperty("--duration", `${5 + Math.random() * 8}s`);
        flake.style.setProperty("--delay", `${-Math.random() * 10}s`);
        flake.style.setProperty("--drift", `${-2 + Math.random() * 4}rem`);
        flake.style.left = `${Math.random() * 100}%`;
        container.append(flake);
    }
}

createSnowflakes(backgroundSnow, 28);
createSnowflakes(globeSnow, 16);

const messages = [
    "You are someones's favourite person to sit next to.",
    "The thing you are building counts, even if half finished.",
    "You are allowed to be a beginner for as long as you need.",
    "Your hard work will pay off soon.",
    "Happiness is around the corner."
];

button.addEventListener("click", () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);

    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
});
