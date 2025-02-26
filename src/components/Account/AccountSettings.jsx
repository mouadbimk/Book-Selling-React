const AccountSettings = () => {
    return (
        <div className="accountPage__setting">
            <h2>Setting Profile</h2>
            <form>
            <div className="col">
                <div className="input">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" placeholder="first name"/>
                </div>
                <div className="input">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" placeholder="Last name"/>
                </div>
            </div>
            <div className="col">
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" placeholder="Phone Number"/>
                </div>
            </div>
            <button type="submit" className="bg-amber-500 px-5 py-3 text-xl rounded font-medium m-3 hover:bg-blue-500 text-white transition">Save</button>
            </form>
            <h2 className="mt-5">Password</h2>
            <form>
            <div className="col">
                <div className="input" style={{ width: '100%' }}>
                    <label htmlFor="firstname">Password</label>
                    <input type="text" name="firstname" placeholder="Enter Password"/>
                </div>
           
            </div>
            <div className="col">
                <div className="input">
                    <label htmlFor="password">New Password</label>
                    <input type="password" name="password" placeholder="New Password"/>
                </div>
                <div className="input">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" name="password_confirmation" placeholder="Phone Number"/>
                </div>
            </div>
            <button type="submit" className="bg-amber-500 px-5 py-3 text-xl rounded font-medium m-3 hover:bg-blue-500 text-white transition">Save</button>
            </form>
        </div>
    );
}

export default AccountSettings;
