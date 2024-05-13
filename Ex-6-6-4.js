const x = "x";
const o = "o";
const xoArray = [];
const xyArray = [];
let index = 0;
let str = "";
for (let i = 1; i <= 9; i += 1) {
  if (i % 2 == 0) {
    xoArray.push(o);
  } else {
    xoArray.push(x);
  }
}
for (let i = 1; i <= 3; i += 1) {
  xyArray[i] = [];
  for (let j = 1; j <= 3; j += 1) {
    xyArray[i][j] = xoArray[index];
    index += 1;
  }
}
for (let i = 1; i < xyArray.length; i += 1) {
  for (let j = 1; j < xyArray[i].length; j += 1) {
    str += `${xyArray[i][j]} `;
  }
  str += "\n";
}
console.log(str);