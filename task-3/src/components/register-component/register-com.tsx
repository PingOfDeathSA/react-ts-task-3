import { useState } from "react";
import registerStyle from "./register-com.module.css";
import { AuthConstructor } from "../../constructors/authentication-constructor";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent () {
    const navigator = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        confirmpassword: ""
      });
    
      function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      async function checkDetails(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(formData);
        const SpecialCharectors = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (formData.password !== formData.confirmpassword) {
          alert("Passwords do not match");
        } else if (formData.password.length < 8) {
          alert("Password must be at least 8 characters long");

        } else if (!SpecialCharectors.test(formData.password)) {
          alert("Password must contain at least one special character");

        } else {
          const user = await AuthConstructor.RegisterUser(formData);
          if (user) {
            AuthConstructor.UserlocalStore(user);
            navigator('/landing-page');
          }
        }
      }
    
    return (
        <div >
            <form className={registerStyle.register} action="" method="post" onSubmit={checkDetails}>
            <input className={registerStyle.inputs} type="text" value={formData.name} maxLength={30} onChange={handleChange} name="name" placeholder="username" id="" />
            <input className={registerStyle.inputs} type="password" name="password" value={formData.password} maxLength={30} onChange={handleChange} placeholder="password" id="" />
            <input className={registerStyle.inputs} type="password" name="confirmpassword" value={formData.confirmpassword} maxLength={30} onChange={handleChange} placeholder="confirmpassword" id="" />
            <div className={registerStyle.registerButton}><button 
          
            >Register</button></div>
            </form>
          
        </div>
    );
}