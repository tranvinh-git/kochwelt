/* Array Pizza */
let summePizzaTeig = [170, 7, 3, 50, 320,];
let zutatenPizzaTeig = ['g Weizenmehl Type 405, zusätzlich ein wenig zum bestäuben', 'g Hefe, frisch', 'g Salz', 'ml Olivenöl', 'ml Wasser'];
let summePizaSauce = [2, 1, 1, 1, 1, 1, 1];
let zutatenPizzaSauce = ['EL Tomaten, püriert', 'EL Tomatenmark', 'TL Oregano', 'Prise Salz', 'Prise Zucker', 'Prise Chili, nach belieben', 'Prise Pfeffer, aus der Mühle'];
let summePizzaBelag = [1.5, 2, 1, 1];
let zutatenPizzaBelag = ['Büffelmozzarella, in Scheiben', 'Blätter Basilikum, frisch', 'EL Olivenöl', 'Ganze Oliven'];


/* Function Pizza */ 
function calculateRecipe_Pizza() {
    console.log('calculate recipe');
    portions = document.getElementById('input_portions').value;
    console.log('Portionen: ', portions);
    document.getElementById('warning').innerHTML="";
    if (portions < 1) {
        return warning.innerHTML = "Portionsangaben nur von 1 bis 5"
    } else if (portions > 5) {
        return warning.innerHTML = "Portionsangaben nur von 1 bis 5"
    } else {
        calculateTeig();
        calculateSauce();
        calculateBelag();
    }
}

function calculateTeig() {
    let teigReference = document.getElementById('ingredientListTeig');
    teigReference.innerHTML = '';
    for (let i = 0; i < summePizzaTeig.length; i++) {
        teigReference.innerHTML += 
        `<li>${summePizzaTeig[i] * portions} ${zutatenPizzaTeig[i]}</li>`;
    }
}

function calculateSauce() {
    let sauceReference = document.getElementById('ingredientListSauce');
    sauceReference.innerHTML = '';
    for (let i = 0; i < summePizaSauce.length; i++) {
        sauceReference.innerHTML += 
        `<li>${summePizaSauce[i] * portions} ${zutatenPizzaSauce[i]}</li>`;
    }
}

function calculateBelag() {
    let belagReference = document.getElementById('ingredientListBelag');
    belagReference.innerHTML = '';
    for (let i = 0; i < summePizzaBelag.length; i++) {
        belagReference.innerHTML += 
        `<li>${summePizzaBelag[i] * portions} ${zutatenPizzaBelag[i]}</li>`;
    }
}
