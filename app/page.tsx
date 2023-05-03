'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { getSession } from "next-auth/react"

export default function Home() {

  const session = getSession()

  const router = useRouter()

  if (!session) {
    router.push('/auth')
  }

  useEffect(() => {
    router.push('/dashboard')
  })

  return (
    <h1>Page not found redirecting to /dashboard</h1>
  )
}
