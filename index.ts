console.log('Started Typescript compile')


//Check variable type

console.log('1. VARIABLE TYPES')
const var1 = 'Dionei'
const var2 = 100
const var3 = true
const var4 = { nome: 'dionei' }
const var5 = [1, 2, 3, 4, 5]

console.log('var1 => ', typeof var1)
console.log('var2 => ', typeof var2)
console.log('var3 => ', typeof var3)
console.log('var4 => ', typeof var4)
console.log('var5 => ', typeof var5)


console.log('2. Creating an interface')

interface Person {
  name: string
  age: number
}

const person: Person = {
  name: 'Dionei',
  age: 34
}

console.log('Person', person)
console.log('Type of person', typeof person)



