import cloud from "./cloud.png";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState({});
  const [search, setSearch] = useState("Delhi");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&limit=0&lang=en&appid=dbbedde9ee53a9bcac9ac6dc3d629413`
      );

      const data = await response.json();
      setCity(data);
      console.log(data);
    };
    getData();
  }, [setSearch]);

  return (
    <div className="App">
      <h1>Weather App</h1>

      <div className="container">
        <input
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      <div className="weather-img">
        <img className="cloud-1" src={cloud} alt="Cloud" />
        <img className="cloud-2" src={cloud} alt="Cloud" />
      </div>
      <div className="location">{search}</div>
      <div className="temp">
        {city.main.temp} °Celsius <br />{" "}
        {(city.main.temp * (9 / 5) + 32).toFixed(2)} °Fahrenheit
      </div>
      {!city ? (
        <p>No data found</p>
      ) : (
        <div className="details">
       
          <div className="weather-detail">Weather: {city.weather[0].main}</div>
        <div className="wind">Wind: {city.wind.speed}  mph</div>
        </div>
      )}
    </div>
  );
}

export default App;
