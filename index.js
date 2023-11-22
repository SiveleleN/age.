
function displayResult() {
    
    let ageInput = document.getElementById("age").value;
   
    let days = ageInput * 365.25;
    
    document.getElementById("result").innerHTML = "Days: " + days.toFixed(2);
}
// I have use event listener
document.getElementById("button").addEventListener("click", displayResult);
