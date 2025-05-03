import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setCity } from "../store/weatherSlice";
import { useGetWeatherByCityQuery } from "../store/weatherApi";

const SearchBar = () => {
    const dispatch = useDispatch();
    const city = useSelector((state: RootState) => state.weather.city);
    const history = useSelector((state: RootState) => state.weather.searchHistory);
    const [input, setInput] = useState(city);

    const { data } = useGetWeatherByCityQuery(city);

    const handleSearch = () => {
        if (input.trim()) {
            dispatch(setCity(input.trim()));
        }
    };

    

    console.log("Weather Data:", data);

    return (
        <div className="flex flex-col items-center gap-4 mt-10">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="px-4 py-2 border rounded text-black"
                    placeholder="Enter city name"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Search
                </button>
            </div>
            <div className="mt-0.5">
                <h3 className="text-sm text-gray-400 mb-1 text-center">Recent Searches:</h3>
                <ul className="flex gap-2 flex-wrap text-sm text-gray-200 ">
                    {history.map((h, i) => (
                        <li
                            key={i}
                            className="bg-gray-600 px-3 py-1 rounded cursor-pointer hover:bg-gray-500"
                            onClick={() => {
                                dispatch(setCity(h));
                                setInput(h); 
                            }}
                        >
                            {h}
                        </li>
                    ))}
                </ul>
            </div>

            
        </div>
    );
};

export default SearchBar;
