import NextAuth, { DefaultUser } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {} & DefaultSession['user']
    accessToken?: string
  }

  interface User {
    user: {
      id: string
    } & DefaultUser['user']
    accessToken: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string
  }
}
