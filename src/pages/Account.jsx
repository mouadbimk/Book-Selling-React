import { Outlet } from "react-router";
import AccountSideBar from "../components/Account/AccountSideBar";
import '@/styles/scss/style.css';
const Account = () =>{
    return <>
      <div className="accountPage">
        <div className="accountPage__sideBar">
            <AccountSideBar/>
        </div>
        <div className="accountPage__content">
            <Outlet/>
        </div>
      </div>
    </>
}
export default Account;