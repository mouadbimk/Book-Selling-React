import { Outlet, Navigate } from "react-router-dom";
import AccountSideBar from "../components/Account/AccountSideBar";
import { useUserContext } from "../context/UserContext";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import UserApi from "../services/api/User";

const Account = () => {
  const { user, authenticated,setUser } = useUserContext();

  useEffect(()=>{
    UserApi.getUser().then(({data})=>{
      setUser(data)
    })
  },[])
  // If user is not authenticated, navigate to login page
  if (!authenticated) {
    return <Navigate to="/login" replace/>;
  }

if(!user){
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Loader className="animate-spin text-gray-500 w-12 h-12" />
    </div>
  );
}

  return (
    <div className="accountPage flex">
      <div className="accountPage__sideBar">
        <AccountSideBar />
      </div>
      <div className="accountPage__content flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Account;
