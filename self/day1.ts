// day 1

// Syntax 
console.log("출력할 내용")

// Whitespace(공백) : 프로그래밍 언어에서는 무시됨
console.log("공백은        무시")
console.log("타입스크립트");
console.    log( "TypeScript" ) ;
console
    .log(
        "타입스크립트")
;

// 특수문자: escape sequence
console.log(`\" 나는 큰 따옴표`)
console.log(`\' 나는 작은 따옴표`)

// Variable
let num1;

namespace VariableDesc {
  num1 = 1234;
}

console.log(num1);

// any 타입: 모든 값
let j: any;
j = "안녕";

// number: 숫자
let k: number;
//k = "안녕"; // 에러
k = 1234;

// 선언과 동시에 초기화
let bln: boolean = true;
bln = false;

// 문자열
let strHello: string = "안녕하세요.";

// 배열형
let arrHi: string[] = ["안녕", "잘가"];

// 줄 바꿈
console.log("*\n**\n***")
console.log("줄 \n 바꾸기")

// Auto variable
module AutoVar {
  let num = 1234;
  let decimal = 12.34;
  let c = 'A';
  let s = "Hello";
  let b = true;
}

let binary = 0b1111;
let hex = 0xFF;
let octal = 0o77;

console.log(binary);
console.log(hex);
console.log(octal);

// Type asertion(타입 추론)
let what;
what = '문자열'

let len1 = (<string>what).length;
let len2 = (what as string).length;


