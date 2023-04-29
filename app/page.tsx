import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Form } from './Login/form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Form />
    </div>
  )
}
