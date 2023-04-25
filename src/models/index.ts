export interface IAnnonce {
  id: number;
  titre: string;
  description: string;
  prix: number;
  superficie: number;
  datePublication: Date;
  nbPieces: number;
  photos: Photo[];
  adresse: Adresse;
  utilisateurId: number;
}
interface Photo {
  id: number;
  url: string;
  description: string;
}
interface Adresse {
  rue: string;
  ville: string;
  codePostal: string;
  pays: string;
  latitude: number;
  longitude: number;
}

export interface IGetAnnoncesResponse{
    data: IAnnonce[]
}