function noppa1() {
    const tulos = Math.floor(Math.random() * 6) + 1;
    document.getElementById("noppa").innerText = tulos;
}

function lotto() {
    let tulos = "";

    for (let i = 0; i < 7; i++) {
        tulos += (Math.floor(Math.random() * 40) + 1) + " ";
    }

    document.getElementById("lotto").innerText = tulos;
}
