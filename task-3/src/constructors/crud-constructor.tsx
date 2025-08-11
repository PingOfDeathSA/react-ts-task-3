import { CreateJobModel } from "../model/createJobModel";

export class CrudConstructor {
  static async createJob(userInfo: CreateJobModel) {
    try {
      const response = await fetch("http://localhost:3001/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        throw new Error("Failed to save job");
      }

      const savedJob = await response.json();

      alert("Job created successfully!");
      console.log("Saved job:", savedJob);
    } catch (error) {
      alert("Error saving job: " + error);
      console.error(error);
    }
  }

static async fetchJobs(userName: string) {
  try {
    const response = await fetch("http://localhost:3001/jobs");
    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const data = await response.json();
    return data.filter((job: any) => job.userName === userName);

  } catch (err: any) {
    console.error(err);
  } finally {
    console.log("Jobs fetched successfully");
  }
}
    static searchLinksData(userdata: CreateJobModel[], searchText: string) {
          return userdata.filter((item) => {
            if (!searchText) return true;
            const lower = searchText.toLowerCase();
            return (
              item.company.toLowerCase().includes(lower) ||
              item.role.toLowerCase().includes(lower) ||
              item.status.toLowerCase().includes(lower) ||
              item.duties.join(",").toLowerCase().includes(lower)
            );
          });
        }

        static async updateJob(jobInfo: CreateJobModel) {
  try {
    const response = await fetch(`http://localhost:3001/jobs/${jobInfo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobInfo),
    });

    if (!response.ok) {
      throw new Error("Failed to update job");
    }

    const updatedJob = await response.json();
    alert("Job updated successfully!");
    console.log("Updated job:", updatedJob);
  } catch (error) {
    alert("Error updating job: " + error);
    console.error(error);
  }
}
static async fetchJobById(id: string): Promise<CreateJobModel> {
  try {
    const response = await fetch(`http://localhost:3001/jobs/${id}`);
    if (!response.ok) throw new Error("Failed to fetch job by ID");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
static async deleteJob(id: string) {
  try {
    const response = await fetch(`http://localhost:3001/jobs/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete job");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

}
