const user = {
    name: "Hamza",
    role: "Admin"
};

const permissions = {
    canDelete: true,
    canEdit: true
};

// 1. Old approach to link prototypes (Prototypal Inheritance)
user.__proto__ = permissions;

console.log(user.canDelete); // true (Inherited from permissions object)
console.log(user.name); // "Hamza" (Found on the object itself)

// 2. Modern Approach using Object.setPrototypeOf
const softwareEngineer = {
    writeCode: true
};

const intern = {
    isLearning: true
};

Object.setPrototypeOf(intern, softwareEngineer);

// When we call intern.writeCode, JS looks at 'intern', doesn't find it, 
// then it moves up the prototype chain to 'softwareEngineer', finds it, and executes it.
console.log(intern.writeCode);