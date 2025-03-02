import { Link } from "react-router";
import '@/styles/scss/style.css';
export default function Login(){
    return <div className="loginPage">
        <div className="loginPage__box">
            <div className="loginPage__col">
                <div className="loginPage__back">
                    <h1>Welcome Back</h1>
                </div>
                <div className="loginPage__form">
                    <form>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Example@email.com" />
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="At least 8 characters" />
                    </div>
                    <div className="loginPage__link">
                    <Link to={'#'}>Forgot Password?</Link>
                    </div>
                    <button className="btn" type="submit">Sign in</button>

                    <span className="line">Or</span>
                    <button className="loginPage__btn_social"><img src="../../src/assets/google.png" alt="google_icon" /> Sign in With Google</button>
                    <button className="loginPage__btn_social"><img src="../../src/assets/facebook.png" alt="facebook_icon" /> Sign in With Facebook</button>
                    <span className="signup">Don&lsquo;t you have an account?<Link to={'#'}>Sign up</Link></span>
                    </form>
                 
                </div>
            </div>
           
        </div>
    </div>
}