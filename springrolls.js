/* Array Springrolls */
let summeSpringrolls = [3, 1, 217.50, 100, 50, 50, 50, 25, 0.5, 0.5];
let zutatenSpringrolls = ['Bätter Thai Kitchen Frühlingsrollenblätter', 'EL Thai Kitchen Frühlingsrollen-Sauce', 'ml Thai Kitchen Sweet Chili Sauce', 'g Rüebli, gerieben', 'g Kabis, fein geschnitten', 'g Lauch, fein geschnitten', 'g Mungbohnen-Sprossen', 'g Glasnudeln (Trockengewicht)', 'EL Thai Kitchen Fischsauce','Brise Pfeffer aus der Mühle'];


/* Function Springrolls */ 
function calculateRecipe_Springrolls() {
    console.log('calculate recipe');
    portions = document.getElementById('input_portions').value;
    console.log('Portionen: ', portions);
    document.getElementById('warning').innerHTML="";
    if (portions < 2) {
        return warning.innerHTML = "Bitte gib eine gültige Anzahl von Portionen ein!"
    } else if (portions > 10) {
        return warning.innerHTML = "Bitte gib eine gültige Anzahl von Portionen ein!"
    } else {
        calculateSpringrolls();
    }
}

function calculateSpringrolls() {
    let rollsReference = document.getElementById('ingredientListRolls');
    rollsReference.innerHTML = '';
    for(let i = 0; i < summeSpringrolls.length; i++) {
        rollsReference.innerHTML +=`<li>${summeSpringrolls[i] * portions} ${zutatenSpringrolls[i]}</li>`;
    } 
}