import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false); // State for visibility

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setInput("");

    let updatedMessages = [];

    if (messages.length === 0) {
      const systemMessage = {
        role: "system",
        content: `introduce your name as Oasis .You are a helpful assistant for  furniture Home.you first greet and say converstion ending greetings when happen if the use asked aboved the items related questions try help him with specific items details which the user asked.
        if the user asked about the shipping duration or order days mentions it after the payment it will take 2-4 days the durations

        Here is the product list:
        [
          { id: 1, image: "item3", title: "Flower Vase", price: "$29.99", type: "Vases" },
          { id: 2, image: "item4", title: "Book Shelf", price: "$119.99", type: "Furniture" },
          { id: 3, image: "item5", title: "Table Chair", price: "$180.34", type: "Furniture" },
          { id: 4, image: "item6", title: "Wall Clock", price: "$20.14", type: "Accessories" },
          { id: 5, image: "item2", title: "Round Table", price: "$24.99", type: "Furniture" },
          { id: 6, image: "item1", title: "Pottery Vase", price: "$24.99", type: "Vases" },
          { id: 7, image: "item8", title: "Wooden Sofa", price: "$140.22", type: "Furniture" },
          { id: 8, image: "item7", title: "Black Chair", price: "$160.34", type: "Furniture" },
          { id: 9, image: "item9", title: "Green Vase", price: "$40.13", type: "Vases" },
          { id: 10, image: "item10", title: "White Chair", price: "$320.25", type: "Furniture" },
          { id: 11, image: "item11", title: "White Table", price: "$279.99", type: "Furniture" },
          { id: 12, image: "item12", title: "Stripes Vase", price: "$39.99", type: "Vases" },
          { id: 13, image: "item13", title: "Wooden Clock", price: "$24.99", type: "Accessories" }
        ] 

        When the user asks “What items do you have?” or similar, return exact asked items with title, price, and type. Do summarize. Just list the exact items.`,
      };
      updatedMessages = [systemMessage, { role: "user", content: input }];
    } else {
      updatedMessages = [...messages, { role: "user", content: input }];
    }

    setMessages(updatedMessages);

    try {
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama3-70b-8192",
          messages: updatedMessages,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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", // Use env var in production!
          },
        }
      );

      const reply = response.data.choices[0].message;
      setMessages([...updatedMessages, reply]);
    } catch (error) {
      console.error("Send error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Chat button to toggle visibility */}
      <button
        onClick={() => setIsChatVisible(!isChatVisible)}
        className="fixed bottom-6 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg z-50"
      >
        {isChatVisible ? "Close Chat" : "Open Chat"}
      </button>

      {/* Chat window */}
      {isChatVisible && (
        <div className="max-w-xl mx-auto p-4 space-y-4 bg-white border rounded-lg fixed bottom-16 right-6 w-full z-40">
          <div className="h-96 overflow-y-auto border rounded-lg p-4 space-y-2 bg-white">
            {messages
              .filter((msg) => msg.role !== "system")
              .map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded ${msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"}`}
                >
                  {msg.content}
                </div>
              ))}
            {loading && <div className="text-gray-400">Typing...</div>}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded px-3 py-2"
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
