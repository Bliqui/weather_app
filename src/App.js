import './App.css';
import CityInfo from "./Components/CityInfo";
import React, {useState} from "react";
import {callAPI} from "./Helpers/API";

function App() {
    const [city, setCity] = useState('');
    let [aboutCity, setCityInfo] = useState({});

    const findCityHandler = e => {
        if (e.key === 'Enter') {
            callAPI.getWeather(city)
                .then(response => {
                    const {name, main: {temp}, main: {feels_like}, main: {temp_min}, main: {temp_max}} = response.data;
                    const updateState = {
                        name,
                        temp: Math.ceil(temp),
                        tempMin: Math.ceil(temp_min),
                        tempMax: Math.ceil(temp_max),
                        feelsLike: Math.ceil(feels_like)
                    };
                    setCityInfo(updateState);
                }).then(() => setCity(''));
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
                       onKeyPress={findCityHandler}
                />
                {Object.keys(aboutCity).length === 0 ? null : (<CityInfo {...aboutCity}/>)}
            </div>
        </div>
    );
}

export default App;