const fib = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1; //because position 1 and 2 is always has value 1

    memo[n] =  fib(n-1, memo)+ fib(n-2, memo);
    return memo[n];
};

console.log(fib(1));
console.log(fib(7));
console.log(fib(8));
console.log(fib(15));
console.log(fib(50));
