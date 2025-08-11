import { useNavigate } from "react-router-dom";
import filterStyle from "./filter.module.css";

type filterOptionModel = {
  all: boolean,
  asernsing: boolean,
  descending: boolean,
  date: boolean,
  status: boolean,
};

function FilterComponent() {
  const navigate = useNavigate();

  return (
    <div className={filterStyle.filter}>
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
        className={filterStyle.addButton}
        onClick={() => navigate("/create-job")}
      >
        Add Job
      </button>
    </div>
  );
}

export default FilterComponent;
