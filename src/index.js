const a = { a: 1 };
const b = undefined;
const c = {...a, ...b};

console.log(c);
