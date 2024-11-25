import { AuthOptions, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import GoogleProvider from "next-auth/providers/google"

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Guest",
      credentials: {},
      authorize: async () => {
        const guestUser = { id: 'guest', name: 'Guest User', email: 'guest@example.com' }
        return Promise.resolve(guestUser)
      }
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        console.log('credentials', credentials);
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }
        if (user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user || account) {
        token.user = user
        token.accessToken = account?.access_token;
      }
      return token
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session
    },
  },
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/signin',
  }
}

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }