import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";

const BASE_URL = "https://geniusolio.herokuapp.com";

function getUsers() {
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

export function getUserAndCreat(id) {
  const endpoint = BASE_URL + `/user/${id}`;
  return fetch(endpoint).then(res => {
    if(!res.ok){
      const user = {"userid":id};
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
  const { userid, first_name, last_name, gender, introduction, age} = user;
  let reg=/^[0-9]+.?[0-9]*$/;
  // if(!reg.test(age)){
  //   alert("age must be number!");
  //   return;
  // }

  if (!first_name || !last_name) {
    alert("must include a first name or last name to update!");
    return;
  }

  if (!introduction){
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
      first_name,
      last_name,
      introduction,
      age,
      gender,
    })
  }).then(res =>{
    console.log("success!")
    window.location.assign(`http://localhost:3000/usercenter`)
  });
}

export function uploadResume(user) {
  const { userid, resume} = user;
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
  }).then(res =>{
    console.log("success!")
    window.location.assign(`http://localhost:3000/resume/`)

  });
}

export function checkUser(user) {
  const endpoint = BASE_URL + `/user/${user.userid}`;
  return fetch(endpoint).then(res => {
    //console.log(res);
    return res.json();
  }).then(res =>{
    console.log("here");
      if(res.ok){
        console.log("ok");
        updateUserProfile(user);
      }
      else{
        console.log("400");
        createUser(user);
      }
  });
}

function createUser(user){
  const { userid, first_name, last_name, gender, introduction, email_address, image, resume, age} = user;
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
      // email_address,
      // image,
      // resume
    })
  }).then();
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
      "username":userid,
      "image": url

    })
  }).then(res =>{
    if(res.ok){
      window.location.assign(`http://localhost:3000/usercenter`)
      //window.location.href = `CaregiverInformation/${username}`;
    }
  });
}