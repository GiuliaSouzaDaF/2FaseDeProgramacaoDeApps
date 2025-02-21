
import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("Juca")
  
  
  let nome = "Ulib"
  function lerNome(){
    nome=prompt("digite o nome")
  
  console.log(nome);
  }
  function lerUsuario(){
    let resposta = prompt("digite o nobo usuário:")
    setUsuario(resposta)
  }
  return (
    <>
     <h1>eae</h1>
     Nome: {nome}
     <div>
     Usuario : {usuario}
      </div>
      <button onClick={lerNome}>Trocar nome</button>
    </>
  )
}

export default App
