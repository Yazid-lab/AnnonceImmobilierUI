import React from "react";
import { IAnnonce } from "../models";
import { Link } from "react-router-dom";

const AnnonceListItem = ({ annonce }: { annonce: IAnnonce }) => {
  return (
    <div className="annonce">
      <div className="info">
        <div className="image-container">
          <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" />
        </div>
        <h1>{annonce.titre}</h1>
        <p>Desription: {annonce.description}</p>
        <p>Nombre de pieces: {annonce.nbPieces}</p>
        <Link to={`/details/${annonce.id}`}>
          <button>Plus de détails</button>
        </Link>
      </div>
    </div>
  );
};

export default AnnonceListItem;
