import { createSlice } from "@reduxjs/toolkit";
import { IApartmentState } from "./models";
import { RootState } from "@/redux/store";
import { selectedApartmentMock } from "@/__mocks__";

export const initialState: IApartmentState = {
  listOfApartments: [],
  selectedStartDate: null,
  selectedEndDate: null,
  status: "idle",
  selectedApartment: selectedApartmentMock
};

export const apartmentSlice = createSlice({
  name: "apartment",
  initialState,
  reducers: {
    updateValuePerNight: (state, action) => {
      const newValuePerNight = action.payload;
      if (state.selectedApartment) {
        const updatedApartment = {
          ...state.selectedApartment.apartment,
          pricePerNight: newValuePerNight,
        };
        const updatedSelectedApartment = {
          ...state.selectedApartment,
          apartment: updatedApartment,
        };
        state.selectedApartment = updatedSelectedApartment;
      }
    },
    updateSelectedDates: (state, action) => {
      state.selectedStartDate = action.payload.startDateFormatted;
      state.selectedEndDate = action.payload.endDateFormatted;
    },
  },
});

export const { updateValuePerNight, updateSelectedDates } =
  apartmentSlice.actions;

export const getSelectedApartmentState = (state: RootState) =>
  state.apartmentReducer.selectedApartment;

export const getSelectedStartDateState = (state: RootState) =>
  state.apartmentReducer.selectedStartDate;

export const getSelectedEndDateState = (state: RootState) =>
  state.apartmentReducer.selectedEndDate;

export const getStatusState = (state: RootState) =>
  state.apartmentReducer.status;

export default apartmentSlice.reducer;
