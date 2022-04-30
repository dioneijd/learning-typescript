"use strict";
console.log('Started Typescript compile');
// 1. Check variable type
console.log('1. VARIABLE TYPES');
const var1 = 'Dionei';
const var2 = 100;
const var3 = true;
const var4 = { nome: 'dionei' };
const var5 = [1, 2, 3, 4, 5];
console.log('var1 =>', typeof var1);
console.log('var2 =>', typeof var2);
console.log('var3 =>', typeof var3);
console.log('var4 =>', typeof var4);
console.log('var5 =>', typeof var5);
// 2. Creating an interface
console.log('2. Creating an interface');
const person = {
    firstName: 'Dionei',
    lastName: 'Delagnolo',
    age: 34
};
console.log('Person', person);
console.log('Type of person', typeof person);
// 3. Typing Functions
console.log('3. Typing Functions');
function getUserFullName(person) {
    return person.firstName + ' ' + person.lastName;
}
const fullName = getUserFullName(person);
console.log('type of person object:', typeof person, '| value:', person);
console.log('return of function getUserFullName: ', fullName);
