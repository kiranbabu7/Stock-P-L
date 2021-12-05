const ipInput = document.querySelector("#ip-input");
const cpInput = document.querySelector("#cp-input");
const quantityInput = document.querySelector("#quantity");
const CalculateBtn = document.querySelector("#calculate-btn");
const output = document.querySelector("#output");

function CalculateProfitOrLost() {
  console.log(typeof ipInput.value);
  const initialPrice = Number(ipInput.value).toFixed(2);
  const currentPrice = Number(cpInput.value).toFixed(2);
  const quantity = Number(quantityInput.value);
  //Profit Logic
  if (initialPrice && quantity) {
    if (currentPrice > initialPrice) {
      const profit = currentPrice - initialPrice;
      const profitPercentage = ((profit / initialPrice) * 100).toFixed(2);
      const currentProfit = (profit * quantity).toFixed(2);
      output.innerText = `Profit: ${currentProfit}\n\n Profit Percentage: ${profitPercentage} %`;
      output.style.backgroundColor = "rgb(33, 248, 51)";
    } else if (initialPrice > currentPrice) {
      const loss = initialPrice - currentPrice;
      const lossPercentage = ((loss / initialPrice) * 100).toFixed(2);
      const currentLoss = (loss * quantity).toFixed(2);
      output.innerText = `Loss: ${currentLoss}\n\n Loss Percentage: ${lossPercentage} %`;
      output.style.backgroundColor = "rgb(253, 36, 36)";
    }
  } else {
    output.innerText = "Initial Price and Quantity Should be more than 0";
  }
}
CalculateBtn.addEventListener("click", CalculateProfitOrLost);
