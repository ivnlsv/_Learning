let str1 = "довод";
let str2 = "";
for (var i = str1.length - 1; i >= 0; i -= 1) {
  str2 += str1[i];
}
if (str1 === str2) {
  console.log("Слово " + str1 + " является палиндромом");
} else {
  console.log("Слово " + str1 + " не является палиндромом");
}
