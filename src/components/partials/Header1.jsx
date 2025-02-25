import { Link } from "react-router";
import '@/styles/scss/style.css';
import {AlignJustify, X} from 'lucide-react';
import {useRef} from "react";
import ButtonLogins from "../Login/ButtonLogins";

const Header1 = () => {
    const navRef = useRef();
    const showNavBar = ()=>{
        navRef.current.classList.toggle('responsive_nav');
    }
    return (
        <header className="header">
            <div className="header__logo">
                <img src="https://placehold.co/350x100" alt="" />
            </div>
            
            <nav ref={navRef}>
            <button className={"nav-btn"} onClick={showNavBar}>
                    <X />
                </button>
                <Link to={'/'}>Home</Link>
                <Link to={'/books'}>Books</Link>
                <Link to={'/blog'}>Blogs</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact Us</Link>
                <ButtonLogins/>
            </nav>

            <button className={"nav-btn nav-close-btn"} onClick={showNavBar}>
                <AlignJustify />
            </button>
        </header>
        
    );
}

export default Header1;

