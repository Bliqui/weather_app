import './App.css';
import CityInfo from "./Components/CityInfo";
import React, {useState} from "react";
import axios from "axios";

function App() {
    const [city, setCity] = useState('');
    let [cityInfo, setCityInfo] = useState({});

    const findCity = e => {
        if (e.key === 'Enter') {
            axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=53a18b60e8fbf51e04b52d0e4697faa7')
                .then(response => {
                    const {name, main: {temp}, main: {feels_like}, main: {temp_min}, main: {temp_max}} = response.data;
                    const updateState = {
                        name,
                        temp,
                        tempMin: temp_min,
                        tempMax: temp_max,
                        feelsLike: feels_like
                    };
                    setCityInfo(updateState);
                })
        }
    };

    return (
        <div className='App'>
            <div className={'App-wrapper'}>
                <h1>Good day...</h1>
                <h2>Which city weather are you interested in?</h2>
                <input type="text"
                       onChange={(e) => setCity(e.target.value)}
                       value={city}
                       onKeyPress={findCity}
                />
                {Object.keys(cityInfo).length === 0 ? null : (<CityInfo {...cityInfo}/>)}
            </div>
        </div>
    );
}

export default App;