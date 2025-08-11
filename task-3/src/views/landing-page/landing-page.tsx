import { useNavigate, useSearchParams } from "react-router-dom";
import LandingComponent from "../../components/landing-page-components/landing-com";
import SerachComponent from "../../components/landing-page-components/search/search";
import { AuthConstructor } from "../../constructors/authentication-constructor";
import { useEffect, useState } from "react";
import { CrudConstructor } from "../../constructors/crud-constructor";
import { CreateJobModel } from "../../model/createJobModel";


export default function LandingPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const userInformation = localStorage.getItem("user");
  const user = userInformation ? JSON.parse(userInformation) : null;

  const [jobs, setJobs] = useState<CreateJobModel[]>([]);


  const [searchText, setSearchText] = useState(searchParams.get("search") || "");
  const [filterStatus, setFilterStatus] = useState(searchParams.get("filter") || "all");

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  useEffect(() => {
    CrudConstructor.fetchJobs(user?.name || "")
      .then(setJobs)
      .catch(console.error);
  }, [user?.name]);


  useEffect(() => {
    const params: Record<string, string> = {};
    if (searchText) params.search = searchText;
    if (filterStatus !== "all") params.filter = filterStatus;
    setSearchParams(params);
  }, [searchText, filterStatus, setSearchParams]);

  let filteredData = CrudConstructor.searchLinksData(jobs, searchText);

  if (filterStatus !== "all" && filterStatus !== "ascending" && filterStatus !== "descending") {
    filteredData = filteredData.filter((job) => job.status.toLowerCase() === filterStatus.toLowerCase());
  }
  if (filterStatus === "ascending") {
    filteredData = [...filteredData].sort((a, b) => a.company.localeCompare(b.company));
  }
  if (filterStatus === "descending") {
    filteredData = [...filteredData].sort((a, b) => b.company.localeCompare(a.company));
  }

  function logout() {
    AuthConstructor.handleLogout();
    window.location.reload();
  }

  return (
    <div>
      <br />
      <span style={{ fontSize: "18px", fontWeight: "bold", fontFamily: "cursive", color: "rgb(255, 0, 128)" }}>
        Welcome {user?.name || "Guest"} <button onClick={logout}>Logout</button>
      </span>

      <SerachComponent
        searchText={searchText}
        setSearchText={setSearchText}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      {LandingComponent(filteredData)}
      <br />
    </div>
  );
}


