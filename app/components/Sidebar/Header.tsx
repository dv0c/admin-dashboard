import Online from "./Online";

type props = {
    currentUser: any,
    child:any
}


const Header = (props: props) => {
    return (
        <div className="flex flex-col w-full">
            <header className="flex justify-between w-full border-b px-10 items-center py-5">
                <div className="bg-white flex justify-between w-full">
                    <div className="text-2xl font-semibold relative">
                        <h1 className="relative">
                            <span>🎈</span>
                            <span>Welcome back {props.currentUser.name}</span>
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

export default Header;