//React: 組件
import { useState } from "react";

export default function Ans5() {
  const [n, setN] = useState(0);
  return (
    <div className="counter">
      <h2>React: 組件</h2>
      <div className="number">{n}</div>
      <button className="btn" onClick={() => setN((n) => n - 1)}>
        -
      </button>
      <button className="btn" onClick={() => setN((n) => n + 1)}>
        +
      </button>
    </div>
  );
}
