let lista = ["Tehtävä 1", "Tehtävä 2"];

function paivitaLista() {
    const ul = document.getElementById("tehtavalista");
    ul.innerHTML = "";

    for (const tehtava of lista) {
        const li = document.createElement("li");
        li.textContent = tehtava;
        ul.appendChild(li);
    }
}

function lisaa() {
    const teksti = document.getElementById("uusiTehtava").value.trim();
    const maara = Number(document.getElementById("maara").value);

    if (teksti === "" || maara < 1) return;

    for (let i = 0; i < maara; i++) {
        lista.push(teksti);
    }

    document.getElementById("uusiTehtava").value = "";
    paivitaLista();
}

paivitaLista();

