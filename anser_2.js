//JavaScript: 陣列過濾

function filterNumbersGreaterThanFive(numbers) {
  return numbers.filter((n) => n > 5);
}
// 使用 .filter((n) => n > 5) 回傳>5的值
const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]
