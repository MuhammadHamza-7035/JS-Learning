// Destructuring & Rest Operator
// Useful when extracting data from complex objects, like parsing a complex JSON response in a multi-sided food delivery marketplace API.
const orderPayload = {
    orderId: "ORD-9921",
    restaurant: "Spicy Wok",
    customer: {
        firstName: "Ali",
        phone: "555-0192"
    },
    items: ["Noodles", "Spring Rolls", "Coke"]
};

// Destructuring nested objects and using the REST operator for remaining items
const { 
    orderId, 
    customer: { firstName }, 
    items: [firstItem, ...otherItems] 
} = orderPayload;

console.log(firstName); // "Ali"
console.log(firstItem); // "Biryani"
console.log(otherItems); // ["Sprite", "Pepsi"]

// --- 2. Spread Operator ---
// Perfect for merging configurations or updating states immutably
const baseConfig = { db: "MongoDB", port: 5000 };
const environmentConfig = { port: 8000, env: "production" };

const finalServerConfig = {
    ...baseConfig,
    ...environmentConfig, // Overwrites port to 8000
    host: "localhost"
};
console.log(finalServerConfig); 


// --- 3. Optional Chaining
// Safely accessing deeply nested properties without throwing "Cannot read properties of undefined"
const deliveryDriver = {
    name: "Ahmed",
    vehicle: {
        type: "Motorcycle"
        // Missing "license" object
    }
};

// Instead of: deliveryDriver && deliveryDriver.vehicle && deliveryDriver.vehicle.license
const licenseNumber = deliveryDriver.vehicle?.license?.number; 
console.log(licenseNumber); // undefined (Safe failure, no crash)