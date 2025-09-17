let button = document.querySelector("button");
let quantite = document.querySelector("#quantite");
let prix = document.querySelector("#prix_ht");
let nom = document.querySelector("#nom_produit");
let form = document.querySelector("form");
let resultat = document.querySelector("#resultat");

form.addEventListener("submit", function (event) {
    event.preventDefault();
})
button.addEventListener("click", function (event) {
    if (quantite.value == "" || prix.value == "" || nom.value == "") {
        form.reset();
        resultat.innerHTML="Un ou plusieurs champs ne sont pas remplis"
    }
    else {
        quantite=parseInt(quantite,10);
        prix=parseInt(prix,10);
        result = quantite * prix;
        resultat.innerHTML=result.value
    }
    
})

