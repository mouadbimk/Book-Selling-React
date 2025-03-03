import { Outlet } from "react-router-dom";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

export default function GuestLayout (){
    return <>
      <Header />
        <main className="main">
            <Outlet />
        </main>
        <Footer />
    </>
      
    
}