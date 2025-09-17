// class Bouteille{
//     constructor(nom_bouteille,contenance_bouteille,marque_bouteille,type_bouteille) {
//         this.nom = nom_bouteille;
//         this.contenance = contenance_bouteille;
//         this.marque = marque_bouteille;
//         this.type = type_bouteille;
//     }
// }
// const eau = new Bouteille("eau", 50, "vittel", "plastique");
// const soda = new Bouteille("canette coca", 33, "canette en alu");
// console.log(eau, soda);

class Habitation{
    //Constructeur
    constructor(nom_maison,largeur_maison,longueur_maison,nbrEtage_maison) {
        this.nom = nom_maison;
        this.largeur = largeur_maison;
        this.longueur = longueur_maison;
        this.nbrEtage = nbrEtage_maison;
    }
    //Méthode
    surface() {
        return this.largeur * this.longueur * this.nbrEtage;
    }
}

const villa = new Habitation("villa", 15, 8,5);
const maison = new Habitation("maison", 20, 12, 1);
const immeuble = new Habitation("immeuble", 200, 300, 15);
console.log(villa.surface());
console.log(maison.surface());
console.log(immeuble.surface());

console.log(maison.nom)

console.log("l'habitation :",maison.nom,"a une superficie de :",maison.surface(),"m2.")
console.log("l'habitation :",villa.nom,"a une superficie de :",villa.surface(),"m2.")
console.log("l'habitation :",immeuble.nom,"a une superficie de :",immeuble.surface(),"m2.")