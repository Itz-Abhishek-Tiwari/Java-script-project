const calculate = () => {
  let btn = document.querySelector(".calculate-button");
  btn.addEventListener("click", () => {
    let userInput = document.querySelector("#billAmount").value;
    let userTip = document.querySelector(".tipAmount").value;
    let totalAmountDisplay = document.querySelector(".total");
    let billAmount = parseInt(userInput);
    let tipPercentage = parseInt(userTip);
    let totalAmount = billAmount + billAmount * (tipPercentage / 100);
    totalAmountDisplay.textContent = totalAmount;
    console.log(totalAmount);
  });
};
calculate();
