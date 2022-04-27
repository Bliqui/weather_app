import React from "react";

const CityInfo = (props) => {
    return(
        <div>
            <div className={'cityWrapper'}>
                <div className={'cityName'}>{props.name}</div>
                <div className={'cityActualTemp'}>{props.temp}</div>
                <div className={'cityMinMaxTemp'}>
                    <div className={'cityMinTemp'}>{props.tempMin}</div>
                    <div className={'cityMaxTemp'}>{props.tempMax}</div>
                </div>
            </div>
        </div>
    );
};

export default CityInfo;