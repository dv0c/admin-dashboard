import '../globals.css'
import { getCurrentUser } from "../actions/getCurrentUser";
import Sidebar from "../components/Sidebar/Sidebar";

export const metadata = {
  title: 'Admin - Dashboard',
  description: 'Admin dashboard - BLOG CMS',
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  return (
    <html lang="en">
      <body>
        <Sidebar currentUser={user} child={children} />
      </body>
    </html>
  )
}
