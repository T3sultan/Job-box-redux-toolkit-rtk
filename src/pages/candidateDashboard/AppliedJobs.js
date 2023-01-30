import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../../components/reusable/JobCard";
import Loading from "../../components/reusable/Loading";
import { useGetAppliedJobsQuery } from "../../features/job/jobApi";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetAppliedJobsQuery(email);
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className=" my-5 text-lg font-semibold text-primary">Applied Jobs</h1>
      <div className=" grid grid-cols-2">
        {data.data.map((item) => (
          <JobCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
