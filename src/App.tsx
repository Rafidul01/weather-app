import { useGetWeatherByCityQuery } from "./store/weatherApi";

function App() {
    const { data } = useGetWeatherByCityQuery("Dhaka");
    console.log("Weather Data:", data);
  return (
    <div>

    </div>
  );
}

export default App;
