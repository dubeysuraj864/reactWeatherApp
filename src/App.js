import cloud from "./cloud.png";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const[lat, setLat] = useState([]);
  const[lon, setLon] = useState([]);
  const[data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {

      navigator.geolocation.getCurrentPosition(
        function(position){
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        });

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&limit=0&lang=en&appid=dbbedde9ee53a9bcac9ac6dc3d629413`);

        const data = await response.json();
        setData(data);
       
    }


    fetchData();

  },[lat, lon])
   console.log("lat:", lat);
    console.log("lon:", lon);
    console.log(data)


  return (
    <div className="App">
      <h1>Weather App</h1>

      <div className="container">
        {/* <input
          type="text"
          defaultValue="Delhi"
          onChange={(event) => {
            // setSearch(event.target.value);
          }}
        /> */}
      </div>
    

      <div className="weather-img">
        <img className="cloud-1" src={cloud} alt="Cloud" />
        <img className="cloud-2" src={cloud} alt="Cloud" />
      </div>
      <div className="location">{data.name}</div>
      <div className="temp">
       0 °Celsius <br />{" "}
        {( 0 * (9 / 5) + 32).toFixed(2)} °Fahrenheit
      </div>
      {
        (!data) ? (<p>No data found</p>): (
        <div className="details">
          {/* <div className="wind">Wind: {data.main.temp} mph</div> */}
        </div>
        )
      }
    
    </div>
  );
}

export default App;
