import { useState } from "react";
import ChatBubble from "../components/ChatBubble";
import SceneImage from "../components/SceneImage";
import { generateScenePrompt } from "../lib/llm";
import { generateSceneImage } from "../lib/imageGen";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [sceneSrc, setSceneSrc] = useState(null);
  const [input, setInput] = useState("");

  async function handleSend() {
    if (!input) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const scenePrompt = await generateScenePrompt(input);
    const imgUrl = await generateSceneImage(scenePrompt);

    setSceneSrc(imgUrl);

    const aiMessage = {
      sender: "ai",
      text: "장면을 생성했어. 어떤가요?"
    };

    setMessages((prev) => [...prev, aiMessage]);
    setInput("");
  }

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>AI 비주얼 노벨 MVP</h1>

      <SceneImage src={sceneSrc} />

      {messages.map((msg, i) => (
        <ChatBubble key={i} sender={msg.sender} text={msg.text} />
      ))}

      <div style={{ display: "flex", marginTop: "20px" }}>
        <input
          style={{ flex: 1, padding: "10px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <button onClick={handleSend} style={{ padding: "10px 20px" }}>
          전송
        </button>
      </div>
    </div>
  );
}
