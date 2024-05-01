let boris = document.querySelector('.boris-cost');
let parsedBoris = parseFloat(boris.innerHTML);

let dimaCost = document.querySelector('.dima-cost');
let parsedDimaCost = parseFloat(dimaCost.innerHTML);
let dimaLevel = document.querySelector(".dima-level");
let dimaIncrease = document.querySelector(".dima-increase");
let parsedDimaIncrease = parseFloat(dimaIncrease.innerHTML);

let dimadoublegCost = document.querySelector('.dimadoubleg-cost');
let parsedDimadoublegCost = parseFloat(dimadoublegCost.innerHTML);
let dimadoublegLevel = document.querySelector(".dimadoubleg-level");
let dimadoublegIncrease = document.querySelector(".dimadoubleg-increase");
let parsedDimadoublegIncrease = parseFloat(dimadoublegIncrease.innerHTML);

let dogTMCost = document.querySelector('.dogTM-cost');
let parsedDogTMCost = parseFloat(dogTMCost.innerHTML);
let dogTMLevel = document.querySelector(".dogTM-level");
let dogTMIncrease = document.querySelector(".dogTM-increase");
let parsedDogTMIncrease = parseFloat(dogTMIncrease.innerHTML);

let opcText = document.getElementById("opc-text")
let opsText = document.getElementById("ops-text")

let opc = 1;

let ops = 0;


function incrementBoris() {
    boris.innerHTML = Math.round(parsedBoris += opc);
}

function buyDima() {
    if (parsedBoris >= parsedDimaCost) {
        boris.innerHTML = Math.round(parsedBoris -= parsedDimaCost);

        dimaLevel.innerHTML ++;

        parsedDimaIncrease = parseFloat((parsedDimaIncrease * 1.03).toFixed(2));
        dimaIncrease.innerHTML = parsedDimaIncrease;
        opc += parsedDimaIncrease;

        parsedDimaCost *= 1.18;
        dimaCost.innerHTML = Math.round(parsedDimaCost)
    }
}

function buyDimadoubleg() {
    if (parsedBoris >= parsedDimadoublegCost) {
        boris.innerHTML = Math.round(parsedBoris -= parsedDimadoublegCost);

        dimadoublegLevel.innerHTML ++;

        parsedDimadoublegIncrease = parseFloat((parsedDimadoublegIncrease * 1.03).toFixed(2));
        dimadoublegIncrease.innerHTML = parsedDimadoublegIncrease;
        ops += parsedDimadoublegIncrease;

        parsedDimadoublegCost *= 1.18;
        dimadoublegCost.innerHTML = Math.round(parsedDimadoublegCost)
    }
}

function buyDogTM() {
    if (parsedBoris >= parsedDogTMCost) {
        boris.innerHTML = Math.round(parsedBoris -= parsedDogTMCost);

        dogTMLevel.innerHTML ++;

        parsedDogTMIncrease = parseFloat((parsedDogTMIncrease * 1.03).toFixed(2));
        dogTMIncrease.innerHTML = parsedDogTMIncrease;
        ops += parsedDogTMIncrease;

        parsedDogTMCost *= 1.18;
        dogTMCost.innerHTML = Math.round(parsedDogTMCost)
    }
}

setInterval(() => {
    parsedBoris += ops / 10
    boris.innerHTML = Math.round(parsedBoris)
    opcText.innerHTML = Math.round(opc)
    opsText.innerHTML = Math.round(ops)
}, 100)