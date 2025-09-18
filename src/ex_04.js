export default class Imc{
    constructor(nom,poids,taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }
    calculImc(){
        return this.poids/(this.taille*this.taille);
    }
    
    display(){
        console.log (`${this.nom},(${this.poids}kg, ${this.taille}m) a un IMC de: ${this.calculImc().toFixed(2)}`)
    }
}
