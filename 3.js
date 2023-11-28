function createEmptyObjectWithoutPrototype() {
    return Object.create(null);
}

// Пример 
const emptyObject = createEmptyObjectWithoutPrototype();

console.log(emptyObject); 
console.log(Object.getPrototypeOf(emptyObject)); 