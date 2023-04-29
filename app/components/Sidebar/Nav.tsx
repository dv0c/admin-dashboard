import { LayoutDashboardIcon as DbIcon } from 'lucide-react';
import { Mail as MailIcon } from 'lucide-react';
import { CalendarDays as CalendarIcon } from 'lucide-react';
import { Bell } from 'lucide-react';
import { BiMessageSquareDots as MessageIcon } from 'react-icons/bi'
import { CalendarCheck } from 'lucide-react';
import { FileText } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Settings2 } from 'lucide-react';

const Nav = () => {

    const data = [
        {
            name: 'Home',
            list: [{
                name: 'Dashboard',
                icon: <DbIcon size={24} className='text-gray-700' />,
                redirect: '/'
            }]
        },
        {
            name: 'Applications',
            list: [
                {
                    name: 'Mail',
                    icon: <MailIcon size={24} className='text-gray-700' />,
                    redirect: '/mail'
                },
                {
                    name: 'Calendar',
                    icon: <CalendarIcon size={22} className='text-gray-700' />,
                    redirect: '/calendar'
                },
                {
                    name: 'Notification',
                    icon: <Bell size={24} className='text-gray-700' />,
                    redirect: '/notifications'
                },
                {
                    name: 'Messages',
                    icon: <MessageIcon size={24} className='text-gray-700' />,
                    redirect: '/messages'
                },
            ],
        },
        {
            name: 'Tools',
            list: [
                {
                    name: 'Todo Board',
                    icon: <CalendarCheck size={24} className='text-gray-700' />,
                    redirect: '/mail'
                },
                {
                    name: 'Documenation',
                    icon: <FileText size={22} className='text-gray-700' />,
                    redirect: '/docs'
                },
                {
                    name: 'Forum',
                    icon: <MessageSquare size={24} className='text-gray-700' />,
                    redirect: '/forum'
                },
                {
                    name: 'Settings',
                    icon: <Settings2 size={24} className='text-gray-700' />,
                    redirect: '/settings'
                },
            ],
        }
    ]


    return (
        <nav className='p-3 max-w-sm border'>

            {data.map((i) =>
            (
                <div key={i.name} className="sidebar mt-3">
                    <h1 className="heading ps-3">{i.name}</h1>
                    <ul>
                        {i.list.map((e) => (
                            <li key={i.name} className='p-2 ps-3 hover:bg-slate-300 cursor-pointer rounded-md transition'>
                                <div className='flex gap-3 items-center'>
                                    {e.icon}
                                    <span className='font-semibold text-lg text-slate-600'>{e.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )
            )}
        </nav>
    );
}

export default Nav;