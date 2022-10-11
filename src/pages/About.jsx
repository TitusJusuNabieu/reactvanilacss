import { getByTitle } from '@testing-library/react'
import React,{useEffect,useState} from 'react'
import Nav from '../components/Nav'

function About() {

  const [data,setData] = useState([])

  async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{method: 'GET',})
    const data = await response.json()
    setData(data)
  }

  useEffect(
    ()=>{
      getData()
    },[]
  )
  return (
    <div>
      <Nav/>
      About
      
      {data.map((val)=>{
        return(
          <div>
            <h2>{val.title}</h2>
            <p>{val.body}</p>
          </div>
        )
      })}
      </div>
  )
}

export default About