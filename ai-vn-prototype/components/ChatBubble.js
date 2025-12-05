export default function ChatBubble({ sender, text }) {
  return (
    <div style={{
      margin: "10px 0",
      textAlign: sender === "user" ? "right" : "left"
    }}>
      <div style={{
        display: "inline-block",
        padding: "10px 15px",
        backgroundColor: sender === "user" ? "#d1eaff" : "#ffe4f0",
        borderRadius: "10px"
      }}>
        {text}
      </div>
    </div>
  );
}
