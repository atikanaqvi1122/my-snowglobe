const globe= document.querySelector("#globe");
const button= document.querySelector("#shake");
const message= document.querySelector("#message");


const messages= [
    "You are someones's favourite person to sit next to.",
    "The thing you are building counts, even if half finished.",
    "You are allowed to be a beginner for as long as you need.",
    "Your hard work will pay off soon.",
    "Happiness is around the corner."
];

button.addEventListener ("click", () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);


 const pick= Math.floor(Math.random() * messages.length);
 message.textContent= messages[pick];
});

