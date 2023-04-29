import { PieChart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Form } from "../components/Login/Form";

const page = () => {
    return (
        <div className='flex justify-between bg-[#030711]'>
            <div className='w-1/2 h-screen border-r border-gray-700'>
                <div className={`h-screen bg-cover bg-[url('https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80')]`}></div>
                <div className='absolute top-0 left-0 p-8 flex w-full justify-between'>
                    <span className='text-white font-semibold text-3xl flex gap-3 items-center'>
                        <PieChart size={30} className='mt-1' />
                        Acme Inc.
                    </span>
                    <Button variant={'outline'} className='border-none text-white'>
                        Login to your account
                    </Button>
                </div>
                <div className='absolute bottom-0 left-0 p-8'>
                    <p className='text-white text-2xl w-1/2 mb-3'>
                        “This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before. Highly recommended!”
                    </p>
                    <span className='text-white text-xl'>Sofia Davis</span>
                </div>
            </div>
            <div className='w-1/2 flex justify-center items-center h-screen'>
                <Form />
            </div>
        </div>
    );
}

export default page;