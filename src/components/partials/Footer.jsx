import { FacebookIcon, Github, Instagram, Mail, X, Youtube } from 'lucide-react';
const Footer = ()=>{
    const date = new Date().getFullYear();
    
    return <footer className='footer'>
        <div className="footer__content">
            <div className="footer__cols">
                <div className="footer__col1">
                    <div className="footer__col3">
                        <img src="http://placehold.co/190x80" alt="logo footer" />
                        <p>Book4u - BookStore Script System is an online Discovering great books website filled with the latest and best selling Books.</p>
                    </div>
                    <div className="footer__social_links">
                        <a href="#" style={{backgroundColor:'#4460A1'}} ><FacebookIcon/></a>
                        <a href="#" style={{backgroundColor:'red'}}><Youtube/></a>
                        <a href="#"><X/></a>
                        <a href="#" style={{backgroundColor:'#833AB4'}}><Instagram/></a>
                        <a href="#" style={{backgroundColor:'#0005'}}><Github/></a>
                        <a href="#" style={{backgroundColor:'#112D4E'}}><Mail/></a>
                    </div>
                </div>
                <div className="footer__col2">
                    <div className="footer__top__book">
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                    </div>
                    <div className="footer__top_book">
                    <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                        <div className="footer__book">
                        <h3>The Whispering Forest</h3>
                        <p>190</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <hr className='footer__bar' />
            <div className="footer__copy">
                <p>© Copyright For Mouad Bimekliouen {date}. All Rights Reserved</p>
                <span>Amazon Affiliate Program Paypal cashback mastercard</span>
            </div>
    </footer>
}
export default Footer;