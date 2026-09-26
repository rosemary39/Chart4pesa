const people = [
  { name: "Emma", country: "🇺🇸 USA", rate: 0.80 },
  { name: "James", country: "🇬🇧 UK", rate: 0.70 },
  { name: "Sophia", country: "🇨🇦 Canada", rate: 0.60 },
  { name: "Olivia", country: "🇺🇸 USA", rate: 0.75 }
];

let balance = 0;
let currentPerson = null;
let startTime = null;
let timer = null;

function startChat(personIndex) {
  currentPerson = people[personIndex];
  startTime = Date.now();

  const name = document.getElementById("chatName");
  if (name) name.textContent = currentPerson.name;

  clearInterval(timer);
  timer = setInterval(updateChat, 1000);
}

function updateChat() {
  if (!startTime || !currentPerson) return;

  const seconds = Math.floor((Date.now() - startTime) / 1000);
  const minutes = seconds / 60;
  const earned = minutes * currentPerson.rate;

  balance = earned;

  const earnedBox = document.getElementById("earned");
  if (earnedBox) earnedBox.textContent = earned.toFixed(2);

  const timerBox = document.getElementById("timer");

  if (timerBox) {
    const m = Math.floor(seconds / 60);
    const s = String(seconds % 60).padStart(2, "0");
    timerBox.textContent =
      String(m).padStart(2, "0") + ":" + s;
  }
}

function sendMessage() {
  const input = document.getElementById("msg");
  const messages = document.getElementById("messages");

  if (!input || !messages) return;

  const text = input.value.trim();

  if (text === "") return;

  const message = document.createElement("div");
  message.className = "msg me";
  message.textContent = text;

  messages.appendChild(message);
  input.value = "";
}

function showWallet() {
  const wallet = document.getElementById("walletBal");

  if (wallet) {
    wallet.textContent = balance.toFixed(2);
  }
}

console.log("Chat4Pesa app loaded successfully");
