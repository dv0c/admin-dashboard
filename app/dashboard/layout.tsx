
import '../globals.css'
import { getCurrentUser } from "../actions/getCurrentUser";
import Sidebar from "../components/Sidebar/Sidebar";
import { Provider } from '../components/Provider';

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]";


export const metadata = {
  title: 'Admin - Dashboard',
  description: 'Admin dashboard - BLOG CMS',
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth')
  }

  const user = session.user

  return (
    <html lang="en">
      <body>
          <Sidebar currentUser={user} child={children} />
      </body>
    </html>
  )
}
