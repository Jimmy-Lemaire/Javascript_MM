import './style.css'
import CompteBancaire from './ex_07.js'

const nom=document.getElementById("id_nom")
const create=document.getElementById("bt_create")
const compte=document.getElementById("id_compte")
const montant=document.getElementById("id_montant")
const crediter=document.getElementById("id_crediter")
const retirer=document.getElementById("id_retirer")
const source=document.getElementById("id_source")
const cible=document.getElementById("idCible")
const montantVirement=document.getElementById("id_montant_virement")
const virement=document.getElementById("id_virement")
const texte = document.getElementById("text_area")

const tabComptes = [];
create.addEventListener("click", function () {
    tabComptes.push(new CompteBancaire(nom.value, 0))
    console.log(tabComptes)
});
crediter.addEventListener("click", function () {
  for (const nCompte of tabComptes) {
    if (nCompte.nom==compte.value) {
      nCompte.solde += parseInt(montant.value);
      console.log(tabComptes)
    }
  }
})
try {
  retirer.addEventListener("click", function () {
    for (const nCompte of tabComptes) {
      if (nCompte.nom == compte.value) {
        solde.compte.retrait(parseInt(montant.value))
        console.log(tabComptes)
      }
    }
  })
} catch (error) {
  console.log("Le solde du compte n'est pas suffisant")
}