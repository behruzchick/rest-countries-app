import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Box, Button, Card, Heading, Media } from 'react-bulma-components';
import { useNavigate, useParams } from 'react-router-dom'
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';

import './Country.css'
const Country = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        axios
            .get(`https://restcountries.com/v3.1/name/${name}`)
            .then((res) => {
                console.log(res.data);
                setCountry(res.data)
            }).catch((e) => {
                console.log(e);
            })
    }, [

    ])


    const mapContainerStyle = {
        width: '500px',
        height: '400px',
    };
    const center = {
        lat: 7.2905715,
        lng: 80.6337262,
    };

    return (
        <div className='country-wrape'>
            <Button onClick={() => navigate('/')}  color={'danger'}>Back</Button>
            {
                country.map((item, index) => (
                    <>
                        <Box key={index * 55} className='cd' style={{background: 'none', boxShadow: "none", border: 'none'}}>
                            <img
                                src={item.flags.png}
                                width={'500px'}
                            />
                            <Card.Content className='card-content' style={{display:'flex',flexDirection:"column",alignItems:"flex-start",marginTop:"30px"}}>

                                <Heading style={{ color: "white" }}>{item.name.common}</Heading>
                                <Heading style={{ color: "white" }} size={5} s>Capital: {item.capital}</Heading>
                                <Heading style={{ color: "white" }} size={6} >Region: {item.region}</Heading>
                                <Heading style={{ color: "white" }} size={6} subtitle>Population: {item.population}</Heading>
                                <Heading style={{ color: "white" }} size={6}  >Subregion: {item.subregion}</Heading>
                                <Heading style={{ color: "white" }} size={6}    subtitle >Oficial : {item.name.official}</Heading>

                            </Card.Content>
                        </Box>
                    </>
                ))
            }

        </div>
    )
}

export default Country