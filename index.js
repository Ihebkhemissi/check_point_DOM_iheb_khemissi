/*les fonction*/
let btnPlus = document.querySelectorAll(".plus");
let qte = document.querySelectorAll(".qte");
for (let i = 0; i < btnPlus.length; i++) {
     btnPlus[i].addEventListener("click", () => {
     qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
  });
}
let btnMoins = document.querySelectorAll(".moins");
let qteM = document.querySelectorAll(".qte");
for (let i = 0; i < btnMoins.length; i++) {

     btnMoins[i].addEventListener("click", () => {
         if(qteM[i].innerHTML >1)
     qteM[i].innerHTML = Math.abs(Number(qteM[i].innerHTML) - 1);
  });
}

/*total btn plus*/

let btnPlusT = document.querySelectorAll(".plus");
let prixTotal = document.querySelectorAll(".sp");
let prixUnit = document.querySelectorAll(".price");
let qteT = document.querySelectorAll(".qte");
//let Ttp = document.querySelector(".total-du-total");
for (let i = 0; i < btnPlusT.length; i++) {

     btnPlusT[i].addEventListener("click", () => {
     prixTotal[i].innerHTML = Number(qteT[i].innerHTML) *  Number(prixUnit[i].innerHTML) ;
      //Ttp.innerHTML = Number(Ttp.innerHTML) + Number(prixTotal[i].innerHTML);
      });
  
}

//to pay btn plus
let btnPlusTP = document.querySelectorAll(".plus");
let prixTotalTP = document.querySelectorAll(".sp");
let prixUnitTP = document.querySelectorAll(".unit");
let Ttp = document.querySelector(".total-du-total");
for (let i = 0; i < btnPlusTP.length; i++) {

     btnPlusTP[i].addEventListener("click", () => {
      Ttp.innerHTML = (Number(Ttp.innerHTML) + Number(prixTotal[i].innerHTML))- Number (prixUnitTP[i].innerHTML);
      });
  
}
