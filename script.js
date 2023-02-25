function selectBar() {
  //   alert("you have changed");
  let bar = document.getElementById("bar").value;
  document.getElementById("barWeight").innerText = bar;
  document.getElementById("barWeightKilos").innerText = 0.454 * +bar;
}

function selected45Pound() {
  //   alert("you have changed");
  let select45pounds = document.getElementById("select45pounds").value;
  document.getElementById("numberof45s").innerText = 45 * (+select45pounds * 2);
}
