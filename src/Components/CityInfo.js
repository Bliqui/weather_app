import React from "react";

const CityInfo = ({name, temp, tempMin, tempMax}) => {
    return(
        <div>
            <div className={'cityWrapper'}>
                <div className={'cityName'}>{name}</div>
                <div className={'cityActualTemp'}>{temp}</div>
                <div className={'cityMinMaxTemp'}>
                    <div className={'cityMinTemp'}>{tempMin}</div>
                    <div className={'cityMaxTemp'}>{tempMax}</div>
                </div>
            </div>
        </div>
    );
};

export default CityInfo;