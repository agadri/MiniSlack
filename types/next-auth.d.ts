/* eslint-disable @typescript-eslint/no-unused-vars */
import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    accessToken: string
    user: SessionUser
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string
    userId: string
  }
}
