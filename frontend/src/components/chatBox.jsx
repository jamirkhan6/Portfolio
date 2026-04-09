import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! 👋 How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom when new message added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: input }]);

    try {
      // Call backend
      const res = await axios.post("https://portfolio-dnj4.onrender.com/chat",
        {
          message: input,
        }
      );

      console.log("backend response : "+ res.data)

      // Add bot response
      setMessages((prev) => [...prev, { type: "bot", text: res.data.result }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Sorry, something went wrong." },
      ]);
    }

    setInput("");
  };

  // Send on Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {!open && (
        <button
          onClick={() => setOpen(!open)}
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-xl hover:scale-105 transition duration-300"
        >
          💬
        </button>
      )}

      {open && (
        <div className="w-95 h-125 mt-3 rounded-3xl backdrop-blur-lg bg-[#314445]/80 border border-white/10 shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 flex justify-between items-center bg-[#314445]/90 border-b border-white/10">
            <h2 className="text-white font-semibold">AI Assistant of Jamir</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-red-400 text-lg"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-white text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 rounded-2xl w-fit max-w-[75%] shadow ${
                  msg.type === "bot"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-black ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent border border-white/10 text-white px-4 py-2 rounded-full outline-none placeholder-gray-300"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button
              onClick={sendMessage}
              className="bg-blue-600 px-4 py-2 rounded-full text-white hover:bg-blue-700 transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
