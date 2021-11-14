import React from 'react'
import { useCity } from '../contexts/dataContext'
import { Select } from "@chakra-ui/react"


function City({setCurrentCity}) {

    const cities = useCity();
    const handleChange = (e) => {
       
        for(let i=0; i<cities.data.length; i++) {
            if(cities.data[i].name === e.target.value) {
                setCurrentCity({lat : cities.data[i].lat, long : cities.data[i].long})
            }
        }
    }

    return (
        <div>
            <Select size="lg" onChange={handleChange}>

                {cities.data.map((city) => ( 
                    <option value={city.name}>{city.name}</option>    
                ))}
            </Select>
        </div>
    )
}

export default City
