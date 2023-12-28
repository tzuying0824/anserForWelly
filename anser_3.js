//JavaScript: 重構

function formatName(firstName = "", lastName = "") {
  return `${firstName} ${lastName}`.trim();
}

// firstName = "", lastName = "" --> 預設參數避免空值
// return `${firstName} ${lastName}` --> 回傳重組字串
// .trim() --> 避免字串前後出現空格
