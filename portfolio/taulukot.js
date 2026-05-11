var numerot = [8, 3, 55, 420, 1, -5, 69, -999, 0, 321];
var sanat = ["skibidi", "rizz", "gyat", "sigma", "sus", "cap", "yeet", "lit", "simp", "cringe"];

// 1

function poimi_elementti() {
    const numero = Number(document.getElementById("numero").value);
    const tekstiDiv = document.getElementById("teksti");

    const indeksi = numerot.indexOf(numero);

    if (indeksi !== -1) {
        tekstiDiv.innerHTML = sanat[indeksi];
    } else {
        tekstiDiv.innerHTML = "Ei löydy listasta";
    }
}

// 2

function loyda_indeksi() {
    const tekstia = document.getElementById("tekstia").value;
    const vastausDiv = document.getElementById("vastaus");

    const indeksi = sanat.indexOf(tekstia);

    if (indeksi !== -1) {
        vastausDiv.innerHTML = numerot[indeksi];
    } else {
        vastausDiv.innerHTML = "Ei löydy listasta";
    }
}

// 3

function leikkaa_taulukko() {
    const alku = Number(document.getElementById("tekstialisaa").value);
    const loppu = Number(document.getElementById("tekstialisaa2").value);

    const vastauksiaUl = document.getElementById("vastauksia");
    vastauksiaUl.innerHTML = "";

    const pala = sanat.slice(alku, loppu);

    pala.forEach(sana => {
        const li = document.createElement("li");
        li.textContent = sana;
        vastauksiaUl.appendChild(li);
    });
}


// 4
 
function tulosta(lista) {
    const ul = document.getElementById("vastaukset");
    ul.innerHTML = "";

    lista.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

// Tekstit

function tulostaTekstit() {
    tulosta(sanat);
}

function jarjestaTekstit() {
    sanat.sort();
    tulosta(sanat);
}

function kaannaTekstit() {
    sanat.reverse();
    tulosta(sanat);
}

// Numerot

function tulostaNumerot() {
    tulosta(numerot);
}

function jarjestaNumerot() {
    numerot.sort((a, b) => a - b);
    tulosta(numerot);
}

function kaannaNumerot() {
    numerot.reverse();
    tulosta(numerot);
}

// 5

var suodatetut = [...numerot];

function tulostaSuodatus() {
    const ul = document.getElementById("tulos");
    ul.innerHTML = "";

    suodatetut.forEach(n => {
        const li = document.createElement("li");
        li.textContent = n;
        ul.appendChild(li);
    });
}



function suodataTulosta() {
   
    tulostaSuodatus();
}

function suodataPienemmat() {
    const arvo = Number(document.getElementById("numeroita").value);
    suodatetut = numerot.filter(n => n < arvo);
    tulostaSuodatus();
}

function suodataSuuremmat() {
    const arvo = Number(document.getElementById("numeroita").value);
    suodatetut = numerot.filter(n => n > arvo);
    tulostaSuodatus();
}