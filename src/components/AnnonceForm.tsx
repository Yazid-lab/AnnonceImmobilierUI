import React, { useState } from "react";
import { useAddAnnonceMutation } from "../app/services/annonce";
import { useNavigate } from "react-router-dom";
interface IformData {
  titre: string;
  description: string;
  superficie: number;
  nbPieces: number;
  datePublication: Date;
  adresse: {
    rue: string;
    ville: string;
    codePostal: string;
    pays: string;
    latitude: number;
    longitude: number;
  };
  utilisateurId: 1;
}
const AnnonceForm = () => {
  const initialValue: IformData = {
    titre: "",
    description: "",
    superficie: 0,
    nbPieces: 0,
    utilisateurId: 1,
    datePublication: new Date(),
    adresse: {
      rue: "",
      ville: "",
      codePostal: "",
      pays: "",
      latitude: 0,
      longitude: 0,
    },
  };
  const [addAnnonce, { isLoading }] = useAddAnnonceMutation();
  const [formData, setFormData] = useState<IformData>(initialValue);
  const navigate = useNavigate();
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAdresseInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      adresse: {
        ...prevFormData.adresse,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      datePublication: new Date(),
    }));
    await addAnnonce(formData);
    setFormData(initialValue);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="AnnonceForm">
      <label>
        Titre:
        <input
          type="text"
          name="titre"
          value={formData.titre}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Description: <br/>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Superficie:
        <input
          type="number"
          name="superficie"
          value={formData.superficie}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Nombre de pièces:
        <input
          type="number"
          name="nbPieces"
          value={formData.nbPieces}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Adresse:
        <br />
        Rue:
        <input
          type="text"
          name="rue"
          value={formData.adresse.rue}
          onChange={handleAdresseInputChange}
          required
        />
        <br />
        Ville:
        <input
          type="text"
          name="ville"
          value={formData.adresse.ville}
          onChange={handleAdresseInputChange}
          required
        />
        <br />
        Code postal:
        <input
          type="text"
          name="codePostal"
          value={formData.adresse.codePostal}
          onChange={handleAdresseInputChange}
          required
        />
        <br />
        Pays:
        <input
          type="text"
          name="pays"
          value={formData.adresse.pays}
          onChange={handleAdresseInputChange}
          required
        />
        <br />
        Latitude:
        <input
          type="number"
          name="latitude"
          value={formData.adresse.latitude}
          onChange={handleAdresseInputChange}
          required
        />
        <br />
        Longitude:
        <input
          type="number"
          name="longitude"
          value={formData.adresse.longitude}
          onChange={handleAdresseInputChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AnnonceForm;
