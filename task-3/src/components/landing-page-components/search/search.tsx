import { useNavigate } from "react-router-dom";
import searchStyle from "./search.module.css";


export default function SerachComponent({
  searchText,
  setSearchText,
  filterStatus,
  setFilterStatus,
}: {
  searchText: string;
  setSearchText: (val: string) => void;
  filterStatus: string;
  setFilterStatus: (val: string) => void;
}) {
  const navigate = useNavigate();

  return (
    <div>
      <div className={searchStyle.searchContainer} id="search">
        <input
          className={searchStyle.search}
          type="text"
          placeholder="Search"
          maxLength={20}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span
          style={{
            padding: "8px",
            cursor: "pointer",
            fontSize: "15px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontFamily: "cursive",
            backgroundColor: "rgb(255, 0, 128)",
            color: "white",
          }}
        >
          Search
        </span>
      </div>

      <div className={searchStyle.filter}>
        <select
          style={{
            color: "rgb(255, 0, 128)",
            fontFamily: "cursive",
            fontWeight: "900",
          }}
          name="jobStatus"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option style={{ color: "rgb(255, 0, 128)", fontFamily: "cursive", fontWeight: "900" }} value="all">
            All
          </option>
          <option style={{ color: "rgb(255, 0, 128)", fontFamily: "cursive", fontWeight: "900" }} value="ascending">
            Ascending
          </option>
          <option style={{ color: "rgb(255, 0, 128)", fontFamily: "cursive", fontWeight: "900" }} value="descending">
            Descending
          </option>
          <option style={{ color: "rgb(255, 0, 128)", fontFamily: "cursive", fontWeight: "900" }} value="interviewed">
            Interviewed
          </option>
          <option style={{ color: "rgb(255, 0, 128)", fontFamily: "cursive", fontWeight: "900" }} value="rejected">
            Rejected
          </option>
        </select>

        <button
          style={{
            fontFamily: "cursive",
            fontWeight: "900",
            backgroundColor: "#0F828C",
          }}
          className={searchStyle.addButton}
          onClick={() => navigate("/create-job")}
        >
          Add Job
        </button>
      </div>
    </div>
  );
}
