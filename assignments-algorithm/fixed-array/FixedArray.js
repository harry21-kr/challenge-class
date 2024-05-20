class FixedArray {
  #arrayLength = 0;
  #array = [];
  #index = 0;

  constructor(arrayLength) {
    this.#arrayLength = arrayLength;
    for (let i = 0; i < arrayLength; i++) {
      this.#array[i] = undefined;
    }
  }

  push(element) {
    if (this.#index >= this.#arrayLength) {
      throw new Error("배열 최대 크기 초과");
    }
    this.#array[this.#index] = element;
    this.#index++;
  }

  pop() {
    const target = this.#array[this.#index - 1];
    if (target === undefined) {
      throw new Error("삭제할 요소 없음");
    }
    this.#array[this.#index - 1] = undefined;
    this.#index--;
    return target;
  }

  getLength() {
    return this.#index;
  }

  stringify() {
    let str = "";
    for (let i = 0; i < this.#index; i++) {
      str +=
        this.#array[i + 1] !== undefined
          ? `${this.#array[i]},`
          : `${this.#array[i]}`;
    }
    return `[${str}]`;
  }
}
