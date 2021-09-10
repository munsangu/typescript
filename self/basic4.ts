// array.filter(function)
let numbers = [1, 2, 3, 4, 5];

let result = numbers.filter(n => n % 2 ===0)

console.log(result) // [2, 4]

function f1() {
  return "Hello World!"
  
}

function f2(str: string) {
  return str
}

// f2(1234) error
f2("I'm IRONMAN")

document.title = "Typescript Basic"

interface Friend {
  name: string;
  favoriteColor?: string;
}

function add(friend: Friend) {
  let name = friend.name;
}

add({name : "red", favoriteColor: "blue"})

// Object vs Class
// Object
const todo1 = {id: undefined, title: undefined, isDone:undefined};
console.log(`${todo1.id} - ${todo1.title} - ${todo1.isDone}`)

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
module ObjectLiteral {
  let square = {
    side: 10,
    area: function() {
      return this.side * this.side;
    }
  }
  console.log(`정사각형 넓이 : ${square.area()}`);
}

namespace DevLec {
  let _name = "DevLec";
  export let Url = "http://devlec.com"
  export function GetKoreanName() {
    return _name;
  }
}

console.log(DevLec.Url);
console.log("<br>");
console.log(DevLec.GetKoreanName());

// 지역 변수와 전역 변수
namespace LocalAndGlobal {
  class VariableScope {
    globalVariable : string = "전역 변수";

    render() : void {
      let localVariable: string = "지역 변수";
      console.log(localVariable);
      console.log(this.globalVariable);
      this.test();
    }

    test(): void {
      console.log(this.globalVariable);
    }
  }
  const t = new VariableScope();
  t.render();
}

// fieldinitializer 
namespace FieldInitializer {
  class Say {
    // [1] 필드(멤버 변수)
    private msg: string = "Hello" // fieldinitializer

    // [2] 메서드
    public hi(): void {
      this.msg = "nice to meet you."
      console.log(this.msg);
    }
  }

  const say = new Say();
  //say.msg = "See you later" // [3] private 멤버 변수에 접근하면 에러 발생
  say.hi();
}

// ConstrutorPrivate
module ConstrutorPrivate {
  class nameCard {
    // 생성자에서 값을 받아서 자동으로 private name 필드를 생성
    constructor (private name: string) {

    }

    display() {
      return `이름 : ${this.name}`;
    }
  }

  let my = new nameCard(`Tony`);
  console.log(my.display());
}

// constructorPublic
module ConstructorPublic {
  class nameCard {
    constructor(public name: string) {

    }
    display() {
      console.log(`이름 : ${this.name}`);
    }
  }
  let my = new nameCard(`Tony`);
  my.name = "Dr.strange";
  my.display();
}

// greeterclass 
class Greeter {
  constructor(public greeting: string) {}
    gerGreeter() {
      return "<h1>" + this.greeting + "</h1>";
    }
}

let greeter = new Greeter("Hello");
document.body.innerHTML = greeter.gerGreeter();