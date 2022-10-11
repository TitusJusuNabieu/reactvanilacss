import React,{useState} from 'react'
import Nav from '../components/Nav'

function Contact() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  function onFrmSubmit(event){
    event.preventDefault()
    console.log(name)
    console.log(email)
    console.log(message)
  }
  
  return (
    <div>
      <Nav/>
      <h3>Contact</h3>

      <form onSubmit={onFrmSubmit}>
        <label htmlFor="Name">Name</label><br />
        <input type="text" onChange={e=>setName(e.target.value)}/><br />
        <label htmlFor="email">Email</label><br />
        <input type="email" onChange={e=>setEmail(e.target.value)}/><br />
        <label htmlFor="Message">Message</label><br />
        <textarea onChange={e=>setMessage(e.target.value)}/><br />
        <input type="submit" value="Submit" />
      </form>
      
      </div>
  )
}

export default Contact