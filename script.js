//Disable holding Enter
/*$(".button").keydown(function(event) {
  if (event.which == 13) {
    event.preventDefault();
  }
});*/

//Display numbers in currency format. (en-US, USD)
function commas(x) {
  return x.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

//Variables
var money = 0;
var bonus = 0;
var time = 5000;
var numClick = 0.01;

//Find A Penny button
function mainClick(number) {
  money = +(money + number).toFixed(2);
  document.getElementById("money").innerHTML = commas(money);
}

//Upgrades
var upgrade0 = { Cost: 1, btn: "level0Cost", bump: 1.05, bonus: 0.01 };
var upgrade1 = { Cost: 10, btn: "level1Cost", bump: 1.1, bonus: 0.01 };
var upgrade2 = { Cost: 100, btn: "level2Cost", bump: 1.2, bonus: 0.05 };
var upgrade3 = { Cost: 1000, btn: "level3Cost", bump: 1.3, bonus: 0.1 };
var upgrade4 = { Cost: 10000, btn: "level4Cost", bump: 1.4, bonus: 1.0 };
var upgrade5 = { Cost: 100000, btn: "level5Cost", bump: 1.5, bonus: 5.0 };
var upgrade6 = { Cost: 1000000, btn: "level6Cost", bump: 1.6, bonus: 10.0 };
var upgrade7 = { Cost: 112358.13, btn: "level7Cost", bump: 1.1, bonus: 100 };

//Auto-Earnings Upgrades
function buyLevel(upgrade) {
  if (money >= upgrade.Cost) {
    bonus = +(upgrade.bonus + bonus).toFixed(2);
    money = +(money - upgrade.Cost).toFixed(2);
    upgrade.Cost = +(upgrade.bump * upgrade.Cost).toFixed(2);
    document.getElementById("bonus").innerHTML = commas(bonus);
    document.getElementById("money").innerHTML = commas(money);
  }
  var nextCost = upgrade.Cost;
  document.getElementById(upgrade.btn).innerHTML = commas(nextCost);
}

//Click-Rate Upgrade
function clickRate(upgrade) {
  if (money >= upgrade.Cost) {
    numClick = +(upgrade.bonus + numClick).toFixed(2);
    money = +(money - upgrade.Cost).toFixed(2);
    upgrade.Cost = +(upgrade.bump * upgrade.Cost).toFixed(2);
    document.getElementById("rate").innerHTML = numClick.toFixed(2);
    document.getElementById("money").innerHTML = commas(money);
  }
  var nextCost = upgrade.Cost;
  document.getElementById(upgrade.btn).innerHTML = commas(nextCost);
}

//Speed Up Auto-Earnings Upgrade
function decrTime(upgrade) {
  if (money >= upgrade.Cost && time > 1000) {
    time = time - upgrade.bonus;
    money = +(money - upgrade.Cost).toFixed(2);
    upgrade.Cost = +(upgrade.bump * upgrade.Cost).toFixed(2);
    document.getElementById("time").innerHTML = time / 1000;
    document.getElementById("money").innerHTML = commas(money);
  }
  var nextCost = upgrade.Cost;
  document.getElementById(upgrade.btn).innerHTML = commas(nextCost);
}

//Updates all counting
setInterval(function() {
  mainClick(bonus);
}, time);