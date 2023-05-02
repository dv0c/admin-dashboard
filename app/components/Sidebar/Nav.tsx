'use client'
import { LayoutDashboardIcon as DbIcon } from 'lucide-react';
import { Mail as MailIcon } from 'lucide-react';
import { CalendarDays as CalendarIcon } from 'lucide-react';
import { Bell } from 'lucide-react';
import { BiMessageSquareDots as MessageIcon } from 'react-icons/bi'
import { CalendarCheck } from 'lucide-react';
import { FileText } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Settings2 } from 'lucide-react';
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { Account } from './Account';
import { Team } from './Team';
import Search from './Search';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'

type props = {
    currentUser: any,
    child: any;
}

const Nav = (props: props) => {

    const selectedRoute = props.child?.props?.childProp?.segment

    const router = useRouter()

    const navigate = (route: string) => {
        router.push(route)
        router.refresh()
    }

    const data = [
        {
            id: 1,
            name: 'Home',
            list: [{
                name: 'Dashboard',
                icon: <DbIcon size={24} className='text-gray-700' />,
                redirect: '/dashboard',
                selected: selectedRoute === 'dashboard' ? true : false
            }]
        },
        {
            id: 2,
            name: 'Applications',
            list: [
                {
                    name: 'Mail',
                    icon: <MailIcon size={24} className='text-gray-700' />,
                    redirect: '/mail',
                    selected: selectedRoute === 'mail' ? true : false
                },
                {
                    name: 'Calendar',
                    icon: <CalendarIcon size={22} className='text-gray-700' />,
                    redirect: '/calendar',
                    selected: selectedRoute === 'calendar' ? true : false
                },
                {
                    name: 'Notification',
                    icon: <Bell size={24} className='text-gray-700' />,
                    redirect: '/notifications',
                    selected: selectedRoute === 'notifications' ? true : false
                },
                {
                    name: 'Messages',
                    icon: <MessageIcon size={24} className='text-gray-700' />,
                    redirect: '/messages',
                    selected: selectedRoute === 'messages' ? true : false
                },
            ],
        },
        {
            id: 3,
            name: 'Tools',
            list: [
                {
                    name: 'Todo Board',
                    icon: <CalendarCheck size={24} className='text-gray-700' />,
                    redirect: '/todo',
                    selected: selectedRoute === 'todo' ? true : false
                },
                {
                    name: 'Documenation',
                    icon: <FileText size={22} className='text-gray-700' />,
                    redirect: '/docs',
                    selected: selectedRoute === 'docs' ? true : false
                },
                {
                    name: 'Forum',
                    icon: <MessageSquare size={24} className='text-gray-700' />,
                    redirect: '/forum',
                    selected: selectedRoute === 'forum' ? true : false
                },
                {
                    name: 'Settings',
                    icon: <Settings2 size={24} className='text-gray-700' />,
                    redirect: '/settings',
                    selected: selectedRoute === 'settings' ? true : false
                },
            ],
        }
    ]


    return (
        <nav className='p-3 px-5 max-w-sm border h-screen relative min-w-[280px]'>
            <Team />
            <Search />
            {data.map((i) =>
            (
                <div key={i.id} className="sidebar mt-3">
                    <h1 className="heading select-none">{i.name}</h1>
                    <ul>
                        {i.list.map((e) => (
                            <li key={e.name} className={`
                            ${e.selected ? 'bg-gray-300/40 ps-3' : ''}
                            p-2 ps-0 hover:bg-gray-300/40 cursor-pointer hover:ps-3 rounded-md transition-all`}>
                                <Link onClick={() => router.refresh()} href={e.redirect}>
                                    <div className='flex gap-3 items-center flex-wrap'>
                                        {e.icon}
                                        <span className='font-semibold text-md text-neutral-800'>{e.name}</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )
            )}
            <div className='absolute bottom-0 left-0 p-3 w-full'>
                <Account currentUser={props.currentUser} />
            </div>
        </nav>
    );
}

export default Nav;