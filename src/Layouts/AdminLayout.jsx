import { Outlet } from "react-router";

export default function AdminLayout(){
    return <div className="adminLayout">
        <div className="sidebar">
        sidebar
        </div>
        <div className="content">
            <Outlet />
            </div>
    </div>
}