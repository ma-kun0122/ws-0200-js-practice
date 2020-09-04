/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  for(let number=1;number<=10; number++){
    console.log(number);
  }
}
printOneToTen();

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */

function printOneToTenDesc() {
  for(let number=10;number>=1;number--){
    console.log(number);
  }
}
printOneToTenDesc();

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile() {
  let number=1
  while(number<=10){
    console.log(number);
    number++;
  }
}
printOneToTenWhile();

/**
 *  3.4 while文を使って0~10までの数字を大きい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhileDesc() {
  let number=10
  while(number>=1){
    console.log(number);
    number--;
  }
}
printOneToTenWhileDesc();

module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc
}
