import React, { useState } from "react";
import axios from "axios"

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async(e) =>{
    e.preventDefault()
    setLoading(true)
    const userData = {
      username, email, password
    }

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
      console.log("registration successful",response.data)
      setErrors({})
      setSuccess(true)
    }catch(error){
      setErrors(error.response.data)
      console.log("registration error==>", error)
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 p-5 rounded bg-secondary">
            <h3 className="text-light text-center">Create An Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>
              </div>
              <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
              </div>
              {success && <div className="alert alert-success">Registration Successful</div>}
              {loading ? (<button type="submit" className="btn btn-info d-block mx-auto disabled">
               Please Wait...
              </button>):(<button type="submit" className="btn btn-info d-block mx-auto">
                Register
              </button>)}
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
