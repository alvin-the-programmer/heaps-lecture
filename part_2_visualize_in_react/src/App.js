import React from "react";

import MaxHeap from "./maxHeap";
import HeapGraph from "./HeapGraph";

const style = {
  height: "80vh"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.heap = new MaxHeap();

    this.state = {
      value: "",
      array: [Infinity, "this", "is", "an", "example", "lol!"]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.heap.insert(Number(this.state.value));
    this.setState({
      value: "",
      array: this.heap.array.slice()
    });
  }

  render() {
    const { array, value } = this.state;

    const indices = this.state.array.map((_, i) => <td key={i}>{i}</td>);
    const elements = this.state.array.map((el, i) => (
      <td key={i}>{String(el)}</td>
    ));

    return (
      <div className="App" style={style}>
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Heap_(data_structure)"
        >
          Heap (Data Structure) Wikipedia
        </a>

        <h2> Max Heap Visualizer </h2>

        <form onSubmit={this.handleSubmit}>
          <label>Enter a number to insert:</label>
          <input type="text" onChange={this.handleChange} value={value} />
        </form>

        <h3> Array Representation: </h3>
        <table border="1">
          <tbody>
            <tr>{indices}</tr>
            <tr>{elements}</tr>
          </tbody>
        </table>

        <h3> Tree Representation: </h3>
        <HeapGraph array={array} />
      </div>
    );
  }
}

export default App;
