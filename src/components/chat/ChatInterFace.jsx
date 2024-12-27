import React, { useState, useEffect, useRef } from "react";

const ChatInterFace = () => {
  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState("");
  const chatBoxRef = useRef(null);
  const token = localStorage.getItem("token");

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      const userMessage = { sender: "Me", text: newMessage };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Send the message to the API
      try {
        const response = await fetch(
          "https://personalai-backend.onrender.com/api/chat/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ message: newMessage }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          const aiMessage = { sender: "AI", text: data.message || "No response" };
          setMessages((prevMessages) => [...prevMessages, aiMessage]);
        } else {
          console.error("Failed to fetch response from the API.");
        }
      } catch (error) {
        console.error("Error while sending message:", error);
      }

      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border border-gray-300 rounded-lg">
      {/* Header */}
      <div className="bg-blue-600 rounded-t-lg text-white text-center py-3 text-lg font-bold">
        Chat with AI
      </div>

      {/* Chat Box */}
      <div
        ref={chatBoxRef}
        className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col justify-between"
      >
        {messages.length === 0 ? (
          <div className="text-gray-500 text-center">No messages yet. Start chatting!</div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xs p-3 rounded-lg text-sm ${
                msg.sender === "Me"
                  ? "bg-blue-100 self-end text-right"
                  : "bg-gray-100 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))
        )}
      </div>

      {/* Input Field */}
      <div className="flex items-center border-t border-gray-300 p-3">
        <input
          type="text"
          className="flex-1 p-2 border rounded-md text-sm outline-none"
          placeholder="Type your message here..."
          aria-label="Type your message here"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          aria-label="Send message"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterFace;
