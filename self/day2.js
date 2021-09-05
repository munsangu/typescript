// day 2 
// 숫자 데이터 형식: number 키워드로 숫자 데이터 지정 후 정수 또는 실수 저장
var NumberNote;
(function (NumberNote) {
    // [1] 숫자 형식의 변수 선언 및 초기화
    var age = 21; // 정수
    var PI = 3.1415922714; // 실수
    // [2] 문자열을 다시 대입하려고 하면 에러 발생
    // age = 'abc';
    // [3] 사용
    console.log("\uB098\uC774 : " + age);
    console.log("PI : " + PI);
})(NumberNote || (NumberNote = {}));
// 숫자 구분자 
var rich = 9999999999999;
console.log(rich); // 9999999999999
// 문자 데이터 형식: string 
var StringKeyword;
(function (StringKeyword) {
    var name = 'IRONMAN';
    var urAge = 100;
    console.log("Hello? " + name + " U r " + urAge + " years old.");
})(StringKeyword || (StringKeyword = {}));
// multilaineString 
// 백틱(` `)을 활용하여 여러 줄 문자 저장하기
var multiLine = "\n\uC548\uB155\uD558\uC138\uC694\n\uAC10\uC0AC\uD574\uC694\n\uC798 \uC788\uC5B4\uC694\n\uB2E4\uC2DC \uB9CC\uB098\uC694\n";
console.log(multiLine);
// escape sequence
// 백 슬래시 다음에 나오는 문자 하나는 escape 문자로 봄
// 1. \n: 줄바꿈
console.log("Hello \n Peter?");
// 2. \t: tap만큼 들여쓰기 (4칸 정도의 사이즈)
console.log("Hello \t Peter?");
// 3. \r : 캐리지 리턴, 줄 맨 앞으로 이동
console.log("Hello Peter?\r");
// 4. \' : 작은 따옴표 문자 하나를 표현
console.log("Hello 'Peter'?");
// 5. \" : 큰 따옴표 문자 하나를 표현
console.log("Hello \"Peter\"?");
// 6.\\: 백 슬래시 
console.log("Hello \\Peter\\?");
// 상수와 변수 (변하지 않는 값 vs 변하는 값)
var leader = "IRONMAN";
// leader = "Thor"  에러
var member = "Hurk";
member = "Hurk, Thor";
console.log("Avengers's leader is " + leader + ", memebers is " + member);
// [?] 논리 자료형: true, false
var isTrue = true;
var isFalse = false;
if (5 > 3) {
    console.log("5 > 3 : " + isTrue);
}
;
if (5 < 3) {
    console.log("5 < 3 : " + isTrue);
}
else {
    console.log("5 < 3 : " + isFalse);
}
;
// 객체, 개체, 오브젝트, 클래스, 인스턴스
var dateNow = new Date(); // Date 클래스의 생성자
console.log("the Time is " + dateNow);
// Variable example
// 데이터 형식을 갖는 변수
var n = 1234;
var boolean = true;
var s = 'IRONMAN';
var any;
any = 1234;
any = true;
any = 'Assemble';
// 데이터 형식을 갖는 상수
var PI2 = 3.14;
// 데이터 형식을 갖는 배열
var arr = [1, 2, 3];
var all = [1234, true, 'Hurk', "", null, undefined];
// 경고 대화 상장: window.alert()
// <window.alert(" 경고!")>
// alert("경고!")
// 확인 대화 상자: window.confirm()
// <let result = window.confirm("확인 또는 취소")>
// let result = confirm("확인 또는 취소")
// console.log(result) // true(확인), false(취소)
// 입력 대화 상자: window.prompt()
// <let input = window.prompt("여기에 입력하시오.")>
// let input = prompt("여기에 입력하시오" ,"여기") // prompt("안내 문구", "초기 입력값")
// console.log(input)
// let personNam = prompt("What's UR name?", "write at here");
// let oldAge = prompt("Write UR age", )
// alert(`Name: ${personNam}, Age: ${oldAge}`)
// console.log(`Name: ${personNam}, Age: ${oldAge}`)
// 플러스(+) 기호로 숫자 모양의 문자열을 숫자 형식으로 변경 가능
var nums = "1234";
console.log(typeof nums); // string
console.log(typeof +nums); // number
console.log(nums + nums); // '12341234'
console.log(+nums + +nums); // 2468
console.log(Number(nums)); // 1234
// 형식 변환
var typeConversion;
(function (typeConversion) {
    var s = "12.34";
    var n1 = parseInt(s);
    console.log("n1 => " + n1 + " : " + typeof n1); // n1 => 12 : number
    var n2 = parseFloat(s);
    console.log("n2 => " + n2 + " : " + typeof n2); // n2 => 12.34 : number
    var n3 = +s;
    console.log("n3 => " + n3 + " : " + typeof n3); // n3 => 12.34 : number
})(typeConversion || (typeConversion = {}));
// For of
var colors = ['red', 'green', 'blue'];
// Ver. Javascript
for (var index in colors) {
    console.log(colors[index]);
}
console.log("");
// Ver. Typescript
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color);
}
