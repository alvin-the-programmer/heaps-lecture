// Same implementation from part 1

class MaxHeap {
  constructor() {
    this.array = [Infinity];
  }

  insert(val) {
    const { array } = this;
    array.push(val);
    return this.siftUp(array.length - 1);
  }

  siftUp(idx) {
    const { array } = this;

    let currentVal = array[idx];
    let parentIdx = Math.floor(idx / 2);
    let parentVal = array[parentIdx];

    const frame = {
      array: array.slice(),
      currentIdx: idx
    };

    if (currentVal > parentVal) {
      [array[idx], array[parentIdx]] = [array[parentIdx], array[idx]];
      return [frame, ...this.siftUp(parentIdx)];
    } else {
      return [frame];
    }
  }
}

export default MaxHeap;
