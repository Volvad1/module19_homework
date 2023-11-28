function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

// Пример 
const exampleObject = {
    name: 'Ivan',
    age: 25,
    city: 'Moskva'
};

const propertyNameToCheck = 'age';
const result = hasProperty(exampleObject, propertyNameToCheck);

console.log(`Object has property '${propertyNameToCheck}': ${result}`);