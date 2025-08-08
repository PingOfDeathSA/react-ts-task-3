import loginStyle from "./login-com.module.css";


export default function LoginComponent () {
    return (
        <div className={loginStyle.login}>
            <input type="text" />
            <input type="password" />
           <div className={loginStyle.buttonContainer}> <button >Login</button></div>
        </div>
    );
}