let distance = parseInt(prompt('Quanti km vuoi percorrere?'));
let age = parseInt(prompt('Quanti anni hai?'));

let total_price = distance * 0.21;

if (age < 18) {
    let final_price = (total_price - (total_price * 20 / 100))
    let final_price_fixed = final_price.toFixed(2)
    document.getElementById('ticket_price').innerHTML = "il prezo e':" + ' ' + final_price_fixed;
} else if (age > 65) {
    let final_price = (total_price - (total_price * 40 / 100))
    let final_price_fixed = final_price.toFixed(2)
    document.getElementById('ticket_price').innerHTML = "il prezo e':" + ' ' + final_price_fixed;
} else {
    let total_price_fixed = total_price.toFixed(2)
    document.getElementById('ticket_price').innerHTML = "il prezo e':" + ' ' + total_price_fixed;
}
