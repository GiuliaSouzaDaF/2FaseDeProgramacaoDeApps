function Conversao2() {
    const [km, setKm] = useState(0)
    const [milhas,setMilhas] = useState(0)
    const [leguas,setLeguas] = useState(0)
function converterKmParaMilhas(){
    let entrada = Number(prompt("Km: "))
    setKm((entrada *0,6214).toFixed(2))
    setLeguas((entrada *0,207124).toFixed(2))
    setMilhas(entrada)
}

  return (
    <div className='container-conversao2'>
    <h2>km ➡️ milhas➡️léguas</h2>
    <button onClick={converterKmParaMilhas}>Converter</button>

   <p>
    Km: {km}
    </p> 
    <p>
    Milhas: {milhas}
    </p>
    <p>
        Leguas: {leguas}
    </p>
            
        </div>
  )
}

export default Conversao2