import Forecast from './components/Forecast';
import City from './components/City';
import {CityContextProvider} from "./contexts/dataContext"
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import {useState} from "react"

function App() {
  const [currentCity, setCurrentCity] = useState({lat :37.000428, long :35.321976});
  return (
    <div className="App">
    <CityContextProvider>
    <ChakraProvider>
      <City setCurrentCity={setCurrentCity} />
      <Forecast currentCity = {currentCity}/>
    </ChakraProvider>  
    </CityContextProvider>
    </div>
  );
}

export default App;
