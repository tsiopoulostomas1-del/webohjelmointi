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

function naytaAika() {
    const nyt = new Date();

    // Päivämäärä muodossa 9.5.2025
    const paiva = nyt.getDate();
    const kk = nyt.getMonth() + 1;
    const vuosi = nyt.getFullYear();

    // Aika muodossa 10.15.45
    const tunnit = nyt.getHours().toString().padStart(2, "0");
    const minuutit = nyt.getMinutes().toString().padStart(2, "0");
    const sekunnit = nyt.getSeconds().toString().padStart(2, "0");

    // Viikonpäivät suomeksi
    const viikonpaivat = [
        "sunnuntai", "maanantai", "tiistai", "keskiviikko",
        "torstai", "perjantai", "lauantai"
    ];

    // Kuukaudet suomeksi
    const kuukaudet = [
        "tammikuu", "helmikuu", "maaliskuu", "huhtikuu",
        "toukokuu", "kesäkuu", "heinäkuu", "elokuu",
        "syyskuu", "lokakuu", "marraskuu", "joulukuu"
    ];

    document.getElementById("paivamaara").innerText = `${paiva}.${kk}.${vuosi}`;
    document.getElementById("aika").innerText = `${tunnit}.${minuutit}.${sekunnit}`;
    document.getElementById("paivaJaAika").innerText = `${paiva}.${kk}.${vuosi} klo ${tunnit}.${minuutit}.${sekunnit}`;
    document.getElementById("viikonpaiva").innerText = viikonpaivat[nyt.getDay()];
    document.getElementById("kuukausi").innerText = kuukaudet[nyt.getMonth()];
}

var Veijo = new Set(['luku', 'poisto']);
var Elvira = new Set(['luku', 'kirjoitus', 'muokkaus']);
var Mehdi = new Set(['luku', 'muokkaus', 'poisto']);
var Tuuli = new Set(['kirjoitus', 'poisto']);



