import React from "react";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserPage = () => {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div>
      <h1 style={{ marginLeft: 16 }}>Users List</h1>

      <div style={{ margin: "16px" }}>
        {data.users.map((user) => (
          <div key={user.id} style={{ marginBottom: "10px" }}>
            <Link href={`/users/${user.id}`}>
              <p style={{ cursor: "pointer", color: "blue" }}>
                {user.firstName} {user.lastName} (@{user.username})
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
