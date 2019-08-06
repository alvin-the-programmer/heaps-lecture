// Same implementation from part 1

class MaxHeap {
  constructor() {
    this.array = [Infinity];
  }

  insert(val) {
    const { array } = this;
    array.push(val);
    this.siftUp(array.length - 1);
  }

  siftUp(idx) {
    const { array } = this;

    let currentVal = array[idx];
    let parentIdx = Math.floor(idx / 2);
    let parentVal = array[parentIdx];

    if (currentVal > parentVal) {
      [array[idx], array[parentIdx]] = [array[parentIdx], array[idx]];
      this.siftUp(parentIdx);
    }
  }
}

export default MaxHeap;
