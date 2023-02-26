function selectBar() {
  //   alert("you have changed");
  let bar = document.getElementById("bar").value;
  document.getElementById("barWeight").innerText = bar;
  document.getElementById("barWeightKilos").innerText = 0.454 * +bar;
}

// function selected45Pound() {
//   //   alert("you have changed");
//   let select45pounds = document.getElementById("select45pounds").value;
//   document.getElementById("numberof45s").innerText = 45 * (+select45pounds * 2);
// }

document.querySelector("#calculateBar").addEventListener("click", calcBar);

// function calcBar() {
//   let bar = Number(document.getElementById("bar").value);
//   let fortyFive =
//     Number(document.getElementById("plate45pounds").value) * 45 * 2;
//   // document.getElementById("numberof45s").innerText = +bar;
//   document.getElementById("numberof45s").innerText = fortyFive + bar;
//   let thirtyFive =
//     Number(document.getElementById("plate35pounds").value) * 35 * 2;
//   // document.getElementById("numberof45s").innerText = +bar;
//   document.getElementById("numberof45s").innerText = thirtyFive + bar;
// }

function calcBar() {
  let bar = Number(document.getElementById("bar").value);
  let fortyFive =
    Number(document.getElementById("plate45pounds").value) * 45 * 2;
  //   document.getElementById("numberof45s").innerText = fortyFive;
  let thirtyFive =
    Number(document.getElementById("plate35pounds").value) * 35 * 2;
  let twentyFive =
    Number(document.getElementById("plate25pounds").value) * 25 * 2;
  // document.getElementById("numberof45s").innerText = thirtyFive;
  document.getElementById("numberof45s").innerText =
    bar + fortyFive + thirtyFive + twentyFive;
}
