
export default class CompteBancaire {
    constructor(nom, solde) {
        this.nom = nom;
        this.solde = solde;
    }
    ajout(montant) {
        this.solde += montant;
    }
    retrait(montant) {
        this.solde -= montant;
        if (this.solde < 0) {
            this.solde+=montant
            throw new Error("Le solde du compte est insuffisant");
            
        }
    }
        virement(cible, montantVirement) {
            this.retrait(montantVirement);
            cible.ajout(montantVirement);
            if (this.solde < 0) {
                this.ajout(montantVirement);
                cible.retrait(montantVirement);
                throw new Error("Le solde du compte est insuffisant");
                
            }
        }
    } 
