import React, { useEffect, useState } from "react";
import { CrudConstructor } from "../../constructors/crud-constructor";
import createJobStyle from "./create-job.module.css";
import { useNavigate } from "react-router-dom";

export default function CreateJob() {
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Applied"); 
    const [dateApplied, setDateApplied] = useState("");
    const [duties, setDuties] = useState("");
    const [requirements, setRequirements] = useState("");
      const userInformation = localStorage.getItem("user");
      const user = userInformation ? JSON.parse(userInformation) : null;
      const navigate = useNavigate();
      useEffect(() => {
        console.log("useEffect user:", user);
        if (!user) {
          navigate("/");
        }
      }, [user, navigate]);

    function submit(e: React.FormEvent) {
        e.preventDefault();

        const dutiesArray = duties.split(",").map((d) => d.trim());
        const requirementsArray = requirements.split(",").map((r) => r.trim());      
        CrudConstructor.createJob({
            userName: user.name,
            id: Date.now().toString(),
            company,
            role,
            status,
            dateApplied,
            duties: dutiesArray,
            requirements: requirementsArray,

        });
    }

    return (
        <div>
            <form className={createJobStyle.container} onSubmit={submit}>
                <span style={{ fontSize: "30px", fontWeight: "bold", fontFamily: "cursive", color: "rgb(255, 0, 128)" }}>
                    Create Job
                </span>
                <span style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "cursive", color: "#61dafb" }}>
                    Enter your details
                </span>

                <input
                    className={createJobStyle.inputs}
                    type="text"
                    placeholder="Company Name"
                    required
                    maxLength={100}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                <input
                    className={createJobStyle.inputs}
                    type="text"
                    placeholder="Role"
                    required
                    maxLength={100}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />

                {/* Radio buttons for status */}
                <div style={{ marginBottom: "15px" }}>
                    <label
                        style={{
                            marginRight: "15px",
                            color: "#0F828C",
                            fontFamily: "cursive",

                        }}>
                        <input

                            type="radio"
                            name="status"
                            value="Applied"
                            checked={status === "Applied"}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                        Applied
                    </label>
                    <label
                        style={{
                            marginRight: "15px",
                            color: "#FFDE63",
                            fontFamily: "cursive",

                        }}
                    >
                        <input
                            type="radio"
                            name="status"
                            value="Interviewed"
                            checked={status === "Interviewed"}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                        Interviewed
                    </label>
                    <label
                        style={{
                            marginRight: "15px",
                            color: "rgb(255, 0, 128)",
                            fontFamily: "cursive",

                        }}
                    >
                        <input
                            type="radio"
                            name="status"
                            value="Rejected"
                            checked={status === "Rejected"}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                        Rejected
                    </label>
                </div>

                <input
                    className={createJobStyle.inputs}
                    type="date"
                    placeholder="Date Applied"
                    required
                    value={dateApplied}
                    onChange={(e) => setDateApplied(e.target.value)}
                />
                <input
                    className={createJobStyle.inputs}
                    style={{ height: "100px" }}
                    type="text"
                    placeholder="Duties (comma separated)"
                    required
                    maxLength={200}
                    value={duties}
                    onChange={(e) => setDuties(e.target.value)}
                />
                <input
                    className={createJobStyle.inputs}
                    style={{ height: "100px" }}
                    type="text"
                    placeholder="Requirements (comma separated)"
                    required
                    maxLength={200}
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                />
                <button
                    type="submit"
                    style={{
                        width: "28%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "18px",
                        fontFamily: "cursive",
                    }}
                >
                    Save
                </button>
            </form>
        </div>
    );
}
