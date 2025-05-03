import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  city: string;
  searchHistory: string[];
}

const initialState: WeatherState = {
  city: "Chittagong",
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
        if (state.searchHistory.length > 5) {
          state.searchHistory.pop();
        }

      }
    },
  },
});

export const { setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
