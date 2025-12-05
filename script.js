const API_URL = "### YOUR_NGROK_URL ###";

async function sendMessage() {
    const box = document.getElementById("chat-box");
    const input = document.getElementById("user-input");
    const msg = input.value.trim();
    if (!msg) return;

    box.innerHTML += `<div class="message user"><b>YOU:</b> ${msg}</div>`;
    input.value = "";

    let response = await fetch(API_URL + "/chat", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: msg})
    });

    let data = await response.json();

    box.innerHTML += `<div class="message bot"><b>ARCANA:</b> ${data.text}</div>`;

    if (data.image) {
        box.innerHTML += `<img src="${data.image}">`;
    }

    box.scrollTop = box.scrollHeight;
}