
var lista = ["Tehtävä 1", "Tehtävä 2"];

window.onload = function() {
    paivitaLista();
};

function paivitaLista() {
     ul = document.getElementById("tehtavalista");
    ul.innerHTML = ""; 

    lista.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

function lisaaTehtava() {
    const input = document.getElementById("uusiTehtava");
    const arvo = input.value.trim();

    if (arvo === "") return; 

    lista.push(arvo);
    input.value = ""; 
    paivitaLista();   
}
