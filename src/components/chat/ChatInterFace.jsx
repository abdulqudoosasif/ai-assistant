import React, { useState, useEffect, useRef } from "react";

const ChatInterFace = () => {
  const [messages, setMessages] = useState([
    { sender: "AI", text: "Hi Abdul!" },
    {
      sender: "AI",
      text: "I am pleased to announce that on this beautiful magical day of the Fall Equinox...",
    },
    {
      sender: "AI",
      text: "we have released the first version of the chat-ui-kit-react library",
    },
    { sender: "AI", text: "Yes I am :)" },
    { sender: "AI", text: "Thank You" },
    { sender: "Me", text: "Hi, what's up?" },
    { sender: "Me", text: "That's great news!" },
    { sender: "Me", text: "You must be very excited" },
    { sender: "Me", text: "I am so proud of your team :)" },
    { sender: "Me", text: "Good luck with your new product!" },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const chatBoxRef = useRef(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { sender: "Me", text: newMessage }]);
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
