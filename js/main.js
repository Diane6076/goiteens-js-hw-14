//1
const user = {
    name: 'Di',
    age: 15,
    hobby: 'dance',
    premium: true
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

//2
const all= {
    name: 1,
    car: 3,
    cloths: 3,
    hobby: 9,
}

const countProps = function(obj) {
    const keys = Object.keys(obj);
    return keys.length;
}
console.log(countProps(all));

//3
function findBestEmployee(employees) {
    
}

//4
function countTotalSalary(employees) {
    
}


//5
function getAllPropValues(arr, prop) {
    const values = [];

    for (const obj of arr) {
      if (obj.hasOwnProperty(prop)) {
        values.push(obj[prop]);
    }
 }
      return values;
}
  
const products = [
    { name: 'you', salary: 1000 },
    { name: 'we', salary: 500 },
    { name: 'me', salary: 2000 },
    { name: 'they', salary: 1500 }
];
  
console.log(getAllPropValues(products, 'salary'));

//6
function calculateTotalPrice(allProdcuts, productName) {
    
}

//7

