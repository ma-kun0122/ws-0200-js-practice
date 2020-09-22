/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  };
}
/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  const days = []
  for(let i = 0; i <= days.length; i ++){
    return days[i] = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  }
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
  for (let i = 0; i <= array.length ; i++) {
    if (num == array[i]) {
      return true;
    }
  }return false;
}

//https://qiita.com/tohda/items/782e77d420420f9f383f

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  for(let i = 0; i <= array.length; i ++ ){
  if(array.indexOf(array[i]) === array.lastIndexOf(array[i])){
    return true;
  }
  return false;}
}

//考え方：指定文字が登場する最初の場所と、最後の場所が同じなら重複なし。反対に、同じでなければ重複。ただし配列がすべておなじ場合は？

//https://pisuke-code.com/js-check-duplicated-array-values/
//length.sizeまとめ https://qiita.com/sainu/items/7d761c026563a649d046



module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate
}
