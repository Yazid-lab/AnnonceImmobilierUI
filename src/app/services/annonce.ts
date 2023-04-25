import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAnnonce } from "../../models/index";

export const annonceApi = createApi({
  reducerPath: "annonceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7262/api/" }),
  tagTypes: ["Annonces"],
  endpoints: (build) => ({
    getAnnonces: build.query<IAnnonce[], void>({
      query: () => "annonces",
      providesTags: ["Annonces"],
    }),
    getAnnonce: build.query<IAnnonce, number>({
      query: (id) => `annonces/${id}`,
    }),
    deleteAnnonce: build.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `annonces/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Annonces"],
    }),
    addAnnonce: build.mutation<number, Partial<IAnnonce>>({
      query: (body) => ({
        url: "annonces",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Annonces"],
    }),
  }),
});

export const {
  useGetAnnoncesQuery,
  useGetAnnonceQuery,
  useDeleteAnnonceMutation,
  useAddAnnonceMutation,
} = annonceApi;
