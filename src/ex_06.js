export default class CompteBancaire {
    constructor(nom, solde) {
        this.nom = nom;
        this.solde = solde
    }
    ajout(x) {
        this.solde += x;
    }
    retrait(x) {
        this.solde -= x;
        if (this.solde < 0) {
            this.solde+=x
            throw new Error("Le solde du compte est insuffisant");
            
        }
    }
        virement(autreCompte, somme) {
            this.retrait(somme);
            autreCompte.ajout(somme);
            if (this.solde < 0) {
                this.ajout(somme);
                autreCompte.retrait(somme);
                throw new Error("Le solde du compte est insuffisant");
                
            }
        }
    } 