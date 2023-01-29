import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const email = useRef('')
    const password = useRef('')

    const submitHandler = () => {
        if(email.current.value === '' || password.current.value === '') {
            alert('Fill the details completely')
        }

        else {
            navigate('home')
        }
    }

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center',marginTop:'10%'}}>
        <h1 style={{color:'white'}}>Login</h1>
        <form>
            <div className="form-floating mt-3 mb-3">
                <input type="email" id="email" className="form-control" placeholder="Enter your email" name="email" ref={email}/>
                <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mt-3 mb-3">
                <input type="password" id="password" className="form-control" placeholder="Enter your password" name="password" ref={password}/>
                <label htmlFor="password">Password</label>
            </div>

            <div className="container buttonsdiv">
                <button type="button" className="btn btn-outline-primary" onClick={submitHandler}>Submit</button>
            </div>
        </form>
    </div>
)
}

export default Login