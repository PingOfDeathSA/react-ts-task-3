import { useNavigate } from "react-router-dom";
import searchStyle from "./search.module.css";


export default function SerachComponent (data: any) {
    const navigate = useNavigate();
    return (

        
        <div>

                   <div className={searchStyle.searchContainer} id="search">
           <input className={searchStyle.search} type="text" placeholder="Search" maxLength={20}/>
           <span
           style={{
            padding: "8px",
            cursor: "pointer",
               fontSize: "15px",
               borderRadius: "5px",
               fontWeight: "bold",
               fontFamily: "cursive",
               backgroundColor: "rgb(255, 0, 128)",
               color: "white"
           }}
           >Search</span>
        </div>
               <div className={searchStyle.filter}>
      <select style={
        { color: "rgb(255, 0, 128)",
            fontFamily: "cursive",
            fontWeight: "900",
         }
    } name="jobStatus">
        <option
        style={
          {
            color: "rgb(255, 0, 128)",
              fontFamily: "cursive",
            fontWeight: "900",
          }
        }
        
        value="applied">Applied</option>
        <option   style={
          {
            color: "rgb(255, 0, 128)",
              fontFamily: "cursive",
            fontWeight: "900",
          }
        } value="interviewed">Interviewed</option>
        <option   style={
          {
            color: "rgb(255, 0, 128)",
              fontFamily: "cursive",
            fontWeight: "900",
          }
        } value="rejected">Rejected</option>
      </select>
      <div>Applied</div>
      <div>Interviewed</div>
      <div>Rejected</div>
      <button
      style={
        {
              fontFamily: "cursive",
            fontWeight: "900",
            backgroundColor: "#0F828C",
          }
      }
        className={searchStyle.addButton}
        onClick={() => navigate("/create-job")}
      >
        Add Job
      </button>
    </div>
        </div>
 
    );
}