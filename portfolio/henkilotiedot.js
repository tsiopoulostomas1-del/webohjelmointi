var henkilot = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "Sähköteknikko",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Opiskelija",
        driversLicense: true
    }
];

function naytaHenkilot() {
  const tbody = document.getElementById("rivit");
  tbody.innerHTML = "";

  henkilot.forEach(h => {
    const rivi = document.createElement("tr");

    const nimi = document.createElement("td");
    nimi.textContent = h.name;

    const ika = document.createElement("td");
    ika.textContent = h.age >= 18 ? h.age + " 🍺" : h.age;

    const tyo = document.createElement("td");
    tyo.textContent = h.job === "Opiskelija" ? h.job + " 🎓" : h.job;

    const ajokortti = document.createElement("td");
    ajokortti.textContent = h.driversLicense ? "Kyllä" : "Ei";

    rivi.appendChild(nimi);
    rivi.appendChild(ika);
    rivi.appendChild(tyo);
    rivi.appendChild(ajokortti);

    tbody.appendChild(rivi);
  });
}

function lisaaHenkilo() {
    const nimi = document.getElementById("nimi").value;
    const ika = Number(document.getElementById("ika").value);
    const tyo = document.getElementById("tyo").value;
    const ajokortti = document.getElementById("ajokortti").checked;

    if (ika < 0) {
        alert("Iän pitää olla positiivinen luku");
        return;
    }

    const uusi = {
        name: nimi,
        age: ika,
        job: tyo,
        driversLicense: ajokortti
    };

    henkilot.push(uusi);
    naytaHenkilot();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("laheta").addEventListener("click", lisaaHenkilo);
    naytaHenkilot();
});
