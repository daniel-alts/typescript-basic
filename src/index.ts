import ts from "typescript";

const newName: string = 'adetula';
const number: number = 10;
let bool: boolean = true;
const arr: number[] = [1, 2, 3, 4, 5];
const arr2: Array<string> = ['adetula', 'zion', 'talut'];
const obj: { name: string, age: number } = { name: 'adetula', age: 10 };

const neverValue:  never | unknown = 'hello'; 


const arrayOfNames = [1, 2, true, 'adetula', 'talut']

const arrayOfNames2: (string | number)[] = [1, 2, 'adetula', 'talut'] // union type

arrayOfNames2.push('zion')


let newName2: string | number = 'adetula';
newName2 = 10;

const arrayOfNames3: any[] = [1, 2, 'adetula', 'talut'] // any type

let newName3: any = 'adetula';
newName3 = {}

type AdetulaType = string | number; // type alias

let newName4: AdetulaType = 'adetula';
newName4 = 10;

// js
// function add(num1, num2) {
//     return num1 + num2;
// }

//
function add2(num1: number, num2: number): number {
    return num1 + num2;
}

function sayHello(): void {
    console.log('Hello');
}

function add3(num1: number, num2: number, num3: number = 10): number {
    return num1 + num2 + num3;
}

const addedNumbers: number = add3(10, 10, 5) 


// classes, interfaces, enums, generics

// access modifiers: public, private, protected, readonly





// class Student extends Person {
//     // protected profession: string;
//     constructor(name: string, age: number) {
//         super(name, age);
//         // this.profession = 'Student';
//     }

//     sayHello(): void {
//         console.log('Hello, I am a student');
//     }

// }

// const student = new Student('loveday', 9);

// what is interface?
// 

interface IPerson {
    name: string
    age: number
    profession: string
    sayHello: () => void
    getAge: () => number
    setAge: (age: number) => void
}


interface IStudent {
    name: string
    age: number
    profession: string
    sayHello: () => void
    getAge: () => number
}

class Person implements IPerson {
    public profession: string;

    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
        this.profession = 'Software Engineer';
    }

    public sayHello(): void {
        console.log('Hello');
    }

    public getAge() {
        return this.age;
    }


    public setAge(age: number) {
        this.age = age + 1;
    } 
}

class Student extends Person implements IStudent {
    public profession: string;

    constructor(public name: string, public age: number) {
        super(name, age)
        this.profession = 'student'
    }

    public sayHello() {
        console.log("hi, I'm a student saying hello!")
    };

    public getAge() {
        console.log('getting my age for you')
        return this.age;
    }
}



// interface as a variable type
interface IShape {
    length: number
    height: number
    width?: number
}
const shape: IShape = { length: 10, height: 10 }


// interface as a function parameter

const createShape = (options: IShape): IShape => {
    return { length: options.length, height: options.height }
}


// interface as an array type

const shapes: IShape[] = []

shapes.push({ height: 10, length: 10, width: 10 })

for (const shape of shapes) {
    if (shape.width) {
        const area = shape.height * shape.length * shape.width
    }
}


// optional parameters of interfaces


// Enum

enum Color {
    Red, // 0
    Green, // 1
    Blue, // 2
}

enum Color2 {
    Red = 1,
    Green =  2,
    Blue =  3
}

enum Color3 {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE',
}

Color3.Red
Color3.Green

enum OrderStatusEnum {
    pending = 'order_pending',
    accepted = 'accepted_order',
    delivered = 'delivered_order'
}


// Generics
const createObject = (value1: string, value2: number) => {
    return [value1, value2]
}

const createObjectGenerics = <S, N>(value1: S, value2: N) => {
    return [value1, value2]
}

createObjectGenerics<string, string>('daniel', 'ella')
createObjectGenerics<string, number>('daniel', 10)
createObjectGenerics<number, number>(10, 10)


