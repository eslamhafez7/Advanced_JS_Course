function divide(num1, num2) {
    if(num2 == 0) {
        throw new Error("You can't divide by zero");
    }
    return num1 / num2;
};