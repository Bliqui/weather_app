import React from "react";
import styled from "styled-components";

const CityInfo = ({name, temp, tempMin, tempMax, feelsLike, weatherInfo , windSpeed}) => {
    return (
        <CityInfoWrapper>
            <CityTempWrapper>
                <CityName>{name}</CityName>
                <Weather>
                    <CityActualTemp>Temperature: <br/> {temp}°C</CityActualTemp>
                </Weather>
                <CityMinMaxTemp>
                    <CityMinTemp>Min: {tempMin}°C</CityMinTemp>
                    <CityMaxTemp>Max: {tempMax}°C</CityMaxTemp>
                </CityMinMaxTemp>
            </CityTempWrapper>
            <CityWindWrapper>
                <WeatherInfo>{weatherInfo}</WeatherInfo>
                <TemperatureFeelsLike>Feels Like: <br/> {feelsLike}°C</TemperatureFeelsLike>
                <WindSpeed>wind speed: <br/> {windSpeed}km/h </WindSpeed>
            </CityWindWrapper>
        </CityInfoWrapper>
    );
};


const CityInfoWrapper = styled.div`
  display: flex;
`

const CityTempWrapper = styled.div`
  height: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 20%);
  border: #000 solid 0.5px;
  border-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  display: flex;
  flex-direction: column;
  text-align: center;

  font-family: sans-serif;
  text-transform: capitalize;
`
const CityName = styled.div`
  height: 80px;
  width: 100%;
  border-bottom: 1px black solid;
  font-size: 35px;

  display: flex;
  align-items: center;
  justify-content: center;
`
const Weather = styled.div`
  display: flex;
  flex-direction: column;
`

const CityActualTemp = styled.div`
  font-size: 35px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.5px black solid;
`

const WeatherInfo = styled.div`
  font-size: 30px;
  height: 80px;
  font-family: sans-serif;
  border-bottom: 1px solid black;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

const CityMinMaxTemp = styled.div`
  display: flex;
  justify-content: space-between;
`

const CityMinTemp = styled.div`
  width: 50%;
  height: 80px;
  font-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px black solid;
`

const CityMaxTemp = styled.div`
  width: 50%;
  height: 80px;
  font-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
`

//

const CityWindWrapper = styled.div`
  height: auto;
  width: 250px;
  background-color: rgba(0, 0, 0, 20%);
  border: #000 solid 0.5px;
  border-left: none;
  border-radius: 15px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  display: flex;
  flex-direction: column;
  text-align: center;

  font-family: sans-serif;
  text-transform: capitalize;
`

const TemperatureFeelsLike = styled.div`
  height: 80px;
  font-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px black solid;
`

const WindSpeed = styled.div`
  height: 80px;
  font-size: 25px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

export default CityInfo;