'use client'

import React, { useCallback, useEffect } from 'react'
import { Input } from "../ui/input"
import { Button } from '../ui/button'
import { FcGoogle as Google } from 'react-icons/fc'
import { AiOutlineGithub as Github } from 'react-icons/ai'
import { signIn } from 'next-auth/react'

type Props = {}

export const Form = (props: Props) => {

  return (
    <div className='text-white max-w-sm p-10 bg-[#0b0f1a] shadow-xl rounded-xl'>
      <div>
        <div className='text-center'>
          <h1 className='text-2xl font-semibold'>Create an account</h1>
          <p className='text-gray-400'>Enter your email below to create your account</p>
        </div>
        <section className='grid gap-3 mt-10'>
          <Input placeholder='name@example.com' type='email' className='border-gray-500' />
          <Button className='bg-white text-black w-full'>
            Sign in with Email
          </Button>
        </section>
        <div className="relative mt-10">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-800"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#0b0f1a] px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        <section className='text-black grid gap-3 mt-10'>
          <Button variant={'outline'} className='text-white border-gray-500 flex w-full'>
            <Google className='mr-auto flex' />
            <span className='flex-1'>Continiue with Google</span>
          </Button>
          <Button variant={'outline'} className='text-white border-gray-500 flex w-full' onClick={() => signIn('github', { callbackUrl: '/' })}>
            <Github className='mr-auto flex' />
            <span className='flex-1'>Continiue with Github</span>
          </Button>
        </section>
        <section className='mt-5'>
          <p className="px-8 text-center text-sm text-muted-foreground">By clicking continue, you agree to our <a className="underline underline-offset-4 hover:text-primary" href="/terms">Terms of Service</a> and <a className="underline underline-offset-4 hover:text-primary" href="/privacy">Privacy Policy</a>.</p>
        </section>
      </div>
    </div>
  )
}