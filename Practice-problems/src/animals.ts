import { dog, cat, bird, pigeon, anyAnimal } from "./animals_data";

// Part 1: Remove the errors in the function below by filling the conditions of the if statements on lines 6, 13, and 20
function classifyAnimal(animal: anyAnimal) {

    if ('barks' in animal) {

        animal.barks
        console.log('This is a dog')
        return
    }

    if ('coos' in animal) {

        animal.coos
        console.log('This is a pigeon')
        return
    }

    if ('meows' in animal) {

        animal.meows
        console.log('This is a cat')
        return
    }

}


// Part 2: Uncomment the lines below and test the classifyAnimal function by creating dog, pigeon, and cat objects
const fido: dog = {
    name: 'fido',
    color: 'gold',
    barks: true,
    // hasTail: true
}
classifyAnimal(fido) // should print 'This is a dog'

const whiskers = {
    name: 'fido',
    color: 'gold',
    meows: true,
    hasTail: true
}
classifyAnimal(whiskers) // should print 'This is a cat'

const skyrat = {
    name: 'fido',
    color: 'gold',
    coos: true,
    canFly: true
}
classifyAnimal(skyrat) // should print 'This is a pigeon'
