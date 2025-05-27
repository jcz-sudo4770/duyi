window.onload = function () {
  let span = document.querySelector(".number");
  let from = span.innerText * 1;
  const start = new Date().getTime();
  function animation(from, to, duration) {
    const speed = (to - from) / duration;
    function _run() {
      const time = new Date().getTime() - start;
      console.log(time);
      let v = from + speed * time;
      if (time > duration) {
        v = to;
        span.innerText = v;
        return;
      }
      span.innerText = v.toFixed(2);
      requestAnimationFrame(_run);
    }
    _run();
  }
  animation(from, 0, 10000);
};
