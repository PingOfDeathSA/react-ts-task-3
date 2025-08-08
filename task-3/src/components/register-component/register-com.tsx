import { useState } from "react";
import registerStyle from "./register-com.module.css";

export default function RegisterComponent () {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        confirmpassword: ""
      });
    
      function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    function checkDetails(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(formData);
        if(formData.password !== formData.confirmpassword){
            alert("passwords do not match");
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