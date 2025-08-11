export type CreateJobModel = {
    id: string;
    company: string;
    role: string;
    status: string;
    dateApplied: string;
    duties: string[];
    requirements: string[];
};