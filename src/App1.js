import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Button from '@material-ul/core/Button'
const App = props => {
const [state, setState] = useState(0)
const [number1 ,setNumber1] = useState(0)
const [number2, setNumber2] = useState(0)
const [total, setTotal] = useState(0)
const [answer, setAnswer] = useState(Math.floor(Math.random() * 10) + 1)
const url = 'https://api.github.com/users/SirawichDev'

let [id, setId] = useState(0)
let [login, setLogin] = useState(0)
let [avatar, setAvatar] = useState(0)
let [name, setName] = useState(0)
const getGithub = async () => {
  let res = await axios.get(url)
  const login2 = res.data.login
  const id2 = res.data.id
  const avatar2 = res.data.avatar_url
  const name2 = res.data.name
  setId(id2)
  setLogin(login2)
  setAvatar(avatar2)
  setName(name2)
}
getGithub()
// useEffect(() => {
//   getGithub()
// },[])

console.log('Answer' + answer)
useEffect(() => {
  if(state===answer){
    alert('Correct')
  }
  document.title = `You clicked ${state} times`
},[state])

const isDisable = () => {
  if(number1 > 0 && number2 > 0){
    return false
}
 return true
}


useEffect(() => {
  if(total !== 0){
  if(total === answer) {
    alert('Correct')
  }else{
    alert('Wrong')
  }
  
}
},[total])
// useEffect(() => {

// })



  return (
    <div className="App">
      <header className="App-header">
      Number: {state} <br />
      <input 
      value={number1} 
      name="input1" 
      type="number" 
      placeholder="input 1"
      onChange={e => setNumber1(+e.target.value)}
      /> <br />
      <input 
      value={number2} 
      name="input2" 
      type="number" 
      placeholder="input 2"
      onChange={e => setNumber2(+e.target.value)}
      /> <br />
      <a href="./Component/Login.js">Hello</a>
      <Button variant="contained" color="primary"  disabled={isDisable()} onClick={() => setTotal(number1 + number2)}>Add</Button>
      <Button variant="contained" color="primary" onClick={()=>setState(state + 1)}> +</Button>
      <Button variant="contained" color="primary" onClick={() => setState(state - 1)}> -</Button>
      {total} <br />
      Answer = {answer} <br />
      Avatar: <img src={avatar} width="150px" height="150px" /> <br />
      id: {id} <br />
      login: {login} <br />
      name: {name}
      </header>
    </div>
  );
}

export default App;
