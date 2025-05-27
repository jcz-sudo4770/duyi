function abstractRange(name) {
  let tasks = [
    () => {
      console.log(name + "is notified");
    },
  ];
  function wait(time) {
    tasks.push(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, time);
        })
    );
    return this;
  }
  function dosome(action) {
    tasks.push(() => {
      console.log("Start to " + action);
    });
    console.log();
    return this;
  }
  function waitFirst(time) {
    tasks.unshift(() => {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    });
    return this;
  }
  function excute() {
    (async () => {
      for (let task of tasks) {
        await task();
      }
    })();
  }
  return {
    wait,
    do: dosome,
    waitFirst,
    excute,
  };
}

//链式调用，每个都要返回this，保证链式调用
abstractRange("william").wait(5).do("commit").waitFirst(3).excute();
//等待3秒
//william is notified
//等待5秒
//Start to commit
