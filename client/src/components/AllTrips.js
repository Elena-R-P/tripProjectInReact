import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Trip.module.css';
import {Link} from '@reach/router';
import Moment from 'react-moment'
import Img from '../images/road.jpg';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import NewTrip from './NewTrip';
import CheckWeather from './CheckWeather';

const Image = styled(motion.img)`
    width: 250px;
    height: 180px;
    border-radius: 50%;
    border: 3px solid rgb(180, 148, 105);
    margin-right: 70px;
`
const AllTrips = () => {
    const [allTrips, setAllTrips] = useState([]);
    const [deleteClicked, setDeleteClicked] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/trips")
        .then(res=>{
            console.log(res)
            setAllTrips(res.data.results)
        })
        .catch(err => console.log(err))
    }, [deleteClicked])

    const deleteTripHandler = (e, tripId) =>{
        axios.delete(`http://localhost:8000/api/trips/delete/${tripId}`)
        .then(res=>{
            console.log("this will be deleted", res)
            setDeleteClicked(!deleteClicked)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className={styles.container}>
            <div className="row mb-3">
                <div className={styles.nav}>
                    <Image
                        src={Img}
                        alt="img"
                        drag={true}
                    />
                    <NewTrip></NewTrip>
                    <CheckWeather></CheckWeather>
                </div>
                
            </div>
            <div className="row mb-3">
                <h3>Road trips have always been a favorite pastime in the United States and will continue to be, as what better way than being free to experience a vast array of stunning coastal views, breathtaking valleys and rocky cliffs, lush forests and limitless deserts. Behind the wheel. Our website will help you plan your trip, whichever destination you choose in the United States.</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Destinations</th>
                            <th>Begin Date</th>
                            <th>Finish Date</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTrips.map((trip, idx)=>{
                                return <tr key={idx}>
                        <td>{trip.name}</td>
                        <td><Moment format="MM/DD/YYYY">{trip.dateStart}</Moment></td>
                        <td><Moment format="MM/DD/YYYY">{trip.dateFinish}</Moment></td>
                        <td>{trip.description}</td>                    
                        <td>
                            <Link onClick={(e)=>deleteTripHandler(e, trip._id)} to="#!"><button className={styles.btnM}>Delete</button></Link></td>
                    </tr>
                            })
                        }
                    </tbody>
                </table>
                
            </div>
        </div>
    );
};


export default AllTrips;