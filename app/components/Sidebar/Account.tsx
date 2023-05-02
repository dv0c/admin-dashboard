'use client'
import React, { useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LogOut } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { useContainerDimensions } from '@/app/actions/getDimensions'
type Props = {
    currentUser: any
}

import { signOut } from 'next-auth/react'

export const Account = (props: Props) => {

    const ref: any = useRef<HTMLInputElement>(null);
    const { width } = useContainerDimensions(ref)


    return (
        <div className='select-none'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className='border rounded-lg px-3 py-2 hover:shadow transition cursor-pointer' ref={ref}>
                        <div className='flex justify-between flex-wrap items-center'>
                            <div className='flex gap-3 items-center'>
                                <Avatar>
                                    <AvatarImage src={props.currentUser.image} />
                                    <AvatarFallback className='uppercase'>{props.currentUser.name}</AvatarFallback>
                                </Avatar>
                                <div className='font-semibold line-clamp-1'>
                                    {props.currentUser.name}
                                    {props.currentUser.role && (
                                        <div>
                                            •
                                            {props.currentUser.role}
                                        </div>

                                    )}

                                </div>
                            </div>
                            <div>
                                <LogOut />
                            </div>
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`max-w-[var(--calc-width)] w-screen`}>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <style global jsx>
                {
                    `
                body {
                    --calc-width: ${width}px;
                }
                    `
                }
            </style>
        </div>
    )
}