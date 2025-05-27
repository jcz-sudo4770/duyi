function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换元素位置
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 示例使用
// let randomArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
/**
 * i = 0 j = 0 0 1
 *       j = 1 1 2
 *       j = 2 2 3
 *       j = 3 3 4
 *       ...len - 1 - i
 *  最右侧的值一定是最大的
 */
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      //每次都把最大的值放到最右侧
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  let result = "";
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== arr[index + 1]) {
      result += `${arr[index]}\n`;
    }
  }
  return result;
}
let randomArray = [25, 19, 91, 32, 6, 86, 54, 103, 58, 45, 102];
let sortedArray = bubbleSort(randomArray);
console.log(sortedArray);

var str = "abc";
str = str.padEnd(8, "000");
console.log(str);

var str = "0";
str = str.repeat(3);
console.log(str);

var str = "abc";
str = str.slice(0, 1) + "\n";
console.log(str);

var str = "dhhdfgu";
var str1 = str.substring(0, 2);
console.log(str, str1);

/**
 * 满二叉树
 * 1  1
 * 2  2
 * 3  4
 * 4  8
 * depth
 *
 *            A
 *      B           C
 *   D     E     F     G
 *
 *  depth=2: 1 + 2 = 3
 *  depth=3: 1 + 2 + 4
 *
 *  非叶子节点Math.pow(2,depth)-1
 *
 *  顶层 1
 *  第二层 Math.pow(2,2-1)
 *  第三层 Math.pow(2,2-1)
 *    ...
 *    n层  Math.pow(2,n-1)
 *  n层 1+2+3+...+n-1
 *
 */
var n = 294;
const node = Math.pow(2, n - 1) - 2;
console.log(node);

BigInt();
