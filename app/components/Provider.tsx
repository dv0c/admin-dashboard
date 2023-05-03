'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
type Props = {
    children: React.ReactNode
}

export const Provider = (props: Props) => {
  return (
    <SessionProvider>
        {props.children}
    </SessionProvider>
  )
}