import { useState } from "react";
import loginStyle from "./login-com.module.css";
import { AuthConstructor } from "../../constructors/authentication-constructor"; // Adjust path

export default function LoginComponent() {
  const [formData, setFormData] = useState({ name: "", password: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const user = await AuthConstructor.LoginUser(formData);
    if (user) {
      // Save to localStorage or navigate as needed
      localStorage.setItem("user", JSON.stringify(user));
      // Navigate to landing page or do something else
      window.location.href = "/landing-page"; // or use react-router navigate
    }
  }

  return (
    <form className={loginStyle.login} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Username"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <div className={loginStyle.buttonContainer}>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
