let arrValues = [];
let obj = {
  some: "some",
  dom: "text",
  arr: [1, 2, 3, 4, 5],
  tom: "there",
};
for (let key in obj) {
  if (Array.isArray(obj[key])) {
    arrValues = arrValues.concat(obj[key]);
  } else {
    arrValues.push(obj[key]);
  }
}
console.log(arrValues);