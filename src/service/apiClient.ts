import axios from "axios";
import { IAnnonce, IGetAnnoncesResponse } from "../models";
export const getAnnonces = async () => {
  const response = await axios.get("https://localhost:7262/api/annonces");
  const annonces = response.data || [];
  return annonces;
};
