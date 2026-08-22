//  Custom Iterator
// Making a plain object iterable using Symbol.iterator
const universitySchedule = {
    semesters: ["Semester 1", "Semester 2", "Semester 3", "Semester 4"],
    [Symbol.iterator]: function() {
        let step = 0;
        return {
            next: () => {
                if (step < this.semesters.length) {
                    return { value: this.semesters[step++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (const sem of universitySchedule) {
    console.log(sem); // Iterates through the semesters cleanly
}


// Generators
// Generators use the `yield` keyword to pause execution. 
// Great for generating unique IDs, infinite sequences, or handling complex async flows.
function* idGenerator() {
    let id = 1;
    while (true) {
        yield `USER-${id++}`;
    }
}

const generateId = idGenerator();
console.log(generateId.next().value); // USER-1
console.log(generateId.next().value); // USER-2
console.log(generateId.next().value); // USER-3