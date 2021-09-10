// break
var goal = 3;
var result = "";
for (var i = 0; i < 100; i++) {
    if (i === goal) {
        break;
    }
    result += "IRONMAN \n";
}
console.log(result);
// continue
// 1부터 100까지 정수 중 7의 배수를 제외한 수 들의 합계
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        continue;
    }
    sum += i;
}
console.log(sum);
// Array (배열) : 동일한 데이터 형식을 갖는 데이터들의 집합체(하나의 이름으로 같은 데이터 형식을 여러 개 보관해 놓은 그릇)
// Implied Type
var arr = [1, 2, 3];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
var a = arr[0], b = arr[1], c = arr[2];
console.log(a);
console.log(b);
console.log(c);
var _a = ["string", 1234, true], d = _a[0], e = _a[1], f = _a[2];
console.log(d);
console.log(e);
console.log(f);
var colors = ["red", "orange", "tomato"];
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
// Array Class를 사용하여 배열 만들기
var array1 = new Array(); // []
var array2 = new Array(2); // array2.length === 3
var array3 = new Array(1, 2); // [1, 2]
console.log(array1); // []
console.log(array2); // [empty × 2]
console.log(array3); // [1, 2]
// 오름 차순 정렬: array.sort(), 배열을 역순으로 변환: array.reverse()
var ArraySort;
(function (ArraySort) {
    var array4 = [3, 2, 1, 5, 4];
    var sortedArray = array4.sort();
    console.log(sortedArray);
    for (var _i = 0, sortedArray_1 = sortedArray; _i < sortedArray_1.length; _i++) {
        var i = sortedArray_1[_i];
        console.log(i);
    }
    array4.reverse();
    for (var _a = 0, array4_1 = array4; _a < array4_1.length; _a++) {
        var i = array4_1[_a];
        console.log(i);
    }
})(ArraySort || (ArraySort = {}));
; // Function(함수): 재사용을 목적으로 만들어진 특정 작업을 수행하는 코드 블록(반복해서 사용하도록 만들어진 하나 이상의 문장을 포함하는 코드 블록)
var FunctionDemo;
(function (FunctionDemo) {
    function show() {
        console.log("I'm Ironman");
    }
    show();
})(FunctionDemo || (FunctionDemo = {}));
var f1 = function (msg) {
    console.log(msg);
};
var f2 = function (msg) { return console.log(msg); };
f1("U r man?");
f2("U r girl?");
function printInfo(name, age) {
    if (age === void 0) { age = 20; }
    var email = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        email[_i - 2] = arguments[_i];
    }
    console.log(name + " is " + age + " years old. my email is " + email);
}
;
printInfo("Hurk", 500, "hurk@marvel.com", "brus@marvel.com", "DrHurk@universe.com");
// Math 
// 1. 수학 관련 상수
console.log(Math.E); // 2.718281828459045...
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
var LiterType;
(function (LiterType) {
    var language;
    //language = "test"; Error
    language = "TypeScript";
    console.log(language);
    var languages;
    languages = "C#";
    console.log(languages);
    var version;
    version = 4;
    console.log(language + " - " + version);
})(LiterType || (LiterType = {}));
// 공용 구조체 형식(Union Type)
var UnionType;
(function (UnionType) {
    var twoTypes;
    twoTypes = "공용 구조체 형식";
    console.log(twoTypes);
    twoTypes = 1234;
    console.log(twoTypes);
    // twoTypes = true; error
})(UnionType || (UnionType = {}));
// 형식 별칭(Type Aliase)
var TypeAliase;
(function (TypeAliase) {
    // let ts:  techType = "Javascript"; error
    var ts = "Typescript";
    console.log(ts);
    // let pt: PrimitiveType = new Date() error
    var pt = Date.now();
    console.log(pt);
})(TypeAliase || (TypeAliase = {}));
// ConsoleColor : 열거형으로 콘솔의 전경색 및 배경색 표현하기
var ConsoleColorDemo;
(function (ConsoleColorDemo) {
    var ConsoleColor;
    (function (ConsoleColor) {
        ConsoleColor[ConsoleColor["Red"] = 0] = "Red";
        ConsoleColor[ConsoleColor["Green"] = 1] = "Green";
        ConsoleColor[ConsoleColor["Blue"] = 2] = "Blue";
    })(ConsoleColor || (ConsoleColor = {}));
    var red = ConsoleColor.Red;
    var green = ConsoleColor.Green;
    var blue = ConsoleColor.Blue;
    console.log(ConsoleColor.Red); // 0
    console.log(red); // 0
    console.log(ConsoleColor.Green); // 1
    console.log(green); // 1
    console.log(ConsoleColor.Blue); // 2
    console.log(blue); // 2
})(ConsoleColorDemo || (ConsoleColorDemo = {}));
function compute(op, a, b) {
    switch (op) {
        case 0 /* ADD */:
            console.log(a + b);
            break;
        case 3 /* SUB */:
            console.log(a - b);
            break;
        case 2 /* MUL */:
            console.log(a * b);
            break;
        case 1 /* DIV */:
            console.log(a / b);
            break;
        default:
            break;
    }
}
compute(0 /* ADD */, 3, 5);
compute(3 /* SUB */, 3, 5);
compute(2 /* MUL */, 3, 5);
compute(1 /* DIV */, 3, 5);
// 정규식으로 문자 찾기
var src = "How are you?";
var regex = /how/;
console.log(regex.test(src)); // false
regex = /How/;
console.log(regex.test(src)); // true
regex = /how/i; // / /i -> 대소문자 구분 없이 검색
console.log(regex.test(src)); // true
// 문자 관련 함수
var StringFunction;
(function (StringFunction) {
    var msg = "Hello, World!";
    console.log(msg.toUpperCase()); // 대문자로 변환
    console.log(msg.toLowerCase()); // 소문자로 변환
    console.log(msg.replace("Hello", "こんにちは").replace("World", "世界"));
    // 메소드 체이닝
})(StringFunction || (StringFunction = {}));
// 문자열 모두 바꾸기
var origins = "안녕하세요. 안녕하세요";
console.log(origins.replace("안녕", "HI")); // HI하세요. 안녕하세요
console.log(origins.replace(/안녕/, "HI")); // HI하세요. 안녕하세요
console.log(origins.replace(/안녕/g, "HI")); // HI하세요. HI하세요
// 정규식 /문자/() ()안에는 i, m, g 조합으로 들어갈 수 있음
// i - 대소문자 구분 x , m - 여러줄에 적용,  g - 해당 문자가 있는 전체
// 문자열 연결: 더하기 연산자, String.concat()
var s1 = "대한" + "민국";
console.log(s1); // 대한민국
var s2 = "대한".concat("민국");
console.log(s2); // 대한민국
// 제네릭(Generics) Array<T> = Array of T(ype) : 재사용 가능한 컴포넌트를 생성하는 도구상자
// 다양한 타입에서 작동하는 컴포넌트를 작성 가능
function identity(arg) {
    return arg;
}
