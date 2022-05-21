import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Display = () => {
    const [authors, setAuthors] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
        .then(response => {
            setAuthors(response.data)
        })
        .catch(err => console.log(err))
    },[refresh])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(response => console.log(response))
        reload()
        .catch(err => console.log(err)) 
    }
    const reload = () => {
        setRefresh(!refresh)
    }

  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to={"/new"}>Add an Author</Link>
        <h2>We have quotes by:</h2>
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Available Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    authors.map((author, i) => (                 
                <tr key={i}>
                    <td>{author.name}</td>
                    <td><Link to={`/edit/${author._id}`}>Edit</Link> || <button onClick={() => handleDelete(author._id)}>Delete</button></td>
                </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Display