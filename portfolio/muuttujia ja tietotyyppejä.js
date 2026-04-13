a = 3;
b = 5;
c = 7;
d = 15;

function summa() {
    alert("Vastaus: 8");
}

function vahennys() {
    alert("Vastaus: -2");
}

function kerto() {
    alert("Vastaus: 105");
}

function jako() {
    alert("Vastaus: 5");
}

function laskin_summa() {
  let eka = Number(document.getElementById("numero1").value)
  let toka = Number(document.getElementById("numero2").value)
  document.getElementById("tulos").innerText = summa(eka, toka)
}

function laskin_vahennys() {
  let eka = Number(document.getElementById("numero1").value)
  let toka = Number(document.getElementById("numero2").value)
  document.getElementById("tulos").innerText = vahennys(eka, toka)
}

function laskin_kerto() {
  let eka = Number(document.getElementById("numero1").value)
  let toka = Number(document.getElementById("numero2").value)
  document.getElementById("tulos").innerText = kerto(eka, toka)
}

function laskin_jako() {
  let eka = Number(document.getElementById("numero1").value)
  let toka = Number(document.getElementById("numero2").value)
  document.getElementById("tulos").innerText = jako(eka, toka)
}