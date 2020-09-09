import React from "react";
import { useAuth0} from "@auth0/auth0-react";

export default function Login() {
    const {loginWithRedirect } = useAuth0();
    const {logout } = useAuth0();
    const { user, isAuthenticated }  = useAuth0()
    if (isAuthenticated){
        window.sessionStorage.setItem("userid",user.sub);
    return (
        <div>
            <button onClick={() => logout()}>Log out</button>

        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.sub}</p>

        </div>
            <button onClick={() => updateUserProfile(user)}> Update </button>
        </div>
    );}else{
        return (
            <div>
                <button onClick={() => loginWithRedirect()}>Log in</button>
            </div>
        );

    }

}

function updateUserProfile(user){
    window.location.assign(`http://localhost:3000/updateProfile/${user.sub}`);
}