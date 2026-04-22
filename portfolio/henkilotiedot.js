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

  henkilot.forEach(h => {
    const rivi = document.createElement("tr");

    const nimi = document.createElement("td");
    nimi.textContent = h.name;

    const ika = document.createElement("td");
    ika.textContent = h.age;

    const tyo = document.createElement("td");
    tyo.textContent = h.job;

    const ajokortti = document.createElement("td");
    ajokortti.textContent = h.driversLicense ? "Kyllä" : "Ei";

    rivi.appendChild(nimi);
    rivi.appendChild(ika);
    rivi.appendChild(tyo);
    rivi.appendChild(ajokortti);

    tbody.appendChild(rivi);
  });
}

naytaHenkilot();