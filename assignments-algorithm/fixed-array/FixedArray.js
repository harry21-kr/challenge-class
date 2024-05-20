class FixedArray {
  #arrayLength = 0;
  #array = [];

  constructor(arrayLength) {
    this.#arrayLength = arrayLength;
  }

  push(element) {
    for (let i = 0; i < this.#arrayLength; i++) {
      if (this.#array[i] === undefined) {
        this.#array[i] = element;
        break;
      }
    }
    console.log(this.#array);
  }

  pop() {
    let target;
    const newArr = [];
    for (let i = 0; i < this.#arrayLength; i++) {
      if (this.#array[i + 1] === undefined) {
        target = this.#array[i];
        break;
      }

      newArr[i] = this.#array[i];
    }
    this.#array = newArr;
    return target;
  }

  getLength() {
    let count = 0;
    for (let i = 0; i < this.#arrayLength; i++) {
      if (this.#array[i] === undefined) break;
      count++;
    }
    return count;
  }

  stringify() {
    let str = "";
    for (let i = 0; i < this.#arrayLength; i++) {
      if (this.#array[i] === undefined) break;

      str +=
        this.#array[i + 1] !== undefined
          ? `${this.#array[i]},`
          : `${this.#array[i]}`;
    }
    return `[${str}]`;
  }
}
