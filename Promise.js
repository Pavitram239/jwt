class Promise {
  constructor(cb) {
    cb(this.#resolve, this.#reject);
  }

  #resolve(value) {}

  #reject(value) {}

  then(cb) {
    this.#resolve()
  }
}
