import React, { useState, useRef } from "react";

import MaxHeap from "./maxHeap";
import ArrayTable from "./ArrayTable";
import HeapGraph from "./HeapGraph";
import InsertionInput from "./InsertionInput";
import { queuedThrottle } from "./util";

const style = {
  height: "80vh"
};

const App = props => {
  const [value, setValue] = useState("");
  const [frame, setFrame] = useState({
    array: [Infinity, "this", "is", "an", "example", "lol!"],
    currentIdx: null
  });

  const { current: throttledSetFrame } = useRef(queuedThrottle(setFrame, 600));
  const { current: heap } = useRef(new MaxHeap());

  const handleChange = e => setValue(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    setValue("");
    const frames = heap.insert(Number(value));
    frames.forEach(frame => {
      throttledSetFrame(frame);
    });
  };

  return (
    <div className="App" style={style}>
      <h2> Max Heap Visualizer </h2>
      <InsertionInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
      />

      <h3> Array Representation: </h3>
      <ArrayTable array={frame.array} />

      <h3> Tree Representation: </h3>
      <HeapGraph array={frame.array} highlight={frame.currentIdx} />
    </div>
  );
};

export default App;
