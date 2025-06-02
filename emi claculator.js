let Principle = document.getElementById("Principle");
let intrestrate = document.getElementById("intrestrate");
let duration = document.getElementById("duration");
let clear = document.getElementById("clear");
let emiamount = document.getElementById("emiamount");
let intrest = document.getElementById("intrest");
let totalamount = document.getElementById("totalamount");



function calculate() {
    let p = parseInt(Principle.value);
    let r = parseInt(intrestrate.value);
    let t = parseInt(duration.value);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        alert("Invalid input! Please enter valid numbers.");
        return;
    } else {
        let rr = (r / 12) * (1 / 100);
        let emi = p * rr * ((Math.pow(1 + rr, t)) / (Math.pow(1 + rr, t) - 1));
        let ceilemi = Math.ceil(emi);
        let intrestemi = ceilemi * t - p;
        let tt = intrestemi + p;

        emiamount.textContent = Intl.NumberFormat('en-US').format(ceilemi);
        intrest.textContent = Intl.NumberFormat('en-US').format(intrestemi);
        totalamount.textContent = Intl.NumberFormat('en-US').format(tt);
        Intl.NumberFormat('en-US').format(tt);
    }
}

clear.onclick = function() {
    Principle.value = '';
    intrestrate.value = '';
    duration.value = '';
    emiamount.value = '';
    intrest.value = '';
    totalamount.value = '';

}