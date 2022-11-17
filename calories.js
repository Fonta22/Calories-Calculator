// =((10*B12)+(6,25*$B$13)-(5*18)+5)*1,375+400

/*const caloricFactor = [
    1.2,    // no sport
    1.375,  // 1 to 3 days
    1.55,   // 3 to 5 days
    1.725,  // 6 to 7 days
    1.9     // 2h per day
]*/

function calculateCalories() {
    // Text Inputs
    const mass = document.getElementById('mass-inp').value;
    const height = document.getElementById('height-inp').value;

    // Select
    const caloricFactor = document.getElementById('sport-select').value;

    // Checkboxes
    const romanian = document.getElementById('romanian-check').checked;
    const russian = document.getElementById('russian-check').checked;

    let calories = ((10 * mass) + (6.25 * height) - (5 * 18) + 5) * caloricFactor + 400;
    
    if (romanian) calories = calories * 3;

    if (russian) calories = calories * 4;


    cal = Math.round(calories);
    kcal = Math.round((calories / 1000) * 10) / 10;
    kj = Math.round((calories * .004184) * 10) / 10;

    console.log(cal + ' cal');
    console.log(kcal + ' kcal');
    console.log(kj + ' KJ');

    document.getElementById('cal').innerText = cal;
    document.getElementById('kcal').innerText = kcal;
    document.getElementById('kj').innerText = kj;
}