import React, { useState } from 'react'
import Header from '../Header/Header'
import { Box, Card, Heading, Image, Media } from 'react-bulma-components'
import './Home.css'
import { useNavigate } from 'react-router-dom'
const Home = ({ countries ,loading,setApi}) => {
    const [search,setSearch] =  useState("");
    const navigate  = useNavigate();
    return (
        <div>
            <Header  setSearch={setSearch} setApi={setApi}/>
            <Box className='countries-box' style={{ background: "none" }}>
                {
                    loading ? (
                        <h1>Loading...</h1>
                    ):
                    countries
                    .filter((type) => {
                        return search.toLowerCase() === ""
                        ? type
                        :type.name.common.toLowerCase().includes(search)
                    })
                    .map((item, index) => (
                        <Card onClick={() => navigate(`/country/${item.name.common}`)} className='country-card' key={index}>
                            <img
                                className='country-image'
                                style={{ width: "400px" }}
                                src={item.flags.png}
                            />
                            <Card.Content style={{padding:"10px",marginTop:"30px    "}}>
                                <Media style={{width:'240px'}}>
                                    <Media.Item renderAs="figure" align="left">
                                        <Image style={{ width: '70px' }} src={item.flags.png} />
                                    </Media.Item>
                                    <Media.Item>
                                        <Heading style={{color:"white"}} size={4}>{item.name.common}</Heading>
                                        <Heading  size={6} style={{color:"white"}}>
                                            Capital: <span></span>
                                            {item.capital}
                                        </Heading>
                                        <Heading style={{color:"white"}} subtitle size={6}>
                                            Population: <span></span> {item.population}
                                        </Heading>
                                        <Heading style={{color:"white"}} size={6}>
                                            Population: <span></span> {item.region}
                                        </Heading>
                                    </Media.Item>
                                </Media>

                            </Card.Content>

                        </Card>
                    ))
                }
            </Box>
        </div>
    )
}

export default Home