import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Country from './components/Country/Country';
function App() {
  const [countries,setCountries] = useState([]);
  const [api,setApi] = useState("https://restcountries.com/v3.1/all")
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        console.log("api",api);
        setCountries(res.data)
        setLoading(false)
      }).catch((e) => {
        console.log(e);
      })
  }, [api])

  return (
    <div className="wrape">
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home countries={countries} loading={loading} setApi={setApi}/>} />
          <Route path='/country/:name' element={<Country/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
