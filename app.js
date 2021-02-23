document.getElementById("submit").addEventListener("click", calcMortgage);


function calcMortgage() {

    let x = document.getElementById("amount").value;
    let y = document.getElementById("term").value * 12;
    let z = document.getElementById("rate").value / 100 / 12;
    let mortageRepayment = x * z * (Math.pow(1 + z, y)) / (Math.pow(1 + z, y) - 1);
    let finalAmt = mortageRepayment * y;


    document.querySelector(".monthly").innerHTML = `Your Monthly Mortage repayment is: £${mortageRepayment.toFixed(2)}`;
    document.querySelector(".monthly").style.backgroundColor = 'white';

    document.querySelector(".total").innerHTML = `Your Total Mortage repayment is: £ ${finalAmt.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
    document.querySelector(".total").style.backgroundColor = 'white';

}