'use client'
import { usePathname } from "next/navigation";
import Online from "./Online";

type props = {
    currentUser: any,
    child:any
}


const Main = (props: props) => {
    
    console.log(props?.child?.props);

    const path = usePathname() || "";

    const currentRoute = path.split("/")[2];

    return (
        <div className="flex flex-col w-full">
            <header className="flex justify-between w-full border-b px-10 items-center py-5">
                <div className="bg-white flex justify-between w-full">
                    <div className="text-2xl font-semibold relative">
                        <h1 className="relative">
                            <span className="uppercase">{path === "/dashboard" ? "🎈 W" : currentRoute.slice(0,1)}</span>
                            <span>{path === "/dashboard" ? "elcome back " + props.currentUser.name + " | Dashboard" : currentRoute.slice(1)}</span>
                        </h1>
                    </div>
                    <div>
                        <Online currentUser={props.currentUser} />
                    </div>
                </div>
            </header>
            <main>
                {props.child}
            </main>
        </div>
    );
}

export default Main;