let boris = document.querySelector('.boris-cost');
let parsedBoris = parseFloat(boris.innerHTML);

let dimaCost = document.querySelector('.dima-cost');
let parsedDimaCost = parseFloat(dimaCost.innerHTML);
let dimaLevel = document.querySelector(".dima-level");
let dimaIncrease = document.querySelector(".dima-increase");
let parsedDimaIncrease = parseFloat(dimaIncrease.innerHTML);

let opc = 1;


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