
let summePaella = [200, 1, 300, 6, 2, 1, 1, 2, 4, 0.5];
let zutatenPaella = ['gr Reis', 'Stück Paprika', 'gr Muscheln', 'Stück Garnelen', 'g Calms', 'l Fish Broth', 'Stück Zwiebeln', 'Sück Knoblauch', 'Stück Tomate','Stück Schrimp'];


function calculateRecipe_Paella() {
    console.log('calculate recipe');
    portions = document.getElementById('input_portions').value;
    console.log('Portionen: ', portions);
    document.getElementById('warning').innerHTML="";
    if (portions < 2) {
        return warning.innerHTML = "Bitte gib eine gültige Anzahl von Portionen ein!"
    } else if (portions > 15) {
        return warning.innerHTML = "Bitte gib eine gültige Anzahl von Portionen ein!"
    } else {
        calculatePaella();
    }
}

function calculatePaella() {
    let PaellaReference = document.getElementById('ingredientListPaella');
    PaellaReference.innerHTML = '';
    for(let i = 0; i < summePaella.length; i++) {
        PaellaReference.innerHTML +=`<li>${summePaella[i] * portions} ${zutatenPaella[i]}</li>`;
    } 
}

