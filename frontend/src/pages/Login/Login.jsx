import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";



import './Login.css'


const Login = () => {
  const navigate = useNavigate()
  const [credentials,setcredentials] = useState(
    {
      username:undefined,
      password:undefined
    }
  )
const {user,loading,error,dispatch} = useContext(AuthContext)

const handleChange = (e)=>{
  setcredentials((prev)=>({...prev,[e.target.id] : e.target.value}))
}

const handleLogin = async(e)=>{
  e.preventDefault()
  dispatch({type:'LOGIN_START'})
  try{
    const res = await axios.post("/api/users/login",credentials)
    dispatch({type:'LOGIN_SUCCES',payload:res.data})
    navigate('/')
  }catch(err){
    dispatch({type:'LOGIN_FAILURE',payload:err.response})
  }

}

console.log(user)
console.log(error)


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
         onChange={handleChange}
          className="lInput"
        />
        <button  onClick={handleLogin} className="lButton">
          Login
        </button>
         {error && <span>{error.data.message}</span>}
      </div> 
    </div>
  );
};

export default Login;