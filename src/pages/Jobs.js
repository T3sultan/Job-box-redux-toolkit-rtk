import React from "react";
import JobCard from "../components/reusable/JobCard";
import { useGetJobsQuery } from "../features/job/jobApi";

const Jobs = () => {
  const { data, isLoading, isError } = useGetJobsQuery();
  console.log(data);
  // const { position,companyName } = data.data || {};
  return (
    <div className="pt-14">
      {data?.data?.map((item) => (
        <JobCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Jobs;
