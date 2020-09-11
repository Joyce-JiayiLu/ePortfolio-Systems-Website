import React from "react";
import { useAuth0} from "@auth0/auth0-react";
import LogoutButton from "../components/LogoutButton";
import LoginButton from "../components/LoginButton";
import UpdateProfileButton from "../components/UpdateProfileButton";

export default function Login() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated }  = useAuth0();
    if (isAuthenticated){
        console.log("yes is authenticated");
        window.sessionStorage.setItem("userid",user.sub);
    return (
        <div>
            <LogoutButton />

        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.sub}</p>

        </div>
            <UpdateProfileButton />
        </div>
    );}else{
        return (
            <div>
                <LoginButton />
            </div>
        );
    }
}