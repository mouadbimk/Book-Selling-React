import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./Footer";

export default function Layout(){
    return <div>
        <Header />
        <main className="main">
            <Outlet />
        </main>
        <Footer/>   
    </div>
}