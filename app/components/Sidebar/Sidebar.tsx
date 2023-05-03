
import Main from "./Main";
import Nav from "./Nav";

type props = {
    currentUser: any,
    child: any
}

const Sidebar = (props: props) => {    
    return (
        <div className="flex">
            <Nav currentUser={props.currentUser} child={props.child} />
            <Main child={props.child} currentUser={props.currentUser} />
        </div>
    );
}

export default Sidebar;