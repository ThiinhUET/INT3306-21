export class Event {
  constructor () {
    this.listener = [];
  }

  addListener(fun) {
    this.listener.push(fun);
  }

  trigger(params) {
    this.listener.forEach(fn => {
      fn(params);
    })
  }
}