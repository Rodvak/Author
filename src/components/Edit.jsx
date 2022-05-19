import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

const Edit = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(response => {
            const author = response.data
            setName(author.name)
        })
        .catch(err => console.log(err))
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {name}) 
        .then(response => navigate("/"))
        .catch(err=>{
            const errArr =[]
            const errResData = err.response.data.errors
            console.log(errResData)
            for(const key in errResData){
                errArr.push(errResData[key]["message"])
            }
            setErrors(errArr)
        })
}   

  return (
    <div>
        <Link to={"/"}>Home</Link>        
        <div>
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <button type="submit">Create</button>
            </form> 
            {
                errors.map((err, i)=>(
                    <p key={i} style={{color: "red"}}> {err} </p>
                ))
            }   
            <div>
                <Link to={"/"}>Cancel</Link>  
            </div>      

        </div>     
    </div>
  )
}

export default Edit