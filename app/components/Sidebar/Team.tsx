'use client'
import React, { useState } from 'react'
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'


type Props = {

}

export const Team = (props: Props) => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")


    return (
        <div className='py-3 pb-5 flex justify-between items-center cursor-not-allowed select-none'>
            <div className='flex gap-3 items-center'>
                <Avatar>
                    <AvatarImage src=''></AvatarImage>
                    <AvatarFallback>PT</AvatarFallback>
                </Avatar>
                Public Team
            </div>
            <ChevronsUpDown size={20} className='text-gray-500' />
        </div>
    )
}