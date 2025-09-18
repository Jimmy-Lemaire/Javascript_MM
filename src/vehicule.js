export default class vehicule{
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
}