import { Link, Navigate, replace, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/UserContext";
export default function Login(){
    
    const {login,setAuthenticated,setToken,authenticated} = useUserContext()
    const navigate = useNavigate();
    if(authenticated){
        Navigate('/account/setting' , replace);
    }
    const {
        register,
        handleSubmit,
        formState:{errors},
        setError
    } = useForm();
    const onSubmit = async (values)=>{
        try{
            await login(values.email,values.password).then(({status,data})=>{
              if(status === 200){
                setToken(data.token);
                setAuthenticated(true)
                const {role} = data.user;
                    if(role === 'admin'){
                        navigate('/admin/dashboard');
                    }else{
                        navigate('/account/setting')
                    }
               }
            });
        }catch(error){
            setError('email',{
                message: error.response.data.error
            });
        }
    }
    return <div className="loginPage">
        <div className="loginPage__box">
            <div className="loginPage__col">
                <div className="loginPage__back">
                    <h1>Welcome Back</h1>
                </div>
                <div className="loginPage__form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" {...register("email",{ required: "Email is required" })} placeholder="Example@email.com" />
                        {errors.email && <p className="error text-red-600 font-medium">{errors.email.message}</p>}
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" {...register("password",{ required:"Password is required",minLength:{value:8, message: "Password must be at least 8 characters"} })} placeholder="At least 8 characters" />
                        {errors.password && <p className="error text-red-600 font-medium">{errors.password.message}</p>}
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