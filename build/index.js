"use strict";
console.log('Started Typescript compile');
// 1. Check variable type
console.log('1');
console.log('VARIABLE TYPES');
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
console.log('2');
console.log('CREATING AN INTERFACE');
const person = {
    firstName: 'Dionei',
    lastName: 'Delagnolo',
    age: 34
};
console.log('Person', person);
console.log('Type of person', typeof person);
// 3. Typing Functions
console.log('3');
console.log('TYPING FUNCTIONS');
function getUserFullName(person) {
    return person.firstName + ' ' + person.lastName;
}
const fullName = getUserFullName(person);
console.log('type of person object is', typeof person, 'and value is', person);
console.log('return of function getUserFullName:', fullName);
// 4. Composing Types (UNION)
console.log('4');
console.log('COMPOSING TYPES (UNION)');
const personGender = "Male";
console.log('Type of personGender is', typeof personGender, 'and value is', personGender);
//5. Function receive different parameters
console.log('5');
console.log('FUNCTION RECEIVING DIFFERENT PARAMETERS');
console.log('Type FuncParameter accepts a single string or an array of strings');
function showValue(value) {
    let arr = [];
    if (typeof value == 'string') {
        arr.push(value);
    }
    else {
        arr = value;
    }
    arr.forEach(stringElement => {
        console.log('>>>', stringElement);
    });
}
console.log('Calling function passing single value');
showValue('Dionei');
console.log('Calling function passing values in an array');
showValue(['Dionei', 'Manu', 'Charlei']);
//6. Typing in an array
console.log('6');
console.log('TYPING IN AN ARRAY');
const arrStrings = ['Dionei', 'Manu', 'Charlei'];
const arrNumbers = [1, 2, 3, 4, 5];
const arrCars = [{ branch: 'VW', year: 2010, model: 'Gol' },
    { branch: 'VW', year: 2020, model: 'Tiguan' }];
const arrBikes = [{ branch: 'Specialized', wheelSize: 22 },
    { branch: 'Specialized', wheelSize: 26 }];
console.log('Type of arrString is', typeof arrStrings);
console.log('Type of arrNumbers is', typeof arrNumbers);
console.log('Type of arrCars is', typeof arrCars);
console.log('Type of arrBikes is', typeof arrBikes);
//7. Composing Types (GENERICS)
console.log('7');
console.log('COMPOSING TYPES (GENERICS)');
const varTypedAsString = {
    add: (param) => console.log('Type of param of function [add] is', typeof param, 'and value is', param),
    get: () => '123'
};
const varTypedAsNumber = {
    add: (param) => console.log('Type of param of function [add] is', typeof param, 'and value is', param),
    get: () => 123
};
varTypedAsString.add('123');
varTypedAsNumber.add(123);
const getOfString = varTypedAsString.get();
const getOfNumber = varTypedAsNumber.get();
console.log('Type a var typed with string is', typeof getOfString);
console.log('Type a var typed with number is', typeof getOfNumber);
//8. Structural Type System (Shapes)
console.log('8');
console.log('STRUCTURAL TYPE SYSTEM (SHAPES)');
function showYearOfBirth(person) {
    const currentYear = 2022;
    const yearOfBirth = currentYear - person.age;
    console.log('Person parameter received', person, 'and the year of birth is', yearOfBirth);
}
const father1 = { name: 'Dionei', age: 34 };
const mother1 = { name: 'Manu', age: 27 };
const child1 = { name: 'Charlie', age: 3, father: father1, mother: mother1 };
showYearOfBirth(father1);
showYearOfBirth(mother1);
showYearOfBirth(child1);
showYearOfBirth({ age: 80, name: 'Teste' }); // inverted parameter sequence 
