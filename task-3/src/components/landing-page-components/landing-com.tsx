import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import tableStyle from "./landing-com.module.css";
import { CrudConstructor } from "../../constructors/crud-constructor";
import { CreateJobModel } from "../../model/createJobModel";



export default function LandingComponent(filteredJobs: CreateJobModel[]) {

  return (
    <div className="table-container">
      <Table striped className={tableStyle.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date Applied</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map((job, index) => (
            <tr key={job.id}>
              <td>{index + 1}</td>
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
