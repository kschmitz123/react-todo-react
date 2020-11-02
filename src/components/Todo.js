export default function Todo({ text }) {
  return (
    <div>
      <li>{text}</li>
      <button>✅</button>
      <button>🗑</button>
    </div>
  );
}
