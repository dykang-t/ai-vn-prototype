import { useState } from "react";
import { generateSceneText } from "../lib/llm";
import { generateSceneImage } from "../lib/imageGen";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((m) => [...m, userMessage]);

    // 1) 텍스트 생성
    const sceneText = await generateSceneText(input);

    // 2) 이미지 생성
    const sceneImage = await generateSceneImage(sceneText);

    const botMessage = {
      role: "bot",
      text: sceneText,
      image: sceneImage,
    };

    setMessages((m) => [...m, botMessage]);
    setInput("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1>AI 비주얼 노벨 MVP</h1>

      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
        />
        <button onClick={handleSend} style={{ padding: "10px 20px" }}>
          전송
        </button>
      </div>

      <div>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ddd",
            }}
          >
            <p><b>{msg.role === "user" ? "You" : "AI"}:</b> {msg.text}</p>

            {msg.image && (
              <img
                src={msg.image}
                alt="generated scene"
                style={{ width: "100%", marginTop: "10px", borderRadius: "8px" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
