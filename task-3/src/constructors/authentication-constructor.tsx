import { redirect } from "react-router-dom";
import { LoginUserModel } from "../model/loginUserModel";

export class AuthConstructor {
  static async RegisterUser(userData: { name: string; password: string }) {
    try {
      const checkResponse = await fetch(`http://localhost:3001/users?name=${encodeURIComponent(userData.name)}`);
      if (!checkResponse.ok) throw new Error("Failed to check existing users");

      const existingUsers = await checkResponse.json();
      if (existingUsers.length > 0) {
        alert("Username already registered. Please choose another.");
        return null;
      }

      const registerResponse = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!registerResponse.ok) {
        throw new Error("Failed to register user");
      }

      const data = await registerResponse.json();
      console.log("User Registered:", data);
    //  alert("User Registered successfully!");
      return data;
    } catch (error: any) {
      console.error(error);
      alert("Registration failed: " + error.message);
      return null;
    }
  }


  static async LoginUser(userData: { name: string; password: string }) {
    try {
      // Check for user with matching name and password
      const response = await fetch(`http://localhost:3001/users?name=${encodeURIComponent(userData.name)}&password=${encodeURIComponent(userData.password)}`);
      if (!response.ok) throw new Error("Failed to check user credentials");
  
      const users = await response.json();
  
      if (users.length === 0) {
        alert("Invalid username or password. Please try again or register.");
        return null;
      }
  
      const user = users[0];
      console.log("User Logged In:", user);
   //   alert("User Logged In successfully!");
      return user;
    } catch (error: any) {
      console.error(error);
     // alert("Login failed: " + error.message);
      return null;
    }
  }
  
  
  

  static UserlocalStore(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  

  static handleLogout() {
    localStorage.removeItem("user");
    console.log("User logged out.");
  }
  

}
