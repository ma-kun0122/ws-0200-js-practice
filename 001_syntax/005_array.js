/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  const numbers=array;
  numbers.forEach((array)=>{
    console.log(array);}
);
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
  const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  for(let i=0; i<=days.length; i++){
    return days[i];
  }
}
//テスト結果、引数0の時、「Monday」ではなく「M」のみ返却

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
  return array.includes(num);
}

//参考URL https://techacademy.jp/magazine/22267


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
  const st=new Set(array);
  return st.size !=array.length;
}

//https://pisuke-code.com/js-check-duplicated-array-values/
//length.sizeまとめ https://qiita.com/sainu/items/7d761c026563a649d046



module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate
}
