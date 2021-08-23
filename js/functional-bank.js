//Get Input Value
const getInputValue = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}
//Add Deposit Withdraw Amount
const updateDepositWithdrawAmount = (previousAmountId, amount) => {
    const previousAmount = document.getElementById(previousAmountId);
    const previousAmountTotal = parseFloat(previousAmount.innerText);
    const newTotal = previousAmountTotal + amount;
    previousAmount.innerText = newTotal;
}
//Update Total Balance
const updateTotalBalance = () => {
    const previousTotal = document.getElementById('balance');
    const previousTotalBalance = parseFloat(previousTotal.innerText);
    const totalDepositAmount = parseFloat(document.getElementById('deposit').innerText);
    const totalWithdrawAmount = parseFloat(document.getElementById('withdraw').innerText);
    const totalBalance = totalDepositAmount - totalWithdrawAmount;
    const allTotal = previousTotalBalance - totalBalance;
    previousTotal.innerText = allTotal;
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    updateDepositWithdrawAmount('deposit', depositAmount);
    updateTotalBalance();
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    updateDepositWithdrawAmount('withdraw', withdrawAmount);
    updateTotalBalance();
});