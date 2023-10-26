let product = 100 
let budget = prompt("hoeveel geld heb je?", 0);


let ResultP = document.getElementById("ResultParagraph");
if (product >= budget) {
  ResultP.innerHTML = ("helaas te weining geld");
  ResultP.style.color = "red";
}
else {
  ResultP.innerHTML = ("u heeft genoeg geld");
  ResultP.style.color = "green";
}