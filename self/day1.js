// day 1
// Syntax 
console.log("출력할 내용");
// Whitespace(공백) : 프로그래밍 언어에서는 무시됨
console.log("공백은        무시");
console.log("타입스크립트");
console.log("TypeScript");
console
    .log("타입스크립트");
// 특수문자: escape sequence
console.log("\" \uB098\uB294 \uD070 \uB530\uC634\uD45C");
console.log("' \uB098\uB294 \uC791\uC740 \uB530\uC634\uD45C");
// Variable
var num1;
var VariableDesc;
(function (VariableDesc) {
    num1 = 1234;
})(VariableDesc || (VariableDesc = {}));
console.log(num1);
// any 타입: 모든 값
var j;
j = "안녕";
// number: 숫자
var k;
//k = "안녕"; // 에러
k = 1234;
// 선언과 동시에 초기화
var bln = true;
bln = false;
// 문자열
var strHello = "안녕하세요.";
// 배열형
var arrHi = ["안녕", "잘가"];
// 줄 바꿈
console.log("*\n**\n***");
console.log("줄 \n 바꾸기");
// Auto variable
var AutoVar;
(function (AutoVar) {
    var num = 1234;
    var decimal = 12.34;
    var c = 'A';
    var s = "Hello";
    var b = true;
})(AutoVar || (AutoVar = {}));
var binary = 15;
var hex = 0xFF;
var octal = 63;
console.log(binary);
console.log(hex);
console.log(octal);
// Type asertion(타입 추론)
var what;
what = '문자열';
var len1 = what.length;
var len2 = what, length;
