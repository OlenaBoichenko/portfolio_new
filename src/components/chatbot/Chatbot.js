import { useState } from "react";
import { motion } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./Chatbot.css";


function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I am AI-bot. Ask questions about my portfolio." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => setIsOpen(true);
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);  
  const systemMessage = {
    role: "user",
    parts: [{ text: 
      "You are a friendly AI portfolio assistant for a web developer. " +
    "Answer simply, clearly and in a kind tone. " +
    "You can use emoticons 😊 and a little humor. " +
    "Your tasks: talk about projects, give advice on web development and answer questions." +
    "\n\nExamples of good answers:\n" +
    "🔹 User: What technologies do you use?\n" +
    "✨ Bot: I work on React, Redux and Node.js! These are powerful tools for creating modern websites. 🚀\n\n" +
    "🔹 User: Tell me about Recipe Finder.\n" +
    "✨ Bot: This is a cool project for finding recipes! You enter the ingredients, and I find recipes using the API. Convenient, right? 😋🍽️\n\n" +
    "Be friendly, don't write too formally. Communicate easily and interestingly!" }]
  };

  const getFriendlyResponse = (text) => {
    const friendlyPhrases = [
      "😊 Hope this helped!",
      "😉 Interesting question, ask again!",
      "😎 If you need more information, I'm here!",
      "🤖 I love answering questions! What else are you interested in?",
    ];
    const randomPhrase = friendlyPhrases[Math.floor(Math.random() * friendlyPhrases.length)];
    return text + "\n\n" + randomPhrase;
  };
  
  

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = messages.length === 1
    ? [systemMessage, { role: "user", parts: [{ text: input }] }]
    : [...messages.map(msg => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }]
      })), { role: "user", parts: [{ text: input }] }];

    setMessages(prevMessages => [...prevMessages, { role: "user", content: input }]);
    setInput("");
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
      const result = await model.generateContent({ contents: newMessages });

      const botMessage = result.response?.text() || "Error: empty response from API";
      setMessages(prevMessages => [...prevMessages, { role: "assistant", content: getFriendlyResponse(botMessage) }]);
    } catch (error) {
      console.error(error);
      setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "AI request error 😞" }]);
    }
    setLoading(false);
  };
  
  return (
    <motion.div
      className={`chat-container ${isOpen ? "open" : "closed"}`}
      initial={{ height: 50 }}
      animate={{ height: isOpen ? 450 : 50 }}
      transition={{ duration: 0.4 }}
    >
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: msg.role === "user" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={msg.role === "user" ? "message user" : "message bot"}
          >
            <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
          </motion.p>
        ))}
        {loading && <p className="loading">...</p>}
      </div>
      <div className="chat-input">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onFocus={handleFocus} 
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder="Enter your message..." />
        <button onClick={sendMessage}>▶</button>
      </div>
    </motion.div>
  );
}

export default Chatbot;
