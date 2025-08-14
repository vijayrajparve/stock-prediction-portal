import axios from 'axios';
import React, {useState, useContext} from 'react'
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    const userData = {
      username,
      password
    }

    try{
      const response = await axios.post("http://127.0.0.1:8000/api/v1/token/",userData)
      localStorage.setItem("accessToken", response.data.access)
      localStorage.setItem("refreshToken", response.data.refresh)
      console.log("Login Successful")
      navigate("/")

    }catch(error){
      console.log("Invalid Credentials")
    }finally{
      setLoading(false)
    }
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 p-5 rounded bg-secondary">
            <h3 className="text-light text-center">Login To Our Protal</h3>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {loading ? (
                <button
                  type="submit"
                  className="btn btn-info d-block mx-auto disabled"
                >
                  Login In...
                </button>
              ) : (
                <button type="submit" className="btn btn-info d-block mx-auto">
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login