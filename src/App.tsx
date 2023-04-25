import React, { useEffect, useState } from "react";
import "./App.css";
import { useGetAnnoncesQuery } from "./app/services/annonce";
import AnnonceList from "./components/AnnonceList";
import { Link, Route, Routes } from "react-router-dom";
import AnnonceDetails from "./components/AnnonceDetails";
import AnnonceForm from "./components/AnnonceForm";
function App() {
  const { data: annonces, error, isLoading } = useGetAnnoncesQuery();

  return (
    <div>
      <header>
        <Link to="/">Acceuil</Link>
        <Link to="/addAnnonce">Nouvelle Annonce</Link>
      </header>
      <Routes>
        <Route
          path="/*"
          element={<AnnonceList annonces={annonces} isLoading={isLoading} />}
        />
        <Route path="/details/:id/" element={<AnnonceDetails />} />
        <Route path="/addAnnonce" element={<AnnonceForm />} />
      </Routes>
    </div>
  );
}

export default App;
