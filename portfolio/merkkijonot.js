
// 1

function poimi_kirjain() {
    const text1 = document.getElementById("text").value;
    const number1 = Number(document.getElementById("number").value);

    let letter = text1.at(number1);

    document.getElementById("teksti").innerHTML = letter;

}

// 2

function loyda_indeksi() {
    const text = document.getElementById("tekstiosio").value;
    const text1 = document.getElementById("tekstiosio2").value;

    let number = text.indexOf(text1);

    document.getElementById("tekstia").innerHTML = number;

}

// 3

function leikkaa_merkkijono() {
    const text = document.getElementById("tekstikentta").value;
    const numb = Number(document.getElementById("numerokentta").value);
    const numb2 = Number(document.getElementById("numerokentta2").value);

    let slice = text.slice(numb, numb2);

    document.getElementById("tekstiataas").innerHTML = slice;

}

// 4

function etsijakorvaa() {
    const text = document.getElementById("ykkos").value;
    const text2 = document.getElementById("kakkos").value;
    const text3 = document.getElementById("kolmos").value;

    let replace = text.replaceAll(text2, text3);

    document.getElementById("tekstiataaskerran").innerHTML = replace;

}

// 5

function poikkijapinoon() {
    const text = document.getElementById("ykkonen").value;
    const text2 = document.getElementById("kakkonen").value;

    let split = text.split(text2);

    const ul = document.getElementById("tekstiataaskerran1");
    ul.innerHTML = ""; 

    split.forEach(pala => {
        const li = document.createElement("li");
        li.textContent = pala;
        ul.appendChild(li);
    });
}
