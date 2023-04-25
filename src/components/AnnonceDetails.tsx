import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteAnnonceMutation,
  useGetAnnonceQuery,
} from "../app/services/annonce";

const AnnonceDetails = () => {
  let { id } = useParams();
  const idNumber = id ? parseInt(id) : -1;
  const [deleteAnnonce, { isLoading: isDeleting }] = useDeleteAnnonceMutation();
  const navigate = useNavigate();
  const queryResponse = useGetAnnonceQuery(idNumber);
  const annonce = queryResponse.data;
  function handleDelete(id: number | undefined) {
    if (id !== undefined) {
      deleteAnnonce(id).then(() => navigate("/"));
    }
  }
  return (
    <div className="annonce info annonceList">
      <h1>{annonce?.titre}</h1>
      <p>Desription: {annonce?.description}</p>
      <p>Nombre de pieces: {annonce?.nbPieces}</p>{" "}
      <button onClick={() => handleDelete(annonce?.id)}>
        Supprimer cette annonce
      </button>
    </div>
  );
};
export default AnnonceDetails;
