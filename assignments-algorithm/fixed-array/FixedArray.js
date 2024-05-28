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

  indexOf(searchElement) {
    for (let i = 0; i < this.#index; i++) {
      if (searchElement === this.#array[i]) {
        return i;
      }

      return -1;
    }
  }

  find(predicate) {
    for (let i = 0; i < this.#index; i++) {
      if (predicate(this.#array[i])) {
        return this.#array[i];
      }
    }
    return null;
  }

  findIndex(predicate) {
    for (let i = 0; i < this.#index; i++) {
      if (predicate(this.#array[i])) {
        return i;
      }
    }
    return -1;
  }

  includes(searchElement) {
    for (let i = 0; i < this.#index; i++) {
      if (this.#array[i] === searchElement) {
        return true;
      }
    }

    return false;
  }

  forEach(callback) {
    for (let i = 0; i < this.#index; i++) {
      callback(this.#array[i]);
    }
  }

  filter(predicate) {
    const newArr = new FixedArray(this.#index);
    for (let i = 0; i < this.#index; i++) {
      if (predicate(this.#array[i])) {
        newArr.push(this.#array[i]);
      }
    }
    return newArr;
  }

  map(callback) {
    const newArr = new FixedArray(this.#index);
    for (let i = 0; i < this.#index; i++) {
      newArr.push(callback(this.#array[i]));
    }
    return newArr;
  }

  reduce(callback, initValue) {
    let newValue = initValue;
    for (let i = 0; i < this.#index; i++) {
      newValue = callback(newValue, this.#array[i]);
    }
    return newValue;
  }
}
