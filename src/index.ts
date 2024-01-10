// string
// implicit
let student = 'ella';

student = 'rasheed'

// explicit
let student2: string

student2 = 'usman'


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
// number: Return parameters(optional)

const addNum = (num1: number, num2: number, num4?:number, num3: number = 10): number => {
    if (num3) {
        console.log(num1 + num2 + num3)

        return num1 + num2 + num3
    }

    console.log(num1 + num2)
    return num1 + num2
}

addNum(1, 3)


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

integrate(1000, 'Paystack')






