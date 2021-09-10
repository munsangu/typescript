// break
let goal = 3;
let result = "";

for(let i = 0 ; i < 100; i++) {
  if(i === goal) {
    break;
  }
  result +="IRONMAN \n";
}
console.log(result);

// continue
// 1부터 100까지 정수 중 7의 배수를 제외한 수 들의 합계
let sum = 0;
for(let i = 1 ; i <= 100 ; i++) {
  if(i % 7 === 0) {
    continue;
  }
  sum += i;
}
console.log(sum);

// Array (배열) : 동일한 데이터 형식을 갖는 데이터들의 집합체(하나의 이름으로 같은 데이터 형식을 여러 개 보관해 놓은 그릇)
// Implied Type
let arr = [1, 2, 3];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

let [a, b, c] = arr;

console.log(a);
console.log(b);
console.log(c);

let [d, e, f] = ["string", 1234, true];

console.log(d);
console.log(e);
console.log(f);

let colors:string[] = ["red", "orange", "tomato"]
for(let i = 0 ; i < colors.length ; i++) {
  console.log(colors[i]);
}

// Array Class를 사용하여 배열 만들기
let array1 = new Array(); // []
let array2 = new Array(2) // array2.length === 3
let array3 = new Array(1, 2) // [1, 2]

console.log(array1) // []
console.log(array2) // [empty × 2]
console.log(array3) // [1, 2]

// 오름 차순 정렬: array.sort(), 배열을 역순으로 변환: array.reverse()
namespace ArraySort {
  let array4 = [3, 2, 1, 5, 4];
  let sortedArray = array4.sort();
  console.log(sortedArray);
  for(let i of sortedArray) {
    console.log(i)
  }

  array4.reverse();
  for(let i of array4) {
    console.log(i)
  }
}


;// Function(함수): 재사용을 목적으로 만들어진 특정 작업을 수행하는 코드 블록(반복해서 사용하도록 만들어진 하나 이상의 문장을 포함하는 코드 블록)
namespace FunctionDemo {
  function show() {
    console.log(`I'm Ironman`);
  }
  show();
}

let f1 = function(msg) {
  console.log(msg);
}

let f2 = (msg) => console.log(msg);

f1("U r man?")
f2("U r girl?")

function printInfo(name: string, age: number = 20, ...email: string[]) {
  console.log(`${name} is ${age} years old. my email is ${email}`);
};

printInfo("Hurk", 500, "hurk@marvel.com", "brus@marvel.com", "DrHurk@universe.com");

// Math 
// 1. 수학 관련 상수
console.log(Math.E);  // 2.718281828459045...
console.log(Math.PI); // 3.141592653589793...
// 2. 절대값
console.log(Math.abs(-10)); // 10
// 3. 최대값, 최소값
console.log(Math.max(3, 5, 7, -1)); // 7 
console.log(Math.min(3, 5, 7, -1)); // -1
// 4. 거듭제곱
console.log(Math.pow(2, 10)); // 1024
// 5. 반올림
console.log(Math.round(0.9)); // 1
console.log(Math.round(0.4)); // 0
// 6. 올림, 내림
console.log(Math.ceil(0.1)); // 1
console.log(Math.floor(0.9)); // 0
// 7. 기타
console.log(Math.random());

// Literal Type
namespace LiterType {
  let language: "TypeScript";
  //language = "test"; Error
  language = "TypeScript";
  console.log(language);

  let languages : "Typescript" | "C#";
  languages = "C#";
  console.log(languages);

  let version: 4 | 8;
  version = 4;
  console.log(`${language} - ${version}`);
}

// 공용 구조체 형식(Union Type)
namespace UnionType {
  let twoTypes: string | number;
  
  twoTypes = "공용 구조체 형식";
  console.log(twoTypes);

  twoTypes = 1234;
  console.log(twoTypes);

  // twoTypes = true; error
}

// 형식 별칭(Type Aliase)
namespace TypeAliase {
  type techType = "Typescript" | "C#" | "ASP.NET Core"; // 리터럴 형식
  // let ts:  techType = "Javascript"; error
  let ts: techType = "Typescript";
  console.log(ts);

  type PrimitiveType = string | number | boolean; // 공용 구조체 형식
  // let pt: PrimitiveType = new Date() error
  let pt: PrimitiveType = Date.now();
  console.log(pt)
}

// ConsoleColor : 열거형으로 콘솔의 전경색 및 배경색 표현하기
namespace ConsoleColorDemo {
  enum ConsoleColor {  // enum 변수명 {변수1, 변수2, 변수3} -> 열거형 변수 선언
    Red,
    Green,
    Blue
  }


  let red = ConsoleColor.Red;
  let green = ConsoleColor.Green
  let blue = ConsoleColor.Blue;

  console.log(ConsoleColor.Red)   // 0
  console.log(red)                // 0
  console.log(ConsoleColor.Green) // 1
  console.log(green)              // 1
  console.log(ConsoleColor.Blue)  // 2
  console.log(blue)               // 2
}

const enum Operator {
  ADD,
  DIV,
  MUL,
  SUB,
}

function compute(op: Operator, a: number, b: number) {
  switch(op) {
    case Operator.ADD:
      console.log(a + b);
      break;
    case Operator.SUB:
      console.log(a - b);
      break;
    case Operator.MUL:
      console.log(a * b);
      break;
    case Operator.DIV:
      console.log(a / b);
      break;
    default:
      break;
  }
}

compute(Operator.ADD, 3, 5); 
compute(Operator.SUB, 3, 5);
compute(Operator.MUL, 3, 5);
compute(Operator.DIV, 3, 5);

// 정규식으로 문자 찾기
let src = "How are you?";
let regex = /how/;
console.log(regex.test(src)); // false
regex = /How/;
console.log(regex.test(src)); // true
regex = /how/i  // / /i -> 대소문자 구분 없이 검색
console.log(regex.test(src))  // true

// 문자 관련 함수
namespace StringFunction {
  let msg: string = "Hello, World!";

  console.log(msg.toUpperCase()) // 대문자로 변환
  console.log(msg.toLowerCase()) // 소문자로 변환

  console.log(msg.replace("Hello", "こんにちは").replace("World", "世界")); 
  // 메소드 체이닝
}

// 문자열 모두 바꾸기
const origins = "안녕하세요. 안녕하세요"
console.log(origins.replace("안녕", "HI"));  // HI하세요. 안녕하세요
console.log(origins.replace(/안녕/, "HI"));  // HI하세요. 안녕하세요
console.log(origins.replace(/안녕/g, "HI")); // HI하세요. HI하세요
// 정규식 /문자/() ()안에는 i, m, g 조합으로 들어갈 수 있음
// i - 대소문자 구분 x , m - 여러줄에 적용,  g - 해당 문자가 있는 전체

// 문자열 연결: 더하기 연산자, String.concat()

let s1 = "대한" + "민국";
console.log(s1);  // 대한민국
let s2 = "대한".concat("민국");
console.log(s2);  // 대한민국

// 제네릭(Generics) Array<T> = Array of T(ype) : 재사용 가능한 컴포넌트를 생성하는 도구상자
// 다양한 타입에서 작동하는 컴포넌트를 작성 가능
function identity<T>(arg: T): T {
  return arg;
}







