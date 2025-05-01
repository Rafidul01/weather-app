import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherData } from "../typs/weather";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY; 
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.openweathermap.org/data/2.5/" }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<WeatherData, string>({
      query: (city: string) => `weather?q=${city}&appid=${API_KEY}&units=metric`,
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApi;
