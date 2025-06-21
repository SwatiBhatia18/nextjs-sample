import React from "react"

const UserInfo = (props) => {
  return (
    <>
      <h1>User: {props.data?.firstName || 'Loading...'}</h1>
      <p>ID: {props.data?.id}</p>
      <p>Email: {props.data?.email}</p>
      <p>Phone: {props.data?.phone}</p>
    </>
  )
}

export const getStaticPaths = async () => {
  const response = await fetch('https://dummyjson.com/users')
  const data = await response.json()
  
  // Generate paths for all users
  const paths = data.users.map((user) => ({
    params: {
      id: user.id.toString(),
    },
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json()
  return {
    props: {
      data,
    },
  }
}

export default UserInfo