import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { PlusIcon } from 'lucide-react'
import { MoreVertical } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
type Props = {
    currentUser: any,
}

const Online = (props: Props) => {
    return (
        <div className='flex gap-2'>
            <div className='flex items-center relative '>
                <Avatar className=' border z-10'>
                    <AvatarImage src={props?.currentUser?.image} />
                    <AvatarFallback>{props?.currentUser?.name}</AvatarFallback>
                </Avatar>
                <div className='h-3 w-3 z-10 bg-green-400 border rounded-full absolute bottom-0 right-0' />
                {/* <Avatar className='shadow border z-[9] -translate-x-4'>
                    <AvatarImage src={props.currentUser.av} />
                    <AvatarFallback>BOT</AvatarFallback>
                </Avatar>
                <Avatar className='shadow border z-[8] -translate-x-9'>
                    <AvatarImage src={props.currentUser.av} />
                    <AvatarFallback>API</AvatarFallback>
                </Avatar> */}
            </div>
            <div className='flex gap-3 items-center cursor-pointer'>
                <Avatar className='border'>
                    <AvatarImage src={props?.currentUser?.av} />
                    <AvatarFallback>
                        <PlusIcon size={18} className='text-gray-500' />
                    </AvatarFallback>
                </Avatar>
                <div className='h-10 w-10 flex items-center justify-center cursor-pointer'>
                    <DropdownMenu>
                        <DropdownMenuTrigger><MoreVertical /></DropdownMenuTrigger>
                        <DropdownMenuContent className='md:mr-10'>
                            <DropdownMenuLabel>Team Settings</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Manage users</DropdownMenuItem>
                            <DropdownMenuItem>Invite Links</DropdownMenuItem>
                            <DropdownMenuItem>Report feedbacks</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

export default Online