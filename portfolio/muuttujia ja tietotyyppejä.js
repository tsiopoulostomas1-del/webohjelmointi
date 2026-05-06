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

function laskin_abs() {
    let eka = Number(document.getElementById("numero1").value)
    let toka = Number(document.getElementById("numero2").value)
    alert(Math.abs(eka))
}

function laskin_sqrt() {
    let eka = Number(document.getElementById("numero1").value)
    let toka = Number(document.getElementById("numero2").value)
    alert(Math.sqrt(eka))
    
}

function laskin_pow() {
    let eka = Number(document.getElementById("numero1").value)
    let toka = Number(document.getElementById("numero2").value)
    alert(Math.pow(eka, toka))
    
}

function laskin_max() {
    let eka = Number(document.getElementById("numero1").value)
    let toka = Number(document.getElementById("numero2").value)
    alert(Math.max(eka, toka))
    
}

function laskin_min() {
    let eka = Number(document.getElementById("numero1").value)
    let toka = Number(document.getElementById("numero2").value)
    alert(Math.min(eka, toka))
    
}

function laskin_round() {
    let eka = Number(document.getElementById("numero1").value)
    let toka = Number(document.getElementById("numero2").value)
    alert(Math.round(eka))
    
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

const ulV = document.getElementById("v");

ulV.innerHTML = "";

Veijo.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ulV.appendChild(li);
})

const ulE = document.getElementById("e");

ulE.innerHTML = "";

Elvira.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ulE.appendChild(li);
})

const ulM = document.getElementById("m");

ulM.innerHTML = "";

Mehdi.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ulM.appendChild(li);
})

const ulT = document.getElementById("t");

ulT.innerHTML = "";

Tuuli.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ulT.appendChild(li);
})

const ulVT = document.getElementById("veijotuuli");

ulVT.innerHTML = "";

const VeijoTuuli = new Set([...Veijo, ...Tuuli]);

VeijoTuuli.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ulVT.appendChild(li);
});

const ulME = document.getElementById("mehdielvira");

ulME.innerHTML = "";

const MehdiElvira = new Set([...Mehdi].filter(item => Elvira.has(item)));

MehdiElvira.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ulME.appendChild(li);
});

const ulET = document.getElementById("elviratuuli");

ulET.innerHTML = "";

const ElviraTuuli = new Set([
    ...[...Elvira].filter(item => !Tuuli.has(item)),
    ...[...Tuuli].filter(item => !Elvira.has(item))
]);

ElviraTuuli.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ulET.appendChild(li);
});






