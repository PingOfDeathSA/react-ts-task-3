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

}
