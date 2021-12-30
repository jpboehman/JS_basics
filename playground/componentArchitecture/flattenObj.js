const nestedObj = {
    name: 'Jackson',
    age: '24',
    address: {
        street: '4007 Vacation Ln',
        city: 'Arlington',
        state: 'VA',
        postalCode: '22207'
    }
}

const data = [];

// Practical use of recursion - flattening an object from an API response
const flattenObj = (obj) => {
    Object.keys(obj).forEach((key) => {
        console.log(key);
        if (typeof obj[key] !== 'object') {
            data.push(key);
        } else {
            flattenObj(obj[key]);
        }
    });
    return data;
}

// console.log(flattenObj(nestedObj));

const arr = ['hey', 'there', 'buns']
const [[initial], ...rest] = arr[0];
console.log(initial);
console.log(rest);

const headers = ['Name', 'Email', 'Age'];

const other = headers.map((header) => {
    console.log(header);
})
console.log(other);