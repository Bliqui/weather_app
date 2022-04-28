import './App.css';
import CityInfo from "./Components/CityInfo";
import React, {useState} from "react";
import {callAPI} from "./Helpers/API";
import styled from "styled-components";

function App() {
    const [city, setCity] = useState('');
    let [aboutCity, setCityInfo] = useState({});

    const findCityHandler = e => {
        if (e.key === 'Enter') {
            callAPI.getWeather(city)
                .then(response => {
                    const {
                        name, main: {temp}, main: {feels_like},
                        main: {temp_min}, main: {temp_max},
                        weather: [{main}], wind: {speed}
                    } = response.data;
                    const updateState = {
                        name,
                        temp: Math.ceil(temp),
                        tempMin: Math.ceil(temp_min),
                        tempMax: Math.ceil(temp_max),
                        feelsLike: Math.ceil(feels_like),
                        weatherInfo: main,
                        windSpeed: speed
                    };
                    setCityInfo(updateState);
                }).then(() => setCity(''));
        }
    };

    return (
        <div>
            <div>
                <h1>Good day...</h1>
                <h2>Which city weather are you interested in?</h2>
                <input type="text"
                       onChange={(e) => setCity(e.target.value)}
                       value={city}
                       onKeyPress={findCityHandler}
                />
                {Object.keys(aboutCity).length === 0 ? null : (<CityInfo {...aboutCity}/>)}
            </div>
        </div>
    );
}


export default App;