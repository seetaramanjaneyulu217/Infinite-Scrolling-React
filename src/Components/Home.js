import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

let id = 0

const Home = () => {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    const fetchUsers = async () => {
        await fetch(`https://randomuser.me/api/?page=${page}&results=10`)
            .then(response => response.json())
            .then(persons => {
                console.log(users.length)
                setUsers(prevUsers => [...prevUsers, ...persons.results])
                setLoading(false)
            })
    }

    const scrollHandler = () => {
        const top = document.documentElement.scrollTop
        const innerHeight = window.innerHeight
        const height = document.documentElement.offsetHeight

        if (innerHeight + top >= height) {
            setLoading(true)
            console.log(loading);
            setPage(prev => prev + 1)
        }
    }

    useEffect(() => {
        fetchUsers()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [page])

    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <h1 style={{color:'green'}}>Diaplaying users using Infinite Scroll</h1>
                <h3 style={{color:'red', cursor:'pointer'}} onClick={() => navigate('/')}>LogOut</h3>
            </div>
            
            {users.map(user => {
                id += 1
                return (
                    <div className='maindiv' key={id}>
                        <img src={user.picture.medium} />
                        <h4>{user.name.first + " " + user.name.last}</h4>
                        <h4>{user.email}</h4>
                    </div>
                )
            })}

            {loading && <h1 style={{ color: 'white', display:'flex',alignItems:'center',justifyContent:'center'}}>Loading feedback.....</h1>}
        </div>
    )
}

export default Home