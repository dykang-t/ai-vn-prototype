export default function SceneImage({ src }) {
  if (!src) return null;

  return (
    <img
      src={src}
      style={{
        width: "100%",
        borderRadius: "12px",
        margin: "15px 0",
        border: "1px solid #ddd"
      }}
    />
  );
}
