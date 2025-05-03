import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  city: string;
  searchHistory: string[];
}

const initialState: WeatherState = {
  city: "Dhaka",
  searchHistory: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      const newCity = action.payload;
      state.city = newCity;

      
      if (!state.searchHistory.includes(newCity)) {
        state.searchHistory.unshift(newCity);

      }
    },
  },
});

export const { setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
