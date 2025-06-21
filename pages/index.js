import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (session?.data === null || !session) {
    return (
      <>
        <title>My App - Login</title>
        <button onClick={() => signIn()}>Login</button>
      </>
    )
  }
  
  return (
    <div>
      <h1>Hello {session?.user?.name || session?.user?.email}!</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}
