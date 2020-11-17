import React from "react";
import {useUsers} from "../api";


export default function Users() {
    if (!window.sessionStorage.getItem("userid")) {
        alert("You are not logged in! Please Log in and try again!");
        // window.location.assign("https://genius-solio.herokuapp.com/Login");
        window.location.assign(`http://localhost:3000/Login`);
    }
    const {loading, users, error} = useUsers();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    return (
        <div>
            <div className={"list_style"}>
                <div id={"filter_place"}></div>
                <div id={"join_button"}>
                </div>
                <div id="careGiverList">
                    {users.map(user => {
                        if (user.userid === window.sessionStorage.getItem("userid")) {
                            return <div>
                                <div id="name">
                                    {user.first_name} {user.last_name}<br/><br/>
                                </div>
                                <div id="intro">
                                    gender : {user.gender}
                                </div>

                                <div id="intro">
                                    introduction : {user.introduction}
                                </div>
                            </div>
                        }
                    })}
                </div>
            </div>
        </div>
    );
}