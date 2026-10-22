
const button = document.getElementById("loveBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Yayyy! Semangat terus yaa 💗🧸";
  button.textContent = "Sending love ♡";
});
