window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const width = window.innerWidth * devicePixelRatio;
  const height = window.innerHeight * devicePixelRatio;
  canvas.width = width;
  canvas.height = height;
  //随机颜色
  function randomColor() {
    const chars = "0123456789ABCDEF";
    let str = "#";
    for (let index = 0; index < 6; index++) {
      const randomIndex = Math.floor(Math.random() * 16);
      str += chars[randomIndex];
    }
    return str;
  }
  //随机字符
  function randomChar() {
    const chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_{}[]";
    return chars[Math.floor(Math.random() * chars.length)];
  }

  const fontSize = 20 * devicePixelRatio;
  //列宽
  const columnWidth = fontSize;
  const columnCount = Math.floor(width / fontSize);
  //   获取绘制上下文
  const context = canvas.getContext("2d");
  console.log(columnCount);
  const nextChars = new Array(columnCount).fill(0);
  //绘制函数
  function draw() {
    context.fillStyle = "rgba(0,0,0,0.1)";
    context.fillRect(0, 0, width, height);
    for (let index = 0; index < columnCount; index++) {
      const char = randomChar();
      context.fillStyle = randomColor();
      context.font = `${fontSize}px "ROBOTO MONO"`;
      const x = columnWidth * index;
      const y = (nextChars[index] + 1) * fontSize;
      context.fillText(char, x, y);
      if (y > height && Math.random() > 0.99) {
        nextChars[index] = 0; //到底了重新从第一行开始
      } else {
        nextChars[index]++;
      }
    }
  }
  setInterval(() => {
    draw();
  }, 50);
});
