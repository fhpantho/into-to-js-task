const Mark = {
    "Bangla": 89,
    "English": 85,
    "Math": 90,
    "Science": 88,
    "History": 92,
    "Geography": 91
};

let sum = 0;
for (let i = 0; i < Object.keys(Mark).length; i++) {
    sum = sum + Object.values(Mark)[i];
}

let total = sum;
const average = total / Object.keys(Mark).length;

console.log(`Total : ${total}`);
console.log(`Average : ${average}`);
