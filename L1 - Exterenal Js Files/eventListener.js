document.getElementById("divide").addEventListener("click", function() {
    let firstInput = document.getElementById("first-number").value;
    let secondInput = document.getElementById("second-number").value;
    let result = divide(Number(firstInput), Number(secondInput));
    document.querySelector("#result").innerHTML = result;
});