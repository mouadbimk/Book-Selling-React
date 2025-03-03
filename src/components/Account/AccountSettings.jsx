import { useForm } from "react-hook-form";
import { useUserContext } from "../../context/UserContext";

const AccountSettings = () => {
    const {user} = useUserContext();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors},
    } = useForm({
        defaultValues: {
            firstname: user?.firstname || "",
            lastname: user?.lastname || "",
            email: user?.email || "",
            phone: user?.phone || "",
            password: "",
            newPassword: "",
            password_confirmation: "",
        }
    });
    const newPasswordValue = watch("newPassword");
    const currentPassword = watch('password')
    const onSubmit = async (values)=>{
        const filteredValues = Object.fromEntries(Object.entries(values).filter(([_, value]) => value !== "" && value !== null)
        );
        console.log(filteredValues)
    }   
    return (
        <div className="accountPage__setting">
            <h2>Setting Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col">
                <div className="input">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" {...register("firstname",{required:"First Name is required"})}  placeholder="first name"/>
                    {errors.firstname && <p className="text-red-600 font-medium">{errors.firstname.message}</p>}
                </div>
                <div className="input">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" {...register("lastname",{required:"Last Name is required"})} placeholder="Last name"/>
                    {errors.lastname && <p className="text-red-600 font-medium">{errors.lastname.message}</p>}
                </div>
            </div>
            <div className="col">
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email",{required:"Email is required"})} placeholder="Email" disabled/>
                    {errors.email && <p className="text-red-600 font-medium">{errors.email.message}</p>}
                </div>
                <div className="input">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" {...register("phone",{required:"Phone is required"})} placeholder="Phone Number"/>
                    {errors.phone && <p className="text-red-600 font-medium">{errors.phone.message}</p>}
                 </div>
            </div>
            <h2 className="mt-5">Change Password</h2>
            <div className="col">
                <div className="input" style={{ width: '100%' }}>
                    <label htmlFor="password">Password</label>
                    <input type="password" {...register("password")} placeholder="Enter Password"/>
                    {errors.password && <p className="text-red-600 font-medium">{errors.password.message}</p>}
                </div>
           
            </div>
            <div className="col">
                <div className="input">
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" {...register("newPassword",{required: currentPassword ? "New Password is required" : false,
                        minLength:{value:8 , message: "New Password must be 8 characters"}})} placeholder="New Password"/>
                    {errors.newPassword && <p className="text-red-600 font-medium">{errors.newPassword.message}</p>}
                </div>
                <div className="input">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" {...register('password_confirmation',{required: currentPassword ? "Password Confirmation is required" : false 
                        ,validate:value => value === newPasswordValue || "Password do not match" })} placeholder="Password Confirmation"/>
                    {errors.password_confirmation && <p className="text-red-600 font-medium">{errors.password_confirmation.message}</p>}
                </div>
            </div>
            <button type="submit" className="bg-amber-500 px-5 py-3 text-xl rounded font-medium m-3 hover:bg-blue-500 text-white transition">Save</button>
            </form>
        </div>
    );
}

export default AccountSettings;
