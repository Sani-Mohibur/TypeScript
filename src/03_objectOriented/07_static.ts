class Counter {
  static count: number = 0;

  static increment() {
    return (Counter.count += 1);
  }
  static decrement() {
    return (Counter.count -= 1);
  }
}

// const counter1 = new Counter();
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.increment());

// const counter2 = new Counter();
// console.log(counter2.increment());
// console.log(counter2.increment());
// console.log(counter2.increment());
// console.log(counter2.increment());
// console.log(counter2.increment());

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());
