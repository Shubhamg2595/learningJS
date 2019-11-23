var mStr = "shubham Gupta is my name, Name is Shubham";
var fstr = "SHUBhamasd";
function giveStartIndexs(mainStr, subToFind) {
  let tl = mainStr.length;
  let sfl = subToFind.length;
  let res = [];
  for (let i = 0; i <= tl - sfl; i++) {
    let j;
    for (j = 0; j < sfl; j++) {
      if (mainStr[i + j].toLowerCase() !== subToFind[j].toLowerCase()) {
        break;
      }
    }
    if (j === sfl) {
      res.push(i);
      j = 0;
    }
  }
  console.log(res)
  return res;
}
function processString(mainStr, subToFind, prefix, suffix) {
  let startIndexes = giveStartIndexs(mainStr, subToFind);
  let newString = "";
  if (startIndexes.length > 0) {
    let startIndex = startIndexes.shift();
    for (let i = 0; i < mainStr.length; i++) {
      if (i === startIndex) {
        if (prefix.length > 0) {
          newString = newString + prefix;
        }
        for (let j = 0; j < subToFind.length; j++) {
          newString = newString + mainStr[i + j];
        }
        i = i + subToFind.length - 1;
        if (suffix.length > 0) {
          newString = newString + suffix;
        }
        startIndex = startIndexes.shift();
      } else {
        newString = newString + mainStr[i];
      }
    }
  } else {
    newString = mainStr;
  }
  return newString;
}
console.log(processString(mStr, fstr, '<mark>', '</mark>'));