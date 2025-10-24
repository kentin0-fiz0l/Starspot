'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

export default function SignInPage() {
  return (
    <main>
      <h2>Sign in to StarSpot</h2>
      <p>Choose a provider:</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => signIn('google')}>Sign in with Google</button>
        <button onClick={() => signIn('github')}>Sign in with GitHub</button>
      </div>
      <p style={{ marginTop: 12 }}>
        Create OAuth apps in Google/GitHub and add credentials to <code>.env.local</code>.
      </p>
    </main>
  )
}
