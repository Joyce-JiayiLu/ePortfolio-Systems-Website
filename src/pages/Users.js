import React, { useState } from "react";
import { useUsers, updateCaregiver, deleteCaregiver } from "../api";
//import Loading from "../components/Loading";
import Button from "../components/Button";
//import ReactStars from "react-rating-stars-component";
//import Upload from "../components/Upload";

export default function Users() {
    if(!window.sessionStorage.getItem("userid")){
        alert("You are not logged in! Please Log in and try again!");
        window.location.assign("http://localhost:3000/Login");
    }
    const { loading, users, error } = useUsers();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    // Display a list of the caregivers
    return (
        <div>
            <div className={"list_style"}>
                <div id={"filter_place"}></div>
                <div id={"join_button"}>
                </div>
                <div id="careGiverList">
                    {users.map(user => {
                        if(user.userid===window.sessionStorage.getItem("userid")){
                        //console.log(caregiver);
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