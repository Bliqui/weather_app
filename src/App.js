import './App.css';
import CityInfo from "./Components/CityInfo";
import React, {useState} from "react";
import {callAPI} from "./Helpers/API";
import clouds from './img/clouds-bottom-right.png';

function App() {
    const [city, setCity] = useState('Which city weather are you interested in?');
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

    const inputClearHandler = () => {
        city === 'Which city weather are you interested in?' && setCity('')
    };

    return (
        <div className={'app'}>
            <div className={'appWrapper'}>
                <h1 className={'greetingText'}>Good day...</h1>
                <input
                    className={'cityNameInput'}
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    onClick={inputClearHandler}
                    value={city}
                    onKeyPress={findCityHandler}
                />
                {Object.keys(aboutCity).length === 0 ? null : (<CityInfo {...aboutCity}/>)}
                <img className={'cloudsBottomRight'} src={clouds} alt="clouds"/>
            </div>
        </div>
    );
}


export default App;