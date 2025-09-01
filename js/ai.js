"use strict";

const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');

// Send message on Enter (but allow Shift+Enter for new lines)
chatInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

function sendMessage() {
  const message = chatInput.value;
  if (!message) return;

  // Clear welcome message if it exists
  const welcomeMessage = document.querySelector('.welcome-message');
  if (welcomeMessage) {
    welcomeMessage.remove();
  }

  // Add user message
  addMessage(message, 'user');

  // Clear input
  chatInput.value = '';
  chatInput.style.height = 'auto';

  fetch('https://api.amitdas.site/WhatsAppAI/api/?text=' + message)
    .then(res => res.text())
    .then(res => addMessage(res, 'bot'))
    .catch(err => console.log(err))
}

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;

  messageDiv.innerHTML = `
    <div class="message-avatar ${sender}-avatar">
        ${sender === 'bot' ? '🤖' : '👤'}
    </div>
    <div class="message-content ${sender}-message">
        ${convertToHTML(text)}
    </div>
  `;

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add some smooth scrolling behavior
chatMessages.style.scrollBehavior = 'smooth';

// Focus on input when page loads
window.addEventListener('load', () => {
  chatInput.focus();
});
