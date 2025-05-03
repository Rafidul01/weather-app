import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useGetWeatherByCityQuery } from "../store/weatherApi";
import lodingImg from "../../public/load.gif";

const WeatherCard = () => {
  const city = useSelector((state: RootState) => state.weather.city);
  const { data, isLoading, error } = useGetWeatherByCityQuery(city);

  if (isLoading) return <div className="flex justify-center items-center h-[60vh]">
    <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
  </div>;
  if (error) return <div className="flex flex-col gap-8 justify-center items-center h-[60vh]">
    <img src={lodingImg} alt="Loading" className="w-20 h-20" />
    <p className="text-red-500 text-xl text-center">Something went wrong. <br /> Please try again with proper city name</p>
  </div>;

  const weather = data?.weather[0];

  return (
    <div className="flex justify-center items-center">
      <div className="mt-6 p-6 rounded-lg w-[300px] text-center border shadow-2xl dark:border-gray-400 backdrop-blur-md bg-white/30 dark:bg-gray-800/30">
        <h2 className="text-2xl font-bold dark:text-gray-400">{data?.name}</h2>
        <img
          className="mx-auto w-[90px] rounded-full dark:bg-gray-500 bg-blue-200 mt-4"
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather?.description}
        />
        <p className="text-xl mt-4 dark:text-gray-400">{weather?.main} ({weather?.description})</p>
        <p className="text-3xl font-bold mt-2 dark:text-gray-400">{Math.round(data?.main.temp ?? 0)}°C</p>
        <div className="mt-4 text-sm dark:text-gray-300">
          <p>Humidity: {data?.main.humidity}%</p>
          <p>Wind Speed: {data?.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
