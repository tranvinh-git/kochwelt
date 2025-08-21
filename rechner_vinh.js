// Zutatenliste als Array (für 2 Basis-Portionen)
const zutaten = [
  ["Thai Kitchen Frühlingsrollenblätter", 6, "Blätter"],
  ["Thai Kitchen Frühlingsrollen-Sauce", 2, "EL"],
  ["Thai Kitchen Sweet Chili Sauce", 435, "ml"],
  ["Rüebli, gerieben", 200, "g"],
  ["Kabis, fein geschnitten", 100, "g"],
  ["Lauch, fein geschnitten", 100, "g"],
  ["Mungbohnen-Sprossen", 100, "g"],
  ["Glasnudeln (Trockengewicht)", 50, "g"],
  ["Thai Kitchen Fischsauce", 1, "EL"],
  ["Pfeffer aus der Mühle", 1, "Prise"]
];

// Funktion zur Berechnung der Zutatenmengen
function berechne() {
  const portionenInput = document.getElementById("portionen");
  const anzahlPortionen = parseInt(portionenInput.value); // Eingabe als Zahl

  if (!anzahlPortionen || anzahlPortionen < 1) {
    alert("Bitte gib eine gültige Anzahl von Portionen ein!");
    return;
  }

  const basisPortionen = 2; // Basis-Portionenanzahl (z. B. 2 Portionen)
  const zutatenListe = document.getElementById("zutatenListe");
  zutatenListe.innerHTML = ""; // Vorherige Ergebnisse löschen

  // Berechnung der neuen Mengen basierend auf der Portionenanzahl
  zutaten.forEach(zutat => {
    const neueMenge = (zutat[1] / basisPortionen) * anzahlPortionen; // Menge anpassen
    const li = document.createElement("li");
    li.textContent = `${neueMenge.toFixed(2)} ${zutat[2]} ${zutat[0]}`; // Ausgabe formatieren
    zutatenListe.appendChild(li);
  });
}

// Standardmässig Zutatenliste für 2 Portionen anzeigen
window.onload = function () {
  document.getElementById("portionen").value = 2; // Standardwert setzen
  berechne(); // Zutaten für 4 Portionen berechnen
};
// Funktion zur Berechnung der Zutatenmengen
function berechne() {
  const portionenInput = document.getElementById("portionen");
  const anzahlPortionen = parseInt(portionenInput.value); // Eingabe als Zahl

  if (!anzahlPortionen || anzahlPortionen < 2) {
    alert("Bitte gib eine gültige Anzahl von Portionen ein!");
    return;
  }

  const basisPortionen = 2; // Basis-Portionenanzahl (z. B. 2 Portionen)
  const zutatenListe = document.getElementById("zutatenListe");
  zutatenListe.innerHTML = ""; // Vorherige Ergebnisse löschen

  // Berechnung der neuen Mengen basierend auf der Portionenanzahl
  zutaten.forEach(zutat => {
    const neueMenge = (zutat[1] / basisPortionen) * anzahlPortionen; // Menge anpassen
    const li = document.createElement("li");
    li.textContent = `${neueMenge.toFixed(2)} ${zutat[2]} ${zutat[0]}`; // Ausgabe formatieren
    zutatenListe.appendChild(li);
  });
}

// Standardmässig Zutatenliste für 2 Portionen anzeigen
window.onload = function () {
  document.getElementById("portionen").value = 2; // Standardwert setzen
  berechne(); // Zutaten für 2 Portionen berechnen
};