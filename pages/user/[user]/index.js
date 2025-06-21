import React from "react"
import { useRouter } from "next/router"

const User = () => {
  const router = useRouter()
  console.log("router", router)

  return (
    <>
      <div>User {router.query.user}</div>
      <button
        onClick={() => router.push(`/user/${router.query.user}/settings`)}
      >
        Go to settings
      </button>
      <button
        onClick={() =>
          router.push({
            pathname: "/user/[user]/settings",
            query: {
              user: router.query.user,
            },
          })
        }
      >
        Go to settings2
      </button>
      <button onClick={() => router.push("/")}>Go to Home</button>
      <button onClick={() => router.replace("/")}>Go to Home Replace</button>
      <button onClick={() => router.reload()}>Reload </button>
    </>
  )
}

export default User
