function displayOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key: ${key}, Value: ${obj[key]}`);
        }
    }
}

// Пример 
const exampleObject = {
    a: 1,
    b: 2,
    c: 3
};

displayOwnProperties(exampleObject);