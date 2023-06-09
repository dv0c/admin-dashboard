import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]";


export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/auth')
    }
    return (
        <div>Dashboard</div>
    )
}