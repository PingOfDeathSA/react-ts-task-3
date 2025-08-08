import { Navigate, useNavigate } from "react-router-dom";
import Login from "../login/login";
import Register from "../register/register";
import homestyle from "./home.module.css";



export default function Home () {
    const navigate = useNavigate();
    return (
        <div className={homestyle.home}>
<h1>Login</h1>
            <Login/>
            <div className={homestyle.SignUpContainer}>

              <span className={homestyle.text}>Don't have an account?</span>
                <button
              onClick={() => navigate('/register')}
              className={homestyle.SignUp}>Sign-up</button>
            </div>
        </div>
    );
}