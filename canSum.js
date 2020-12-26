// write a function 'canSum(targetsum, numbers)' return a true of fales if the can be summed with given array list

const canSum = (targetNumber, numbers) => {
    if(targetNumber === 0) return true;
    if(targetNumber < 0) return false;

    for(let num of numbers){
        const remainder = targetNumber - num;
        if(canSum(remainder, numbers) === true){
            return true;
        }
    }
    return false;

};

console.log(canSum(7, [2,3])); //true
console.log(canSum(7, [5,3,4,7,])); //true
console.log(canSum(7, [2,4])); //false
console.log(canSum(8, [2,3,5])); //true
console.log(canSum(300, [7,14])); //true

