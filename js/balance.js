let balansshow = document.getElementById('balansshow');
let balansInput = document.getElementById('balans');
let balans = 0;

function balanceout(kod) {
    let amount = Number(balansInput.value);

    if (!amount || amount <= 0) {
        alert("Məbləğ düzgün deyil!");
        return; 
    }
    switch (kod) {
        case 0: 
            if (amount > balans) {
                alert("Balans kifayət deyil!");
                return;
            }
                 balansshow.innerHTML = amount.toFixed(2) + "$";
            break;

        case 1: 
            balans += amount;
                balansshow.innerHTML = balans.toFixed(2) + "$";
            break;

        default:
            alert("Yanlış əməliyyat");
    }
    balansInput.value = "";    
}
