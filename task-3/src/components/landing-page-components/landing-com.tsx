import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import tableStyle from "./landing-com.module.css";
import { CreateJobModel } from "../../model/createJobModel";
import { FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CrudConstructor } from "../../constructors/crud-constructor";


export default function LandingComponent(filteredJobs: CreateJobModel[]) {
  const navigator = useNavigate();
function handleDelete(id: string) {
  if (window.confirm("Are you sure you want to delete this job?")) {
    CrudConstructor.deleteJob(id)
      .then(() => {
        alert("Job deleted successfully");

      })
      .catch(() => alert("Failed to delete job"));
  }
}

  return (
    <div className="table-container">
      <Table striped className={tableStyle.table}>
        <thead>
          <tr>
            <th>Edit</th>
            <th>Company</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date Applied</th>
          </tr>
        </thead>
          <tbody>
          {filteredJobs.map((job) => (
            <tr key={job.id}>
            <td>
  <span
    onClick={() => navigator(`/edit-job/${job.id}`)}
    style={{ cursor: "pointer", color: "green", marginRight: 10,marginBottom: 10,marginTop: 10 }}
    title="View/Edit job"
  >
    <FaEye />
  </span>

  <span
    onClick={() => handleDelete(job.id)}
    style={{ cursor: "pointer", color: "red" }}
    title="Delete job"
  >
    <FaTrash />
  </span>
</td>
              <td>{job.company}</td>
              <td>{job.role}</td>
              <td
                style={{
                  color:
                    job.status === "Applied"
                      ? "#0F828C"
                      : job.status === "Interviewed"
                      ? "#FFDE63"
                      : "rgb(255, 0, 128)",
                  fontFamily: "cursive",
                  fontWeight: "900",
                }}
              >
                {job.status}
              </td>
              <td>{new Date(job.dateApplied).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
