// function task(count) {
//   const div = document.createElement("div");
//   div.innerText = count;
//   document.body.appendChild(div);
// }
// /**
//  *
//  * @param {Object} options 配置项，任务数量
//  */
// function process({ length }) {
//   let count = 0;
//   function _run() {
//     count++;
//     requestIdleCallback((idle) => {
//       if (idle.timeRemaining() > 0) {
//         task(count);
//       }
//       if (count < length) {
//         _run();
//       }
//     });
//   }
//   _run();
// }
// btn.addEventListener("click", () => {
//   process({ length: 300000 });
// });

let tasks = [];
function task(index) {
  const div = document.createElement("div");
  div.innerText = index;
  document.body.appendChild(div);
}
for (let index = 0; index < 30000; index++) {
  tasks.push((index) => task(index));
}
console.log(tasks);
//封装通用函数
/**
 *
 * @param {Object} options 配置项
 * @param {Function} schedule 执行函数
 */
function process(tasks, schedule) {
  let index = 0,
    length = tasks.length;
  function _run() {
    index++;
    requestIdleCallback((idle) => {
      console.log(idle.timeRemaining(), index);
      while (index < length && idle.timeRemaining()) {
        tasks[index++]();
      }
      if (index < length) _run();
    });
    // schedule((isOnGo) => {
    //   while (index < length && isOnGo()) {
    //     tasks[index++]();
    //   }
    //   if (index < tasks.length) _run();
    // });
  }
  _run();
}
process(tasks);
const schedule = (chunk) => {
  let count = 0;
  setTimeout(() => {
    chunk(() => count++ < 3);
  }, 1000);
};
// process(tasks, schedule);

function idleProcess(tasks) {
  const schedule = (chunk) => {
    requestIdleCallback((idle) => {
      chunk(() => idle.timeRemaining() > 0);
    });
  };
  process(tasks, schedule);
}

// function a(fn) {
//   const name = "11111";
//   fn(name);
// }
// a((name) => {
//   console.log(name);
// });
