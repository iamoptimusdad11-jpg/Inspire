import { useState } from "react";

export default function Chatbot() { const [open, setOpen] = useState(false); const [messages, setMessages] = useState([ { from: "bot", text: "Hello! I'm here to help whenever you need me." } ]); const [input, setInput] = useState("");

const sendMessage = () => { if (!input.trim()) return;

const userMsg = { from: "user", text: input };
const botReply = {
  from: "bot",
  text: "Thank you for your message. I'm here to support you — how else can I help?"
};

setMessages([...messages, userMsg, botReply]);
setInput("");

};

return ( <div> {!open && ( <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg" > Chat </button> )}

{open && (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <div className="bg-orange-500 text-white p-3 flex justify-between items-center">
        <span className="font-semibold">Inspire Chatbot</span>
        <button onClick={() => setOpen(false)}>✕</button>
      </div>

      <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-orange-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={
              msg.from === "bot"
                ? "bg-white p-2 rounded-lg shadow max-w-[80%]"
                : "bg-orange-200 p-2 rounded-lg shadow self-end max-w-[80%]"
            }
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-3 bg-white flex gap-2 border-t">
        <input
          className="flex-1 border rounded-lg p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-orange-500 text-white px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  )}
</div>

); }
