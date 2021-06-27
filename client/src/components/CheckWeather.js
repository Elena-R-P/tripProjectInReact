import React, {useState} from 'react';
import styles from './Trip.module.css';
import {motion} from 'framer-motion';


const CheckWeather = () => {
    const [city, setCity] = useState('')
    const [data, setData] = useState(null)

    async function getWeather() {
        try {
            const apikey = 'db39f705d21f8a023b07d4f432f8be36'
            const path = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=imperial`
            const res = await fetch(path)
            const json = await res.json()
            console.log(json)
            setData(json)
        } catch(err) {
            console.log(err.message)
        }
    }
    
    return (
        <div className="col">
            <div className={styles.weather}>
                <h1>Check weather!</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    getWeather()
                }}>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="enter city"
                        value={city}
                        onChange={(e) => {setCity(e.target.value)}}
                    />
                    <button type="submit" className={styles.btnM}>Submit</button>
                </form>
            </div>
            <div>
                {data ? <motion.div className={styles.display} drag={true}>
                    {data.main.temp}F
                    <p>in {data.name}</p>
                    </motion.div> : null}
            </div>
        </div>
    );
};

export default CheckWeather;