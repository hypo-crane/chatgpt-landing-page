
/* Select the HTML elements */
const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const goSearch = document.getElementById("goSearch");

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

/* Show or hide the search field */
searchBtn.addEventListener("click", function () {
    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {
        searchInput.focus();
    }
});

/* Simple search interaction */
goSearch.addEventListener("click", function () {
    const query = searchInput.value.trim();

    if (query === "") {
        alert("Please enter something to search.");
    } else {
        alert("You searched for: " + query);
    }
});

/* Show or hide the mobile navigation */
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

chatForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const message = chatInput.value.trim();
  if (!message) return;

  const userMessage = document.createElement("p");
  userMessage.textContent = "You: " + message;
  chatMessages.appendChild(userMessage);

  chatInput.value = "";

  const botMessage = document.createElement("p");
  botMessage.textContent = "Bot: Thinking...";
  chatMessages.appendChild(botMessage);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }

    botMessage.textContent = "Bot: " + data.reply;
  } catch (error) {
    botMessage.textContent =
      "Bot: Could not connect. Please check that your server is running.";
    console.error(error);
  }
});