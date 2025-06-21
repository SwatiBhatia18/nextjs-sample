import React from 'react'

const UserPage = (props) => {

  return (
    <>
    <h1>Users</h1>
    {props.data.users.map((user)=>(
        <li key={user.id}>{user.firstName}</li>
    ))}
    </>
  )
}

export const getServerSideProps = async () => {
    const data = await (await fetch("https://dummyjson.com/users")).json()
    return {
        props: {
            data
        }
    }
}

export default UserPage