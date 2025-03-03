import { Link } from "react-router";
import { AlignJustify, X } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button"

const Header = () => {
    const navRef = useRef()
    const showNavBar = ()=>{
        navRef.current.classList.toggle('responsive_nav');
    }
    return (
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
                <Link to={'/login'}><Button>Login</Button></Link>
                <Link to={'/register'}><Button>SignUp</Button></Link>
                </div>
            </div>
            
            
            <button className={"header__nav-btn"} onClick={showNavBar}>
                <AlignJustify />
            </button>
        </header>
        
    );
}

export default Header;

