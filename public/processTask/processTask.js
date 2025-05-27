/**
 *
 * @param  {...any} tasks 任务列表
 * @returns
 */
function processTask(tasks) {
  const result = [];
  let running = false;
  let index = 0;
  return {
    async start() {
      if (running) return;
      running = true;
      while (index < tasks.length) {
        const task = tasks[index];
        console.log(index);
        const r = await task();
        index++;
        result.push(r);
        if (!running) {
          return;
        }
      }
      running = false;
      return result;
    },
    pause() {
      running = false;
    },
  };
}
