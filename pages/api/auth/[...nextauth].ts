import { LoginAccess } from '@/service/auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        id: { label: 'id', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return
        const { id, password } = credentials
        const response = await LoginAccess(id, password)
        const data = response.data
        if (data) {
          return data
        } else {
          return null
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  },

  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.accessToken = user.accessToken
      }
      return token
    },
    async session({ token, session }) {
      session.accessToken = token.accessToken
      return session
    },
  },
})
