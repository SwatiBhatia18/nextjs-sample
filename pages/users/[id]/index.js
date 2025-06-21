import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

const UserInfo = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    id ? `https://dummyjson.com/users/${id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div>
      <h1 style={{ marginLeft: 16 }}>User Detail</h1>

      <div style={{ margin: "16px" }}>
        <img
          src={data.image}
          alt={data.username}
          width={100}
          style={{ borderRadius: "8px", marginBottom: "16px" }}
        />
        <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
        <p><strong>Username:</strong> {data.username}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
      </div>
    </div>
  );
};

export default UserInfo;
