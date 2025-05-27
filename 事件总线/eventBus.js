class EventBus {
  constructor() {
    this.events = {};
    this.maxListeners = 10; //最大监听数
  }
  //监听
  on(event, callback, options = {}) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push({
      callback,
      priority: options.priority || 0,
      once: options.once || false,
    });
    //按优先级排序
    this.events[event].sort((a, b) => b.priority - a.priority);
    return this;
  }
  //监听
  emit(event, data) {
    if (!this.events[event]) return;
    // 执行事件回调
    const listers = this.events[event];
    listers.forEach((listen) => {
      try {
        listen.callback(data);
        if (listen.once) {
          this.off(event, listers.callback);
        }
      } catch (e) {}
    });
  }
  //移除
  off(event, callback) {
    if (!this.events[event]) return;
    if (callback) {
      this.events[event] = this.events[event].filter((listener) => {
        return listener.callback !== callback;
      });
    } else {
      // 移除所有该事件的监听器
      delete this.events[event];
    }
  }
  //
  offAll() {
    this.events = {};
  }
}

const event = new EventBus();
event.on(
  "a",
  (data) => {
    console.log("1111", data);
  },
  { once: true }
);
const obj = { a: 2 };
event.emit("a", obj);
console.log(222, event.events);

// var arr = [3,2,1,5,6]
// arr.sort((a,b)=>a-b)
// console.log(arr)
