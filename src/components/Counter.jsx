import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center justify-center gap-3 p-5">
      <button
        className="bg-red-500 px-4 py-2 text-white rounded-3xl"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
      <p className="text-2xl font-bold">{count}</p>
      <button
        className="bg-red-500 px-4 py-2 text-white rounded-3xl"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}

export default Counter;
