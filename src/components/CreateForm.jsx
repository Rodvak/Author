import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateForm = () => {
    const [name , setName] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`, {name}) 
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
        <Link to={`/edit/`}>Edit this author</Link>   
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

export default CreateForm