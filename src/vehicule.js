export default class Vehicule{
    constructor(nomVehicule,nbrRoue,vitesse){
        this.nomVehicule= nomVehicule;
        this.nbrRoue = nbrRoue;
        this.vitesse=vitesse;
        
    }
    detect(){
        return this.nomVehicule;
    }
    boost(){
        this.vitesse+=50;
        return this.vitesse
    }
    plusRapide(Vehicule){
        if (this.vitesse>Vehicule.vitesse){
            return `"le vehicule" ${this.nomVehicule}"est le plus rapide."`
        }else if (this.vitesse<vehicule.vitesse){
            return`"le vehicule" ${vehicule.vitesse}"est le plus rapide."`
        }else{
            return "les deux véhicules ont la même vitesse."
        }
    }
}