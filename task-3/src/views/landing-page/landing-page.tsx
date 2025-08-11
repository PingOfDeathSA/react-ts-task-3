import { useNavigate } from "react-router-dom";
import LandingComponent from "../../components/landing-page-components/landing-com";
import SerachComponent from "../../components/landing-page-components/search/search";
import { AuthConstructor } from "../../constructors/authentication-constructor";
import { useEffect, useState } from "react";
import { CrudConstructor } from "../../constructors/crud-constructor";
import { CreateJobModel } from "../../model/createJobModel";
export default function LandingPage () {
      const navigate = useNavigate();
  const userInformation = localStorage.getItem("user");
  const user = userInformation ? JSON.parse(userInformation) : null;
   const [jobs, setJobs] = useState<CreateJobModel[]>([]);
  useEffect(() => {
    console.log("useEffect user:", user);
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);


  useEffect(() => {
    CrudConstructor.fetchJobs(user?.name || "")
      .then(setJobs)
      .catch(console.error);
  }, []);

  
  function logout() {
    console.log("Logout clicked");
    AuthConstructor.handleLogout();
    window.location.reload(); 
   
  }
    return (
        <div>
            <br />
              <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "cursive",
                color: "rgb(255, 0, 128)"
              }}
              >Welcome {user?.name || "Guest"}   <button onClick={logout}>Logout</button></span>
            <SerachComponent/>
           {LandingComponent(jobs)}
           <br />

        </div>
    );
}