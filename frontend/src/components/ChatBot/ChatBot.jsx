import React, { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    // Using the exact script provided by the user
    const script = document.createElement("script");
    script.src = "https://cdn.resolveai.co/ri.js";
    script.id = "resolve-ai-chat-widget";
    script.setAttribute("chatbot-id", "clzu71wdh06rhmc0r9i2skvhf");
    script.defer = true;

    // Add script to the document
    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatBot;
