import { LoginAccess } from '@/service/auth'
import NextAuth, { Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'

class CustomError extends Error {
  response?: {
    data: {
      message: string
    }
  }
}

export const authOption = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        id: { label: 'id', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null
        try {
          const { id, password } = credentials
          const response = await LoginAccess(id, password)
          return response.data
        } catch (error) {
          const customError = error as CustomError
          const message = customError.response?.data.message
          throw new Error(message)
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: '/login',
  },

  session: {
    maxAge: 60 * 60 * 24,
  },

  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      const copyToken = { ...token }
      if (user) {
        copyToken.accessToken = user?.accessToken
        copyToken.id = user?.user?.id
      }
      return copyToken
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const copySession = { ...session }
      copySession.user.id = token.id
      copySession.accessToken = token.accessToken
      return copySession
    },
  },
}

export default NextAuth(authOption)
