import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAnnonce } from "../../models/index";

export interface AnnonceState {
  items: IAnnonce[];
}

const initialState: AnnonceState = {
  items: [],
};

export const annonceSlice = createSlice({
  name: "annonceSlice",
  initialState,
  reducers: {
    setState:(state,action: PayloadAction<AnnonceState>) =>{
    return action.payload
    },
    addAnnonce: (state, action: PayloadAction<IAnnonce>) => {
      state.items.push(action.payload);
    },
    removeAnnonce: (state, action: PayloadAction<number>) => {
      const annonceId = action.payload;
      state.items = state.items.filter((annonce) => annonce.id != annonceId);
    },
  },
});
