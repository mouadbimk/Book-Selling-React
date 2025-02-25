import { Outlet } from "react-router";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

export default function Layout(){
    return <div>
        <Header />
        <main className="main">
            <Outlet />
        </main>
        <Footer/>   
    </div>
}