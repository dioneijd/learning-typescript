console.log('Started Typescript compile')


// 1. Check variable type

console.log('1')
console.log('VARIABLE TYPES')
const var1 = 'Dionei'
const var2 = 100
const var3 = true
const var4 = { nome: 'dionei' }
const var5 = [1, 2, 3, 4, 5]

console.log('var1 =>', typeof var1)
console.log('var2 =>', typeof var2)
console.log('var3 =>', typeof var3)
console.log('var4 =>', typeof var4)
console.log('var5 =>', typeof var5)


// 2. Creating an interface
console.log('2')
console.log('CREATING AN INTERFACE')

interface Person {
  firstName: string
  lastName: string
  age: number
}

const person: Person = {
  firstName: 'Dionei',
  lastName: 'Delagnolo',
  age: 34
}

console.log('Person', person)
console.log('Type of person', typeof person)

// 3. Typing Functions
console.log('3')
console.log('TYPING FUNCTIONS')


function getUserFullName(person: Person): string {
  return person.firstName + ' ' + person.lastName
}

const fullName = getUserFullName(person)

console.log('type of person object is', typeof person, 'and value is', person)
console.log('return of function getUserFullName:', fullName)

// 4. Composing Types (UNION)
console.log('4')
console.log('COMPOSING TYPES (UNION)')

type Gender = 'Male' | 'Female'

const personGender: Gender = "Male"

console.log('Type of personGender is', typeof personGender, 'and value is', personGender)


//5. Function receive different parameters
console.log('5')
console.log('FUNCTION RECEIVING DIFFERENT PARAMETERS')

type FuncParameter = string | string[]

console.log('Type FuncParameter accepts a single string or an array of strings')

function showValue(value: FuncParameter){
  let arr: Array<string> = []
  
  if (typeof value == 'string'){
    arr.push(value)
  } else {
    arr = value
  }

  arr.forEach(stringElement => {
    console.log('>>>', stringElement)
  })
}

console.log('Calling function passing single value')
showValue('Dionei')

console.log('Calling function passing values in an array')
showValue(['Dionei', 'Manu', 'Charlei'])



