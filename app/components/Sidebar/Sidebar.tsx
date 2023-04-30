
import Nav from "./Nav";

const Sidebar = () => {
    return (
        <div>
            {/* @ts-expect-error Server Component */}
            <Nav />
        </div>
    );
}

export default Sidebar;