// Trova gli elementi nel DOM
const messagesDiv = document.getElementById('messages'); // Dove mostreremo i messaggi
const usernameInput = document.getElementById('username'); // Input del nome
const messageInput = document.getElementById('message'); // Input del commento
const sendButton = document.getElementById('send'); // Bottone per inviare

// Una lista per memorizzare i messaggi
const messageList = [];

// Funzione per aggiornare la chat
function updateChat() {
    // Pulisce la chat e aggiunge tutti i messaggi salvati
    messagesDiv.innerHTML = messageList
        .map(msg => `<p><strong>${msg.user}:</strong> ${msg.text}</p>`)
        .join('');
    // Scorri automaticamente verso il basso
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Aggiungi un evento quando l'utente clicca su "Invia"
sendButton.addEventListener('click', () => {
    const user = usernameInput.value.trim(); // Legge il nome
    const text = messageInput.value.trim(); // Legge il commento

    if (user && text) {
        // Aggiunge il nuovo messaggio alla lista
        messageList.push({ user, text });
        // Aggiorna la chat
        updateChat();
        // Pulisce il campo messaggio
        messageInput.value = '';
    } else {
        alert("Inserisci sia il nome che il commento!"); // Controllo: non invia messaggi vuoti
    }
});
