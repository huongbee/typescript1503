console.log('Hello ts');
var check = false;
// let arrNumber: number[] = [];
// let arrNumber: (number | string )[] = [];
// arrNumber.push( 1, 'x');
// console.log(arrNumber)
// let arrNumber: Array<number> = [];
// let arrNumber: Array<number | string> = []
// arrNumber.push( 1, 'x' );
// function identity<T>(arg: T): T {
//     return arg;
// }
// identity('1')
// class Person{
//     constructor(public name: string, public age: number){
//         this.name = name;
//         this.age = age;
//     }
// }
// const nam = new Person('Nam', 22);
// let teo: any;
// teo.name
var Color;
(function (Color) {
    Color[Color["pink"] = 0] = "pink";
    Color[Color["red"] = 4] = "red";
    Color[Color["blue"] = 5] = "blue";
})(Color || (Color = {}));
var maudo = Color.red; // 0
var colorName = Color[4];
console.log(maudo, colorName);
