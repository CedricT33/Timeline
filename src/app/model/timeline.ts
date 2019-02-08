export class Timeline {
    id: number;
    nom: string;
    categorie: string;
    dateCreation: Date;
    dateMiseAJour: Date;

    constructor(id: number, nom: string, categorie: string, dateCreation: Date, dateMiseAJour: Date, nombreCartes: number) {
      this.id = id;
      this.nom = nom;
      this.categorie = categorie;
      this.dateCreation = dateCreation;
      this.dateMiseAJour = dateMiseAJour;
    }
  }


