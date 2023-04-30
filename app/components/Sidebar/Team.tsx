import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ChevronsUpDown as DownUp } from 'lucide-react'
type Props = {

}



export const Team = (props: Props) => {
    return (
        <div className='ms-3 flex items-center gap-3 py-3 cursor-pointer hover:underline
        '>
            <Avatar>
                <AvatarImage src="https://t3.ftcdn.net/jpg/04/00/47/88/360_F_400478854_eAL87XQTJyakxh1XSadIxSojtBjm7z8b.jpg" />
                <AvatarFallback className='uppercase'>TM</AvatarFallback>
            </Avatar>
            <div className='font-semibold '>
                Team Internal Inc
            </div>
            <div>
                <DownUp />
            </div>
        </div>
    )
}