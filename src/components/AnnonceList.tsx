import React from "react";
import { IAnnonce } from "../models";
import AnnonceListItem from "./AnnonceListItem";

const AnnonceList = ({
  annonces,
  isLoading,
}: {
  annonces: IAnnonce[] | undefined;
  isLoading: boolean;
}) => {
  return (
    <div className="annonceList">
      {annonces === undefined || isLoading ? (
        <h1>no ads found</h1>
      ) : (
        annonces?.map((annonce) => (
          <AnnonceListItem key={annonce.id} annonce={annonce} />
        ))
      )}
    </div>
  );
};

export default AnnonceList;
