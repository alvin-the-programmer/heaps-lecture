class MaxHeap {
    constructor() {
        this.array = [ Infinity ];
    }

    insert(val) {
        const { array } = this;
        array.push(val);
        this.siftUp(array.length - 1);
    }

    siftUp(idx) {
        // check if the val at this idx, is bigger than it's parent
        //      if it is, swap em
        //      if its not, don't swap em
        const { array } = this;

        let currentVal = array[idx];
        let parentIdx = Math.floor(idx / 2);
        let parentVal = array[parentIdx];

        if (currentVal > parentVal) {
            [ currentVal, parentVal ] = [ parentVal, currentVal ];
            this.siftUp(parentIdx);
        }

    }
}


const h = new MaxHeap();
h.insert(10);
h.insert(20);
h.insert(15);
h.insert(13);
h.insert(100);
h.insert(4);
console.log(h.array);
