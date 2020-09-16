
/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch (array, target) {
  let index= -1;
  for(let i=0; i <array.length; i++){
    if(target=== array[i]){
      return target;}
  }
}

//誤り
//http://exrecord.net/program-linear-and-binary-of-search-algorithm-with-javascript



/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch (array, target) {

}

//https://qiita.com/may88seiji/items/189002cb497e61578114


module.exports = {
  linearSearch,
  binarySearch
}
