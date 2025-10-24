'use client'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function AuthHeader() {
  const { data: session, status } = useSession()

  return (
    <header style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
      <nav style={{ flex: 1 }}>
        <Link href="/">Home</Link>
        {' '}|{' '}
        <Link href="/profile">Profile</Link>
      </nav>

      {status === 'loading' ? (
        <div>Loading…</div>
      ) : session ? (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {session.user?.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={session.user.image} alt="avatar" style={{ width: 28, height: 28, borderRadius: 999 }} />
          ) : null}
          <span>{session.user?.name ?? session.user?.email}</span>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <div>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      )}
    </header>
  )
}
