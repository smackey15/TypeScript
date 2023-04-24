"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Part 1: Remove the errors in the function below by filling the conditions of the if statements on lines 6, 13, and 20
function classifyAnimal(animal) {
    if ('barks' in animal) {
        animal.barks;
        console.log('This is a dog');
        return;
    }
    if ('coos' in animal) {
        animal.coos;
        console.log('This is a pigeon');
        return;
    }
    if ('meows' in animal) {
        animal.meows;
        console.log('This is a cat');
        return;
    }
}
// Part 2: Uncomment the lines below and test the classifyAnimal function by creating dog, pigeon, and cat objects
var fido = {
    name: 'fido',
    color: 'gold',
    barks: true,
    hasTail: true
};
classifyAnimal(fido); // should print 'This is a dog'
// const whiskers = {
// }
// classifyAnimal(whiskers) // should print 'This is a cat'
// const skyrat = {
// }
// classifyAnimal(skyrat) // should print 'This is a pigeon'
