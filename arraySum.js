{/*
    Write the function sumInput() that:

    Asks the user for values using prompt and stores the values in the array.
    Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
    Calculates and returns the sum of array items.
    P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/}
let isTerminate = false;
let userInput = 0;
let inputs = [];
function isNumeric (value) {
    return typeof value === 'number';
}
function sumInput() {
    userInput = prompt('Enter Value to Add');
    if(userInput === '' || userInput === null || !isNumeric(Number(userInput)) || isNaN(Number(userInput))){
        isTerminate = true
        return;
    }
    inputs.push(Number(userInput));
}
// while(!isTerminate){
//     sumInput()
// }
const summation = inputs.reduce((acc, current, index)=>{
    if(typeof current === 'number') return acc + current
    else return acc;
},0);

function updateDebounceText () {
    const para = document.getElementById('debounce')
    para.innerText = Number(para.innerText || 0) + 1;
}
function updateThrottleText () {
    const para = document.getElementById('throttle')
    para.innerText = Number(para.innerText || 0) + 1;
}
function debounce (func, delay=100)  {
    let timeout;
    return function(...args){
    console.log({timeout, delay});
        clearTimeout(timeout);
    console.log({timeout, delay});
        timeout = setTimeout(() => func.apply(this, args),  delay)
    }
}

const inputfield = document.getElementById('input-field');

const delayedValue = debounce((e) => {
    const para = document.getElementById('debounce')
    para.innerText = (para.innerText || 0) + 1;
});

inputfield.addEventListener('input', delayedValue);

//throttle
function throttle (cb, delay = 100) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
        if(waitingArgs == null){
            shouldWait = false;
        }else{
            cb(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay)
        }
    }
    return (...args) => {
        if(shouldWait) { //saves the last event
            waitingArgs = args
            return
        }
        cb(...args) //immediately called at first
        shouldWait = true;
        waitingArgs = null;

        setTimeout(timeoutFunc,delay); //sets the condition to false after a delay so that the cb will be invoked
    }
}
const defaultPara = document.getElementById('default');
const debouncee =  debounce(updateDebounceText)
const throttlee = throttle(updateThrottleText)
document.addEventListener('mousemove', e => {
    defaultPara.innerText = Number((defaultPara.innerText || 0)) + 1
    debouncee()
    throttlee()
})
function throttle2 (func, delay=1000) {
    let shouldWait = false;
    let currentArgs;
    const timeOutFunction = () => {
        if(currentArgs == null){
            shouldWait = false
        }else{
            func(...currentArgs)
            currentArgs = null
            setTimeout(timeOutFunction, delay)
        }
    }
    return (...args) => {
        if(shouldWait){ //while waiting update current args
            currentArgs = args;
            return
        }
        func(...args)
        shouldWait = true;
        currentArgs = null
        setTimeout(timeOutFunction, delay)
    }
}