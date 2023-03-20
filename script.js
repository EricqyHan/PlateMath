function selectBar() {
  let bar = document.querySelector("#bar").value;
  document.getElementById("barWeight").innerText = bar;
  document.getElementById("barWeightKilos").innerText = Math.ceil(0.454 * +bar);
}

document.querySelector("#calculateBar").addEventListener("click", calcBar);

function calcBar() {
  let bar = Number(document.getElementById("bar").value);
  let fiftyFive =
    Number(document.getElementById("plate55pounds").value) * 55 * 2;
  let fortyFive =
    Number(document.getElementById("plate45pounds").value) * 45 * 2;
  let thirtyFive =
    Number(document.getElementById("plate35pounds").value) * 35 * 2;
  let twentyFive =
    Number(document.getElementById("plate25pounds").value) * 25 * 2;
  let fifteen = Number(document.getElementById("plate15pounds").value) * 15 * 2;
  let ten = Number(document.getElementById("plate10pounds").value) * 10 * 2;
  let five = Number(document.getElementById("plate5pounds").value) * 5 * 2;
  let twohalf =
    Number(document.getElementById("plate2halfpounds").value) * 2.5 * 2;
  document.getElementById("numberof45s").innerText =
    bar +
    fiftyFive +
    fortyFive +
    thirtyFive +
    twentyFive +
    fifteen +
    ten +
    five +
    twohalf;
}
