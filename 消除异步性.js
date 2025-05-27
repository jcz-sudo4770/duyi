// async function getUser() {
//   console.log("获取用户信息");
//   const res = await fetch("http://baidu.com");
//   return res;
// }

// async function a1() {
//   console.log("a1");
//   return await getUser();
// }
// async function main() {
//   console.log("main");
//   return await a1();
// }
// main();
//消除异步性
// 思路：消除fetch的等待，等待的过程抛出错误信息，等待执行完毕在继续重新执行一遍
function run(fn) {
  let oldFetch = window.fetch;
  //重写fetch
  let cache = {
    status: "", //pending,fulfilled,rejected
    value: "",
  };
  let newFetch = (...args) => {
    if (cache.status === "fulfilled") {
      return cache.value;
    } else if (cache.status === "rejected") {
      throw cache.value;
    }
    const p = oldFetch(...args)
      .then((res) => res.json())
      .then((res) => {
        debugger;
        cache.status = "fulfilled";
        cache.value = res;
      })
      .catch((err) => {
        cache.status = "rejected";
        cache.value = err;
      });
    throw p;
  };
  //修改原fetch
  window.fetch = newFetch;
  try {
    //执行
    fn();
  } catch (err) {
    console.log("错误", err);
    if (err instanceof Promise) {
      err.finally(() => {
        window.fetch = newFetch;
        fn();
        window.fetch = oldFetch;
      });
    }
  }
  //还原fetch
  window.fetch = oldFetch;
}
function getUser() {
  const res = fetch("./1.json");
  console.log("获取用户信息", res);
  return res;
}

function a1() {
  console.log("a1");
  return getUser();
}
function main() {
  console.log("main");
  const result = a1();
  console.log(result);
}
run(main);
