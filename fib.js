const fib = (n) => {
    if(n <= 2) return 1; //because position 1 and 2 is always has value 1

    return fib(n-1)+ fib(n-2);
};

console.log(fib(1));
console.log(fib(7));
console.log(fib(8));
console.log(fib(15));
console.log(fib(800));
