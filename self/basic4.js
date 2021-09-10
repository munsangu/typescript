// array.filter(function)
var numbers = [1, 2, 3, 4, 5];
var result = numbers.filter(function (n) { return n % 2 === 0; });
console.log(result); // [2, 4]
function f1() {
    return "Hello World!";
}
function f2(str) {
    return str;
}
// f2(1234) error
f2("I'm IRONMAN");
document.title = "Typescript Basic";
function add(friend) {
    var name = friend.name;
}
add({ name: "red", favoriteColor: "blue" });
// Object vs Class
// Object
var todo1 = { id: undefined, title: undefined, isDone: undefined };
console.log(todo1.id + " - " + todo1.title + " - " + todo1.isDone);
// Class
// 1. 클래스 선언
// export class TodoClass {
//   id;
//   title;
//   isDone;
// }
// 2. 클래스의 인스턴스 생성 -> 설계도인 Class로부터 Object 하나 생성
// const todo2 = new TodoClass();
// console.log(`${todo2.id} - ${todo2.title} - ${todo2.isDone}`)
// Object literal
var ObjectLiteral;
(function (ObjectLiteral) {
    var square = {
        side: 10,
        area: function () {
            return this.side * this.side;
        }
    };
    console.log("\uC815\uC0AC\uAC01\uD615 \uB113\uC774 : " + square.area());
})(ObjectLiteral || (ObjectLiteral = {}));
var DevLec;
(function (DevLec) {
    var _name = "DevLec";
    DevLec.Url = "http://devlec.com";
    function GetKoreanName() {
        return _name;
    }
    DevLec.GetKoreanName = GetKoreanName;
})(DevLec || (DevLec = {}));
console.log(DevLec.Url);
console.log("<br>");
console.log(DevLec.GetKoreanName());
// 지역 변수와 전역 변수
var LocalAndGlobal;
(function (LocalAndGlobal) {
    var VariableScope = /** @class */ (function () {
        function VariableScope() {
            this.globalVariable = "전역 변수";
        }
        VariableScope.prototype.render = function () {
            var localVariable = "지역 변수";
            console.log(localVariable);
            console.log(this.globalVariable);
            this.test();
        };
        VariableScope.prototype.test = function () {
            console.log(this.globalVariable);
        };
        return VariableScope;
    }());
    var t = new VariableScope();
    t.render();
})(LocalAndGlobal || (LocalAndGlobal = {}));
// fieldinitializer 
var FieldInitializer;
(function (FieldInitializer) {
    var Say = /** @class */ (function () {
        function Say() {
            // [1] 필드(멤버 변수)
            this.msg = "Hello"; // fieldinitializer
        }
        // [2] 메서드
        Say.prototype.hi = function () {
            this.msg = "nice to meet you.";
            console.log(this.msg);
        };
        return Say;
    }());
    var say = new Say();
    //say.msg = "See you later" // [3] private 멤버 변수에 접근하면 에러 발생
    say.hi();
})(FieldInitializer || (FieldInitializer = {}));
// ConstrutorPrivate
var ConstrutorPrivate;
(function (ConstrutorPrivate) {
    var nameCard = /** @class */ (function () {
        // 생성자에서 값을 받아서 자동으로 private name 필드를 생성
        function nameCard(name) {
            this.name = name;
        }
        nameCard.prototype.display = function () {
            return "\uC774\uB984 : " + this.name;
        };
        return nameCard;
    }());
    var my = new nameCard("Tony");
    console.log(my.display());
})(ConstrutorPrivate || (ConstrutorPrivate = {}));
// constructorPublic
var ConstructorPublic;
(function (ConstructorPublic) {
    var nameCard = /** @class */ (function () {
        function nameCard(name) {
            this.name = name;
        }
        nameCard.prototype.display = function () {
            console.log("\uC774\uB984 : " + this.name);
        };
        return nameCard;
    }());
    var my = new nameCard("Tony");
    my.name = "Dr.strange";
    my.display();
})(ConstructorPublic || (ConstructorPublic = {}));
// greeterclass 
var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.gerGreeter = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
}());
var greeter = new Greeter("Hello");
document.body.innerHTML = greeter.gerGreeter();
