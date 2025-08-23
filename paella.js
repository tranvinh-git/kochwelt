const zutaten = [
  ["Reis", 200, "gr"],
  ["Paprika", 1, "Stück"],
  ["Muscheln", 300, "gr"],
  ["Garnelen", 6, "Stück"],
  ["Calms", 150, "g"],
  ["Fisch Broth", 2, "l"],
  ["Zwiebeln", 1, "stück"],
  ["Knoblauch", 1, "Stücl"],
  ["Tomate", 2, "stück"],
  ["Schrimp", 4, "Stück"]
];



function berechne() {
  const portionenInput = document.getElementById("portionen");
  const anzahlPortionen = parseInt(portionenInput.value); 

  if (anzahlPortionen < 2) {
    alert("Bitte gib mindestens 2 Potionenanzahl ein!");
    return;
  }

  const basisPortionen = 2;
  const zutatenListe = document.getElementById("zutatenListe");
  zutatenListe.innerHTML = "";

 
  zutaten.forEach(zutat => {
    const neueMenge = (zutat[1] / basisPortionen) * anzahlPortionen;
    const li = document.createElement("li");
    li.textContent = `${neueMenge.toFixed(2)} ${zutat[2]} ${zutat[0]}`;
    zutatenListe.appendChild(li);
  });
}


window.onload = function () {
  document.getElementById("portionen").value = 2; 
  berechne();
};

