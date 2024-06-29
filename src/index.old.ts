// string
// implicit
let student = 'ella';

student = 'rasheed'

// explicit
// let student2: string

// student2 = 'usman'


// number
let age = 10

age = 20

let age2: number 
age2 = 30


// boolean
let isStudent = true

let isStudent2: boolean
isStudent2 = false

// arrays
let names = ['ella', 'rasheed', 'olatunji'];
names.push('usman')


let names2: string[] = [];

names2.push('joshua')
names2.push('feranmi')

let names3 = []


let ages: number[] = []
ages = [10, 18, 30]

// mixed types
let mixedTypes = [18, 'feranmi', true]
mixedTypes.push(29)
mixedTypes.push('emmanuel')
mixedTypes.push(false)

// union types
let unionTypes: (number | string | boolean)[] = []
unionTypes.push(29)
unionTypes.push('emmanuel')
unionTypes.push(false)

// any types
let anyTypes: any[] = []
anyTypes.push(29)
anyTypes.push('emmanuel')
anyTypes.push(false)


// functions
// num1: Typed parameters
// num2: Typed parameters
// num3: Optional parameters
// num4: Default parameters
// number: Return Type(optional)

const addNum = (num1: number, num2: number, num4?:number, num3: number = 10): number => {
    if (num3) {
        console.log(num1 + num2 + num3)

        return num1 + num2 + num3
    }

    console.log(num1 + num2)
    return num1 + num2
}

// addNum(1, 3)


// Type Alias
type provider = 'Paystack' | 'Flutterwave'

const integrate = (amount: number, provider: provider = 'Paystack') => {
    if (provider === 'Paystack') {
        console.log('Paystack')
        return
    }

    if (provider === 'Flutterwave') {
        console.log('Flutterwave')
        return
    }
}

// integrate(1000, 'Paystack')

class Person {
    protected cgpa: number;

    constructor(public name: string, public age: number, public isStudent: boolean, readonly courses: string[]) {
        this.cgpa = 0;
    }

    // constructor(
    //     public name: string, 
    //     public age: number, 
    //     public isStudent: boolean, 
    //     public courses: string[], 
    // ) {
    //    this.cgpa = 0;
    // }

    // make public
    getCGPA() {
        // manipulate data
        return this.cgpa
    }

    setCGPA(cgpa: number) {
        this.cgpa = cgpa
    }

    calculateCGPA() {

    }
}

class Student extends Person {
    public level: number;
    constructor(name: string, age: number, isStudent: boolean, courses: string[], level: number, cgpa: number) {
        super(name, age, isStudent, courses)
        this.level = level;
    }

    getCGPA(): number {
        return this.cgpa
    }
}

const person1 = new Person('Ella', 10, true, ['Maths', 'English'])
const person2 = new Person('Rasheed', 20, false, ['Maths', 'English'])

const persons: Person[] = [];
persons.push(person1);
persons.push(person2)

const student1 = new Student('Feranmi', 10, true, ['Maths', 'English'], 300, 4.5)
const student2 = new Student('Joshua', 20, false, ['Maths', 'English'], 400, 4.9)

student1.name = 'Emmanuel'
// student1.courses = ['Maths', 'English', 'Physics']
// console.log(student1.courses)


interface InterfaceSquare {
    length?: number;
    calculateArea: () => number;
}

// const square: InterfaceSquare = {
//     length: 10
// }

// const createSquare = (options: InterfaceSquare) => {
//     return options.length * options.length;
// }

// createSquare({ length: 10 })


class Square implements InterfaceSquare {
    constructor(public length: number) {}

    calculateArea() {
        return this.length * this.length
    }

    getLength() {
        return this.length
    }

    getPerimeter() {
        return this.length * 4
    }
}

class Rectangle implements InterfaceSquare{
    constructor(public length: number, public breadth: number) {}

    calculateArea() {
        return this.length * this.breadth
    }
}

const square1 = new Square(10)
const square2 = new Square(20)
const rectangle1 = new Rectangle(10, 20)
const rectangle2 = new Rectangle(20, 30)


const shapes: InterfaceSquare[] = []

shapes.push(square1)
shapes.push(rectangle1)


interface IAnimal {
    name: string;
    age: number;
    makeSound?: () => void;
    increaseAge?: () => void;
}

class Dog implements IAnimal {
    constructor(public name: string, public age: number) {}

    makeSound() {
        console.log('Woof')
    }

    increaseAge() {
        this.age += 1
    }

    bark() {
        console.log('Bark')
    }

    bite() {
        console.log('Bite')
    }
}

class Cat {
    constructor(public name: string, public age: number) {}

    makeSound() {
        console.log('Meow')
    }

    increaseAge() {
        this.age += 1
    }

    scratch() {
        console.log('Scratch')
    }
}

const dog1 = new Dog('Rex', 10)
const dog2 = new Dog('Max', 20)
const cat1 = new Cat('Kitty', 10)

const animals: IAnimal[] = []
animals.push(dog1)
animals.push(dog2)
animals.push(cat1)


// const createAnimal = (animal: IAnimal) => {
//     return new Dog(animal.name, animal.age)
// }

// const dog3 = createAnimal({ 
//     name: 'Rex', 
//     age: 10, 
//  })


// generics

const createAnimal = <IAnimal>(animal: IAnimal) => {
    return animal;
}

createAnimal<Dog>(dog1)
createAnimal<Cat>(cat1)
// // createAnimal<boolean, number>(true, 10)
// createAnimal<Dog, Cat>(dog1, cat1)







// static methods
// Reduces the number of instances of a class 



// person1.cgpa = 4.9

// person1.setCGPA(4.9)
// console.log({ cgpa: person1.getCGPA() })
// console.log(persons)


// // classes
// class Vehicle {
//     protected brand: string;
//     constructor(brand: string) {
//         this.brand = brand;
//     }
// }

// class Car extends Vehicle {
//     displayBrand() {
//         console.log(`The brand of this car is ${this.brand}`);
//     }
// }




// // interfaces

// interface IPerson  {
//     name: string;
//     address: string;
//     isStudent: boolean;
//     courses: string[];
// }



// generics

const getName = <dataType>(name: dataType): dataType => {
    
    return name
}

// getName<string>('Ella')
// getName<number>(10)
// getName<boolean>(true)
// getName<object>({name: 'Ella'})

// getName<IPerson>({ name: 'Ella', address: 'Lagos', isStudent: true, courses: ['Maths', 'English']})

// interface IStudent extends IPerson {
//     level: number;
//     cgpa: number;
// }




// class Person implements IPerson {
//     private cgpa: number
//     constructor(public name: string, public address: string, public isStudent: boolean, public courses: string[], ) 
//     { 
//         this.cgpa = 0
//     }

//     // make public
//     getCGPA() {
//         return this.cgpa
//     }
// }

// const createPerson = <T extends IPerson>(person: T): Person => {

//     const _person = new Person(person.name, person.address, person.isStudent, person.courses)
    
//     return _person
// }

// createPerson<IStudent>({ name: 'Ella', address: 'Lagos', isStudent: true, courses: ['Maths', 'English'], level: 300, cgpa: 4.5 })
// createPerson<IPerson>({  name: 'Ella', address: 'Lagos', isStudent: true, courses: ['Maths', 'English'] })



// Enums
enum Color {
    Red, // 0
    Green, // 1
    Blue, // 2
}

// console.log(Color.Red) // 0
// console.log(Color.Green) // 1
// console.log(Color.Blue) // 2

enum Color2 {
    Red = 1,
    Green, // 2
    Blue, // 3
}

// console.log(Color2.Red) // 1
// console.log(Color2.Green) // 2
// console.log(Color2.Blue) // 3


enum Color3 {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE',
}

// console.log(Color3.Red) // RED
// console.log(Color3.Green) // GREEN
// console.log(Color3.Blue) // BLUE

// enum Color4 {
//     Red = 'RED',
//     Green = 2,
//     Blue = 3,
// }

// console.log(Color4.Red) // RED
// console.log(Color4.Green) // 2
// console.log(Color4.Blue) // 4


// Tuple
let y: any[] = ['hi', 10, true, 'hello']
y = [10, 'hello', false, 10]
y[0] = 'hello'

// // position and type matters and can be mixed with any type and can be updated

let x: [string, number, boolean, string];
// x = ["hello", 10]; // OK

// x = [10, "hello"]; // Error

