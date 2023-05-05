import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreVertical, Eye, MessageCircle, Flag, Heart } from "lucide-react"

type Props = {
    data: any
}

export const BlogCard = (props: Props) => {
    return (
        <div className="bg-white shadow rounded-md max-w-[23.50rem]">
            <div className="relative">
                <div className="bg-blue-400 inline-block px-4 py-1 rounded-md absolute z-10 right-0 m-3">
                    <h3 className="font-semibold text-white text-sm">Draft</h3>
                </div>
                <Image className="object-cover aspect-video w-full max-w-sm relative rounded-t-md" src={'https://cdn.discordapp.com/attachments/1070343252986834966/1102328900018765836/image.png'} width={300} height={150} alt={""} />
            </div>
            <div className="px-4">
                <div className="flex gap-3 items-baseline border-b py-3 justify-between">
                    <h1 className="text-xl font-semibold">{props.data?.title}</h1>
                    <div>
                        <div className='h-10 w-10 flex items-center justify-center cursor-pointer'>
                            <DropdownMenu>
                                <DropdownMenuTrigger><MoreVertical /></DropdownMenuTrigger>
                                <DropdownMenuContent className='md:mr-10'>
                                    <DropdownMenuLabel>Post Settings</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuLabel>Status</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Online</DropdownMenuItem>
                                    <DropdownMenuItem>Draft</DropdownMenuItem>
                                    <DropdownMenuItem>Banned</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Share</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
                <div className="py-3">
                    <p>
                    {props.data?.description}
                    </p>
                </div>
                <div className="py-3 flex items-center gap-3">
                <div className="flex items-center gap-2">
                        <Heart size={20} />
                        {props.data?.views}
                    </div>
                    <div className="flex items-center gap-2">
                        <Eye size={20} />
                        {props.data?.views}
                    </div>
                    <div className="flex items-center gap-2">
                        <MessageCircle size={20} />
                        {props.data?.comments}
                    </div>
                    <div className="flex items-center gap-2">
                        <Flag size={20} />
                        {props.data?.reports}
                    </div>
                </div>
            </div>
        </div>
    )
}