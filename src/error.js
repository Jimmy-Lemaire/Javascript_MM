export default class ErrorCustom {
    afficher(value) {
        if (value > 0) {
            console.log("Le virement a été réalisé avec succès")
        }
        if (value < 0) {
            throw new Error("Le solde du compte est insuffisant")
        }
    }
}