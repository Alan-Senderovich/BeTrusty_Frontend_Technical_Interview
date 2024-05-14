import { apartmentData } from "@/data";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "https://api.jsonserve.com/CoJ5Lf";

export const fetchApartmentData = createAsyncThunk(
  "apartment/fetchApartmentData",
  async (id: string, { rejectWithValue }) => {
    try {
      const apartment = apartmentData.find((apartment) => apartment.id === id);
      // Puedes acceder a los datos de la siguiente manera
      if (apartment) {
        return apartment;
      } else {
        throw new Error("Apartment not found");
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
