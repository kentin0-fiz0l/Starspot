import { getServerSession } from 'next-auth/next'
import type { NextAuthOptions } from 'next-auth'
import { authOptions } from '../app/api/auth/[...nextauth]/route'

export async function getServerAuthSession() {
  return getServerSession(authOptions as NextAuthOptions)
}
