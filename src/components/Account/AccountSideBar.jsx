import { Book, List, MessageCircle, Settings } from "lucide-react";
import { Link } from "react-router";

const AccountSideBar = () => {
    return (
        <div className="accountPage__SideBar">
            <img src="http://placehold.co/200x80" alt="" />
            <Link to={'/account/setting'}><Settings/>Account Setting</Link>
            <Link to={'/account/setting'}><Book/>My Books</Link>
            <Link to={'/account/setting'}><List/>My Command</Link>
            <Link to={'/account/setting'}><MessageCircle/>Comments</Link>
        </div>
    );
}

export default AccountSideBar;
