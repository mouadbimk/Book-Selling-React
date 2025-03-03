import { Link, Outlet } from "react-router-dom";
import Footer from "../components/partials/Footer";
import { useRef } from "react";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUserContext } from "../context/UserContext";
 
export default function Layout(){
    const navRef = useRef()
    const {logout,authenticated} = useUserContext();
        const showNavBar = ()=>{
            navRef.current.classList.toggle('responsive_nav');
        }
    return <div>
        <header className="header">
            <div className="header__logo">
                <img src="https://placehold.co/350x100" alt="logo" />
            </div>
            <div className="header__links" ref={navRef}>
            <nav  className="header__nav">
            <button className={"header__nav-btn nav-close-btn"} onClick={showNavBar}>
                    <X  />
                </button>
                <Link to={'/'}>Home</Link>
                <Link to={'/books'}>Books</Link>
                <Link to={'/blog'}>Blogs</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact Us</Link>
            </nav>
            <div className="header__buttons">
                {authenticated ? (
                    <>
                    <Button  onClick={()=>logout()}>Logout</Button>
                    <Link to={'/account/setting'}><Button>Account</Button></Link>
                    </>
                ):(
                    <>
                    <Link to={'/login'}><Button>Login</Button></Link>
                    <Link to={'/register'}><Button>SignUp</Button></Link>
                    </>
                    
                )

                }
                
                </div>
            </div>
            <button className={"header__nav-btn"} onClick={showNavBar}>
                <AlignJustify />
            </button>
        </header>
        <main className="main">
            <Outlet />
        </main>
        <Footer/>   
    </div>
}