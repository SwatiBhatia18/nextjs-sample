import { useRouter } from 'next/router'
import React from 'react'

const Settings = () => {
const {query} = useRouter()
  return (
    <div>Settings of {query.user}</div>
  )
}

export default Settings