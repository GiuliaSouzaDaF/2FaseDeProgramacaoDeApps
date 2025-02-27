
import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("Juca")
  const [senha,setSenha] = useState()
  
  let nome = "Ulib"
  function lerNome(){
    nome=prompt("digite o nome")
  
  console.log(nome);
  }
  function lerUsuario(){
    let resposta = prompt("digite o novo usuário:")
    setUsuario(resposta)

    let pw = prompt("Digite a nova senha: ")
    let pw2 = prompt("Confirme a senha: ")
    if(pw == pw2){
      setSenha(pw)
    }else{
      alert("as senhas tao diferente po")
    }
    
  }
  return (
    <>
    <Conversao />
    <Conversao2 />

     <h1>eae</h1>
     Nome: {nome}
     <div>
     Usuario : {usuario}
     Senha: {senha}
      </div>
      <button onClick={lerNome}>Trocar nome</button>
      <button onClick={lerUsuario}>Trocar usuario</button>
    </>
  )
}

export default App
