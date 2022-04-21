import React, { useState } from "react";

export default function App() {
  const [times, setTimes] = useState(0);
  return (
    <div>
      <h1>Count {times}</h1>
      <button onClick={() => setTimes((times) => times + 1)}>ADD</button>
    </div>
  );
}
