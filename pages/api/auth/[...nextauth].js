import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23liCdqWccazLyGduQ",
      clientSecret: "e012d7925b1952b6d8fe9fb1bfc5c2ac186b1d5e",
    })
  ],
}

export default NextAuth(authOptions)