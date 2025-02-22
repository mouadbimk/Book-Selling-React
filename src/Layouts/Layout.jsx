import { Outlet } from "react-router";
import Header from "./header";

export default function Layout(){
    return <div>
        <Header />
        <main className="main">
            <Outlet />
        </main>
    </div>
}