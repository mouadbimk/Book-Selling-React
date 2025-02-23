import '@/styles/css/BannerNewsLetter.css';

const BannerNewsLetter = ()=>{
    return <div className="newsletterBanner">
    <div className="newsletterBanner__content">
    <h4 className="newsletterBanner__title">sign up for newsletter</h4>
    <p className="newsletterBanner__para">get e-mail updates about our latest Books and <span>Special Offers.</span></p>
    </div>
    <form className="newsletterBanner__form">
    <input type="email" className="newsletterBanner__input" placeholder='Enter Your Email...'/>
    <button type="submit" className="newsletterBanner__btn">Subscribe</button>
    </form>
    </div>
}
export default BannerNewsLetter;