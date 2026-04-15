a = 3;
b = 5;
c = 7;
d = 15;

function summa() {
    alert(a + b);
}

function vahennys() {
    alert(b - c);
}

function kerto() {
    alert(c * d);
}

function jako() {
    alert(d / a);
}

function laskin_summa() {
  let eka = Number(document.getElementById("numero1").value)
  let toka = Number(document.getElementById("numero2").value)
  lasku = eka + toka
  alert(lasku)
}

function laskin_vahennys() {
  let eka = Number(document.getElementById("numero1").value)
  let toka = Number(document.getElementById("numero2").value)
  lasku = eka - toka
  alert(lasku)
}

function laskin_kerto() {
  let eka = Number(document.getElementById("numero1").value)
  let toka = Number(document.getElementById("numero2").value)
  lasku = eka * toka
  alert(lasku)
}

function laskin_jako() {
  let eka = Number(document.getElementById("numero1").value)
  let toka = Number(document.getElementById("numero2").value)
  lasku = eka / toka
  alert(lasku)
}