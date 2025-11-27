let balansshow = document.getElementById('balansshow');
let balansInput = document.getElementById('balans');
let balans = 0;
function updateBalance() {
    balansshow.innerHTML = balans.toFixed(2) + "$";
}
function balanceout(kod) {
    let amount = Number(balansInput.value);
    switch (kod) {
        case 0:
            updateBalance();
            break;
        case 1:
            if (!amount || amount <= 0) {
                alert("Məbləğ düzgün deyil!");
                return;
            }
            balans += amount;
            updateBalance();
            balansInput.value = "";
            break;
        default:
            alert("Yanlış əməliyyat");
    }
}
