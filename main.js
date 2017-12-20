function calculateChange(){
    
    let paymentDue = document.getElementById("amount-due").value;
    let paymentReceived = document.getElementById("amount-received").value;

    let changeDue = Math.ceil((paymentDue - paymentReceived)*100); //cents due

    let dollars100 = getFactor(10000, changeDue, false);
    changeDue -= dollars100 * 10000;
    document.getElementById('dollar-100').innerText = dollars100;

    let dollars50 = getFactor(5000, changeDue, false);
    changeDue -= dollars50 * 5000;
    document.getElementById('dollar-50').innerText = dollars50;

    let dollars20 = getFactor(2000, changeDue, false);
    changeDue -= dollars20 * 2000;
    document.getElementById('dollar-20').innerText = dollars20;

    let dollars10 = getFactor(1000, changeDue, false);
    changeDue -= dollars10 * 1000;
    document.getElementById('dollar-10').innerText = dollars10;

    let dollars5 = getFactor(500, changeDue, false);
    changeDue -= dollars5 * 500;
    document.getElementById('dollar-5').innerText = dollars5;

    let dollars1 = getFactor(100, changeDue, false);
    changeDue -= dollars1 * 100;
    document.getElementById('dollars-output').innerText = dollars1;

    let cents25 = getFactor(25, changeDue, false);
    changeDue -= cents25 * 25;
    document.getElementById('quarters-output').innerText = cents25;

    let cents10 = getFactor(10, changeDue, false);
    changeDue -= cents10 * 10;
    document.getElementById('dimes-output').innerText = cents10;

    let cents5 = getFactor(5, changeDue, false);
    changeDue -= cents5 * 5;
    document.getElementById('nickels-output').innerText = cents5;

    let cents1 = getFactor(1, changeDue, true);
    changeDue -= cents1 * 1;
    document.getElementById('pennies-output').innerText = cents1;
}

function getFactor(centsInUnit, changeDue, roundUp) {
    if(roundUp) {
        return Math.ceil(changeDue/centsInUnit); 
    }
    else { 
        return Math.floor(changeDue/centsInUnit); 
    }
}

document.getElementById("calculate-change").addEventListener("click", calculateChange);