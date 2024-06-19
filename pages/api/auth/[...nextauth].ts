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
          const user = data
          return user
        } else {
          return null
        }
      },
    }),
  ],

  pages: {
    signIn: '/login',
  },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24,
  },

  callbacks: {
    async jwt({ token, user }) {
      console.log(user)
      if (user) {
        token.accessToken = user?.accessToken
        token.id = user?.user?.id
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      session.accessToken = token.accessToken
      return session
    },
  },
})
