const people = [
  { name: "A", age: 12, sex: "female" },
  { name: "B", age: 22, sex: "male" },
  { name: "C", age: 32, sex: "female" },
  { name: "D", age: 42, sex: "female" },
  { name: "E", age: 52, sex: "male" },
  { name: "F", age: 12, sex: "female" },
  { name: "G", age: 22, sex: "female" },
  { name: "H", age: 42, sex: "female" },
];

/**\
 * list数据
 * condition分组条件,函数或者字符串
 */
function group(list, condition) {
  if (typeof condition === "string") {
    let key = condition;
    condition = (item) => item[key];
  }
  const result = {};
  for (let l of list) {
    const curCondition = condition(l);
    if (!curCondition) break;
    if (!result[curCondition]) result[curCondition] = [];
    result[curCondition].push(l);
  }
  return result;
}
console.log(group(people, "sex"));
console.log(group(people, "age"));
console.log(group(people, (item) => (item.age > 30 ? ">30" : "<=30")));

const str = "1111";
console.log(typeof str);

var arr = [1,2,3,4,4,3,2]
function findSingleElement(arr) {
  let result = 0;
  for (let num of arr) {
    // 使用异或运算找出孤立元素
    result ^= num; 
  }
  return result;
}