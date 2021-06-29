import React, {useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';
import styles from './Trip.module.css';
import styled from 'styled-components';
import {motion} from 'framer-motion';


const Button = styled(motion.button)`
    padding: 0.5rem;
    margin-right: 35px;
    font-size: 1rem;
    border: 2px solid #131313;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    background: transparent;
`;


const NewTrip = () => {
    const [formInfo, setFormInfo] = useState({
        name:"",
        dateStart:"",
        dateFinish:"",
        description:""
    })
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/trips/create", formInfo)
        .then(res => {
            console.log(res)
            if(res.data.errors){
                setErrors(res.data.errors)
            } else {
                navigate("/")
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.container_new}>
            <form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label">Destinations</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="name"/>
                                <p className="text-danger">{errors.name? errors.name.message: ""}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Begin Date</label>
                                <input onChange={changeHandler} type="date" className="form-control" name="dateStart"/>
                                <p className="text-danger">{errors.dateStart? errors.dateStart.message: ""}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Finish Date</label>
                                <input onChange={changeHandler} type="date" className="form-control" name="dateFinish"/>
                                <p className="text-danger">{errors.dateFinish? errors.dateFinish.message: ""}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea onChange={changeHandler} type="text" className="form-control" name="description"/>
                                <p className="text-danger">{errors.description? errors.description.message: ""}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-end">
                        <Button 
                            type="submit" 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ 
                                scale: 0.95, 
                                backgroundColor: '#F8421B',
                                border: 'none',
                                color: '#D8B9B3'
                            }}
                        >CREATE</Button>
                    </div>
                </form>
        </div>
    );
};


export default NewTrip;