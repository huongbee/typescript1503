console.log('Hello ts');
let check: boolean = false;

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

enum Color { pink, red = 4, blue }
let maudo: Color = Color.red // 0
let colorName: string = Color[4] 
console.log(maudo, colorName)
