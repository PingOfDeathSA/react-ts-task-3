import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CreateJobModel } from "../../model/createJobModel";
import { CrudConstructor } from "../../constructors/crud-constructor";
import editJobStyle from "./edit-job.module.css";

export default function EditJob() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [job, setJob] = useState<CreateJobModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No job ID provided");
      setLoading(false);
      return;
    }

    CrudConstructor.fetchJobById(id)
      .then((jobData) => {
        setJob(jobData);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch job data");
        setLoading(false);
      });
  }, [id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    if (!job) return;
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  }

  function handleSave() {
    if (!job) return;

    CrudConstructor.updateJob(job)
      .then(() => {
        alert("Job updated successfully");
        navigate("/landing-page");
      })
      .catch(() => alert("Failed to update job"));
  }

  if (loading) return <div>Loading job data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!job) return <div>Job not found</div>;

  return (
    <div className={editJobStyle.container} style={{ maxWidth: 500, margin: "auto" }}>
      <h2>Edit Job</h2>

      <div >
        <label>
          Company:
          <input    className={editJobStyle.inputs}
            name="company"
            value={job.company}
            onChange={handleChange}
            type="text"
            style={{ width: "100%" }}
          />
        </label>
      </div>

      <div>
        <label>
          Role:
          <input className={editJobStyle.inputs}
            name="role"
            value={job.role}
            onChange={handleChange}
            type="text"
            style={{ width: "100%" }}
          />
        </label>
      </div>

      <div>
        <label>
          Status:
          <select className={editJobStyle.inputs}
            name="status"
            value={job.status}
            onChange={handleChange}
            style={{ width: "100%" }}
          >
            <option value="Applied">Applied</option>
            <option value="Interviewed">Interviewed</option>
            <option value="Rejected">Rejected</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Date Applied:
       <input className={editJobStyle.inputs}
  name="dateApplied"
  type="date"
  value={
    job.dateApplied && !isNaN(new Date(job.dateApplied).getTime())
      ? new Date(job.dateApplied).toISOString().slice(0, 10)
      : ""
  }
  onChange={handleChange}
  style={{ width: "100%" }}
/>

        </label>
      </div>

      <button onClick={handleSave} style={{ marginTop: 20 }}>
        Save
      </button>
    </div>
  );
}
