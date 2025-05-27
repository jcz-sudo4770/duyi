function zhiyinzi(num) {
  let arr = [];
  console.log(num);
  function findZi(num) {
    if (num % 2 === 0) {
      arr.push(2);
    }
    for (let i = 3; i * i <= num; i + 2) {
      while (num % i === 0) {
        arr.push(i);
        num = num / i;
      }
    }
    if (num > 2) {
      arr.push(num);
    }
  }
  //   findZi(num)
  console.log(arr.join("\n"));
}
zhiyinzi(180);
