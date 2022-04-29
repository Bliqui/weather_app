import "./App.css";
import CityInfo from "./Components/CityInfo";
import React, {useState} from "react";
import {callAPI} from "./Helpers/API";
import clouds from "./img/clouds-bottom-right.png";
import cloud from "./img/single-cloud.png";
import Loader from "../src/Components/Loader"

function App() {
    const [city, setCity] = useState('');
    const [aboutCity, setCityInfo] = useState({});
    const [mistakeAlert, setMistakeAlert] = useState(false);
    const [loaderFlag, setLoaderFlag] = useState(false);
    const [cityFlag, setCityFlag] = useState(false);

    const findCityHandler = e => {
        if (e.key === 'Enter') {
            setCityFlag(false);
            setLoaderFlag(true);
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
                }).then(() => setCity(''))
                .catch(() => alert('Check if you entered the city name correctly.'))
                .finally(() => {
                    setLoaderFlag(false )
                    setCityFlag(true)
                });
        }
    };

    return (
        <div className={'app'}>
            <div className={'appWrapper'}>
                <h1 className={'greetingText'}>Good day...</h1>
                <input
                    className={'cityNameInput'}
                    placeholder={'Which city weather are you interested in?'}
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    onKeyPress={findCityHandler}
                />

                {loaderFlag ? <Loader /> : null}
                {cityFlag ? (<CityInfo {...aboutCity}/>) : null}

                <img className={"cloudsBottomRight"} src={clouds} alt="clouds"/>
                <img className={"cloudTopLeft"} src={cloud} alt="cloud"/>
            </div>
        </div>
    );
}


export default App;