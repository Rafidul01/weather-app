import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useGetWeatherByCityQuery } from "../store/weatherApi";

const WeatherCard = () => {
  const city = useSelector((state: RootState) => state.weather.city);
  const { data, isLoading, error } = useGetWeatherByCityQuery(city);

  if (isLoading) return <p className="text-yellow-400 mt-4">Loading weather data...</p>;
  if (error) return <p className="text-red-500 mt-4">Error loading weather data.</p>;
  if (!data) return null;

  const weather = data.weather[0];
  
  return (
    <div className="flex justify-center items-center">
      <div className={`mt-6 p-6 rounded-lg w-[300px] text-center ${weather.main === "Clear" ? "bg-[#1ddbd8]" : weather.description === "few clouds" || weather.description === "scattered clouds" ? "bg-[#5f7b94]" : "bg-[#3d4d5c]" } border-2 border-gray-500 shadow-lg`}>
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <img
          className="mx-auto w-[90px] rounded-full bg-blue-300  mt-4"
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
        />
        <p className="text-xl">{weather.main} ({weather.description})</p>
        <p className="text-3xl font-bold mt-2">{Math.round(data.main.temp)}°C</p>
        <div className="mt-4 text-sm text-gray-300">
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind Speed: {data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
