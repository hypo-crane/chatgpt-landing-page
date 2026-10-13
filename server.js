const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.post("/api/chat", (req, res) => {
  const message = req.body.message;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Please enter a message." });
  }

  res.json({
    reply: `Thanks for your message! You said: "${message}". Your chatbot backend is connected.`
  });
});

app.listen(PORT, () => {
  console.log(`Chatbot running at http://localhost:${PORT}`);
});