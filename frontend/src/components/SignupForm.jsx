import {useNavigate} from 'react-router-dom';
import API from "../api";
import { useState } from "react";

//to store and manage form input data

function SignupForm(){
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        role:"user"
    });

    const navigate = useNavigate();
    //this is a hook, used to move (redirect) from one page to another (or) navigate = function to change page

    const handleChange = (e) => {
        setFormData({ ...formData,[e.target.name]:e.target.value})
    }
    //e = event object (contains input details) and this One function handles ALL inputs changes
//     //Make sure inputs have name:
// <input name="email" onChange={handleChange} />
//  Otherwise it won’t work 

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/signup", formData);
      localStorage.setItem("token", res.data.token); // api also contains this but in api it attaches alraedy existing token but here we are signing up,it means new user , so it asks token from backend
      alert("Signup successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={{textAlign:'center',marginTop:"100px"}}>
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
            <input type='text'
                   name='name'
                   placeholder='Full Name'
                   value={formData.name} //Show whatever is stored in formData.name inside the input box
                   onChange={handleChange}
                   required
            /> <br></br>

            <input type='email'
                   name='email'
                   placeholder='email'
                   value={formData.email}
                   onChange={handleChange}
                   required
            /> <br></br>

            <input type='password'
                   name='password'
                   placeholder='password'
                   value={formData.password}
                   onChange={handleChange}
                   required
            /> <br></br>

            <select name='role' value={formData.role} onChange={handleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select><br></br>

            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}
export default SignupForm;