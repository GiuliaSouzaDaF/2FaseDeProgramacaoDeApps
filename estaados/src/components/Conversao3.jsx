import { useState } from "react"
import './Conversao3.css'

function Conversao3() {
    const [celsius, setCelsius] = useState(0)
    const [fahrenheit, setFahrenheit] = useState(0)
    const [kelvin, setKelvin] = useState(0)
    
    function converterCelsiusParaFahrenheit(){
        let entrada = Number(prompt("Celsius:"))
        setCelsius(entrada)
        setFahrenheit(entrada *(9/5)+32)
        setKelvin(entrada + (-273,15)   )
  }
return (
<div className="container-conversao3">
<h2>Celsius ➡️ Fahrenheit ➡️ Kelvin</h2>
        <button onClick={converterCelsiusParaFahrenheit}>Converter</button>
        <p>
            Celsius: {celsius}
        </p>
        <p>
            Fahrenheit: {fahrenheit}
        </p>
        <p>
            Kelvin: {kelvin}
        </p>
</div>
)
}
export default Conversao3