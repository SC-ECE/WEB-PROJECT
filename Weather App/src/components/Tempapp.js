import React, { useState } from 'react';
import { useEffect } from 'react';
import "./css/style.css";

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {       // useEffect is a hook jeta data fetching, DOM update korte allow kore.
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cb183e180a1c590548d78ae865000a77`
            const response = await fetch(url);
            const resJSON = await response.json();
            setCity(resJSON.main);
        };
        fetchAPI();
    }, [search]);

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className='inputField' value={search} onChange={(event) => { setSearch(event.target.value) }} />  
                </div>      
// onChange is a event handler jeta input change ke check/search kore.
                {!city ? (
                    <p className='errorMsg'>No Data Found</p>
                ) : (<>
                    <div className="info">
                        <h2 className="location">
                        <i className="fas fa-street-view"></i>{search}
                        </h2>
                        <h1 className="temp">{city.temp}°C</h1>
                        <h3 className="tempmin_max">Min: {city.temp_min}°C | Max: {city.temp_min}°C</h3>
                    </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                </>
                )}

            </div>
        </>
    )
}

export default TempApp;
