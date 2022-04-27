import axios from "axios";

const API = () => {
    const instance = axios.create({baseURL: 'https://api.openweathermap.org/data/2.5/weather'})
    const key = process.env.REACT_APP_KEY;
    return {
        getWeather(city) {
            return instance.get(`?q=${city}&units=metric&appid=${key}`)
        }
    };
};

const callAPI = API();

export {callAPI};