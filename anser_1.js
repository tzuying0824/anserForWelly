//JavaScript: 字串反轉

function reverseString(str) {
  return str.split("").reverse().join("");
}
//.split("") --> ["h", "e", "l", "l", "o"]
//.reverse() --> ["o", "l", "l", "e", "h"]
//.join("") --> "olleH"
console.log(reverseString("Hello")); // 預期輸出: "olleH”
