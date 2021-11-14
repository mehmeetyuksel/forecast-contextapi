import React, {useState, useEffect} from 'react'
import axios from "axios"
import "../App.css"
import { Box, Grid, GridItem} from "@chakra-ui/react"



function Forecast({currentCity}) {
    const API_KEY = process.env.REACT_APP_API_KEY
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(API_KEY)
useEffect(() => {
 axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentCity.lat}&lon=${currentCity.long}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`).then (
     (forecast) => setData(forecast.data)).finally(() => setIsLoading(false))
    },[currentCity])

    console.log(data)


    return (
        <div style={{marginTop : "10px"}}>
        <h1 style={{marginBottom : "10px", fontSize : "50px"}} >Forecast of the City</h1>
        <Grid templateColumns="repeat(8, 1fr)" gap={0}>
        {isLoading ? <div>Loading...</div> : data.daily.map((day) => (
        
      
        <div className="day"> 
          <Box w="200px" h="200px" align="center">
            {<img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />}
            <Box fontSize="xl">{day.temp.min}&#8451; / {day.temp.max}&#8451;</Box>
             {new Date(day.dt*1000).toString().split(" ").slice(0,4).join("/")}
          </Box>

        </div>  
        )) }
        </Grid>
        </div>
    );
}

export default Forecast
