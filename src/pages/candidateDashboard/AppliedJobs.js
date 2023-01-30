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
      {data.data.map((item) => (
        <JobCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default AppliedJobs;
