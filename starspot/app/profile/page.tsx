import React from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'
import AuthHeader from '../components/AuthHeader'

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  return (
    <section>
      <AuthHeader />
      <h2>Profile</h2>
      {session ? (
        <div>
          <p><strong>Name:</strong> {session.user?.name}</p>
          <p><strong>Email:</strong> {session.user?.email}</p>
          <p><strong>Image:</strong></p>
          {session.user?.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={session.user.image} alt="avatar" style={{ width: 64, height: 64, borderRadius: 8 }} />
          ) : <p>—</p>}
        </div>
      ) : (
        <p>Unable to load profile. Please sign in.</p>
      )}
    </section>
  )
}
