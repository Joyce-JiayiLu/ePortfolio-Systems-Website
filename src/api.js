import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import axios from "./axios";

const BASE_URL = "https://geniusolio.herokuapp.com";
//const BASE_URL = "http://localhost:3000/";

export function getUsers() {
    const endpoint = BASE_URL + `/user`;
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });
}

export function getCollections() {
    const endpoint = BASE_URL + `/collection`;
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });
}

export function getUser(id) {
    const endpoint = BASE_URL + `/user/${id}`;
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });
}
export function getCollection(id) {
    const endpoint = BASE_URL + `/collection/${id}`;
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    }).then(data=>{
        if(data){
            console.log(data);
            return data;
        }
        });
}

export function getUserAndCreat(id) {
    const endpoint = BASE_URL + `/user/${id}`;
    return fetch(endpoint).then(res => {
        if (!res.ok) {
            const user = {"userid": id};
            createUser(user);
        }
    });
}


export function useUsers() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsers()
            .then(users => {
                setUsers(users);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        users,
        error
    };
}

export function useCollections() {
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCollections()
            .then(users => {
                setCollections(users);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        collections,
        error
    };
}

export function updateUserProfile(user) {
    const {userid, firstname, lastname, gender, introduction, age} = user;
    let reg = /^[0-9]+.?[0-9]*$/;
    // if(!reg.test(age)){
    //   alert("age must be number!");
    //   return;
    // }

    if (!firstname || !lastname) {
        alert("must include a first name or last name to update!");
        return;
    }

    if (!introduction) {
        alert("must include an introduction!");
        return;
    }
    const endpoint = BASE_URL + `/user/${userid}`;
    //console.log(contact_information.value);
    // return fetch query to update an author
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userid,
            firstname,
            lastname,
            introduction,
            age,
            gender,
        })
    }).then(res => {
        console.log("success!")
        //window.location.assign(`https://genius-solio.herokuapp.com/usercenter`)
        window.location.assign(`http://localhost:3000/usercenter`);
    });
}

export function uploadResume(user) {
    const {userid, resume} = user;
    const endpoint = BASE_URL + `/user/${userid}`;
    //console.log(contact_information.value);
    // return fetch query to update an author
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userid,
            resume
        })
    }).then(res => {
        console.log("success!")
        //window.location.assign(`https://genius-solio.herokuapp.com/resume/`)
        window.location.assign(`http://localhost:3000/resume`);

    });
}

export function checkUser(user) {
    const endpoint = BASE_URL + `/user/${user.userid}`;
    return fetch(endpoint).then(res => {
        //console.log(res);
        return res.json();
    }).then(res => {
        console.log("here");
        if (res.ok) {
            console.log("ok");
            updateUserProfile(user);
        } else {
            console.log("400");
            createUser(user);
        }
    });
}

function createUser(user) {
    const {userid, first_name, last_name, gender, introduction, email_address, image, resume, age} = user;
    const endpoint = BASE_URL + `/user`;
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            first_name,
            last_name,
            gender,
            introduction,
            userid,
            age,
            "image":"https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png",
            // email_address,
            // image,
            // resume
        })
    }).then();
}

/*
export async function search(title) {
  const {query} = title;
  let response = await axios.post(
      "/search",
      null,
      {params: {
          name: query,
        }}
  );
  const result = JSON.stringify(response);
  console.log(result)
  return result;
}*/

export function search(title) {
    const {name} = title;
    console.log(name);
    const endpoint = BASE_URL + `/search`;
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name
        })
    }).then(res => {
        //console.log(res.json());
        return res.json();
    }).then(data => {
        if (data) {
            console.log(data);
            window.sessionStorage.setItem("result", data);
            //window.location.assign("https://genius-solio.herokuapp.com/search");
            window.location.assign(`http://localhost:3000/search`);
        }
    });
}

export function updateimage(url) {
    var user_token = localStorage.getItem("id_token");
    var userid = jwt_decode(user_token).sub;
    const endpoint = BASE_URL + `/user/${userid}`;
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": userid,
            "image": url

        })
    }).then(res => {
        if (res.ok) {
            //window.location.assign(`https://genius-solio.herokuapp.com/usercenter`)
            window.location.assign(`http://localhost:3000/usercenter`);
            //window.location.href = `CaregiverInformation/${username}`;
        }
    });
}

export function createCollection() {
    var user_token = localStorage.getItem("id_token");
    var userid = jwt_decode(user_token).sub;
    const title = sessionStorage.getItem("title");
    const coverUrl = sessionStorage.getItem("coverUrl");
    const tags = sessionStorage.getItem("portfolio_value");
    const description = sessionStorage.getItem("description");
    const fileUrl = sessionStorage.getItem("fileUrl");
    const resumeUrl = sessionStorage.getItem("resumeUrl");
    const endpoint = BASE_URL + `/collection/`;
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "userid": userid,
            "title": title,
            "description": description,
            "tag": tags,
            "cover": coverUrl,
            "file": fileUrl,
             "resume":resumeUrl,

        })
    }).then(res => {
        if (res.ok) {
            //window.location.assign(`https://genius-solio.herokuapp.com/usercenter`)
            window.location.assign(`http://localhost:3000/usercenter`);
            //window.location.href = `CaregiverInformation/${username}`;
        }
    });
}

export function deleteCollection(id){
    console.log("keep running");
    const endpoint = BASE_URL + `/collection/`;
    return fetch(endpoint, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "_id":id

        })
    }).then(res => {
        if (res.ok) {
            //window.location.assign(`https://genius-solio.herokuapp.com/portfoliocollections`)
            //window.location.assign(`http://localhost:3000/portfoliocollections`);
            //window.location.href = `CaregiverInformation/${username}`;
        }
    });
}
export function updateCollection(userid,title,describtion){
    const endpoint = BASE_URL + `/collection/`;
    //console.log(contact_information.value);
    // return fetch query to update an author
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userid,
            title,
            describtion
        })
    }).then(res => {
        console.log("success!")
        window.location.assign(`https://genius-solio.herokuapp.com/`)
    });
}

export function getCollectionId(id){
    const endpoint = BASE_URL + `/collection/`+ id;
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });
}

export function getBookmark(userid){
    const endpoint = BASE_URL + `/bookmark/` + userid;
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });
}

export function addBookmark(userid,collectionid){
    const endpoint = BASE_URL + `/bookmark/`;
    console.log(userid);
    console.log(collectionid);
    console.log("add bookmark successful");
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "userid":userid,
            "collectionid":collectionid,
        })
    }).then(res => {
        if(!res.ok){

        }
        //console.log("success!")
        //window.location.assign(`https://genius-solio.herokuapp.com/`)
    });
}
export function useBookmark(userid) {
    const [loading, setLoading] = useState(true);
    const [bookmarks, setbookmarks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getBookmark(userid)
            .then(bookmarks => {
                setbookmarks(bookmarks);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        bookmarks,
        error
    };
}

export function deleteBookmark(userid, collectionid){
    const endpoint = BASE_URL + `/bookmark/`;
    return fetch(endpoint, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "userid":userid,
            "collectionid":collectionid,
        })
    }).then(res => {
        if(!res.ok){

        }
        //console.log("success!")
        //window.location.assign(`https://genius-solio.herokuapp.com/`)
    });
}
