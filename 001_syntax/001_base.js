/**
 *  1.1 Hello Worldという文字を出力するメソッドを定義してください
 *
 */
function helloWorld() {
  console.log("Hello World");
}

helloWorld();


/**
 *  1.2 const を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
const hoge=function displayConst() {
  console.log("hoge");
};

hoge();

/**
 *  1.3 let を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
let hoge=function displayLet() {
  console.log("hoge");
};
hoge();

/**
 *  1.4 引数に渡した変数を表示するメソッドを実装してください
 *
 */

function displayArgument(arg) {
  console.log(arg);
}
displayArgument("Hello");

/**
 *  1.5 渡された二つの引数の合計を返却するメソッドを実装してください
 *
 */
function sumTwoArgs(a, b) {
  return a+b
}
const result=sumTwoArgs(2,3)
console.log(result);

/**
 *  1.6 渡された二つの引数の差を返却するメソッドを実装してください
 *
 */
function subtractTwoArgs(a, b) {
  return a-b
}
const result=subtractTwoArgs(2, 3);
console.log(result);


/**
 *  1.7 渡された二つの引数の商を返却するメソッドを実装してください。0での割り算はnullを返却してください。
 *
 */
function quotientTwoArgs(a, b) {
  return a/b
}
const result=quotientTwoArgs(4, 2);
console.log(result);

/**
 *  1.8 渡された二つの引数の積を返却するメソッドを実装してください
 *
 */
function productTwoArgs(a, b) {
  return a*b
}
const result=productTwoArgs(2, 3);
console.log(result);

/**
 *  1.9 渡された引数の2で割ったあまりを返却するメソッドを実装してください
 *
 */
function remainderTwoArgs(a) {
  return a%2
}
const result=remainderTwoArgs(9);
console.log(result);

/**
 *  1.10 渡された引数が2の倍数であることを確認するメソッドを実装してください
 *
 */
function isEven(a) {
  if(a%2===0){
    console.log("2の倍数です");
  }else{
    console.log("2の倍数ではありません");
}
isEven(8);
//結果だめでした

/**
 *  1.11 渡された二つの文字列を連結するメソッドを実装してください
 *
 */
function concatString(a, b) {
  console.log(a+b);
}
concatString("私は","26歳です"); 

module.exports = {
  helloWorld,
  displayConst,
  displayLet,
  displayArgument,
  sumTwoArgs,
  subtractTwoArgs,
  quotientTwoArgs,
  productTwoArgs,
  remainderTwoArgs,
  isEven,
  concatString
}
