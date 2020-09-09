import { useState, useEffect } from "react";

// TODO - update this to be your url
const BASE_URL = "http://geniusolio.herokuapp.com";

function getAuthors() {
  const endpoint = BASE_URL + `/author-management`;

  // TODO
  // return fetch call that gets author list
}

export function getAuthor(id) {
  const endpoint = BASE_URL + `/author-management/${id}`;

  // TODO
  // return fetch statement to get an author by the id
}

export function addAuthor(author) {
  const { id, first_name, last_name } = author;
  if (!id || !first_name || !last_name) {
    alert("must include all fields");
    return;
  }

  const endpoint = BASE_URL + `/author-management/`;

  // TODO
  // return fetch statement to add an author
}

export function updateAuthor(author) {
  const { id, first_name, last_name } = author;
  if (!id) {
    alert("must include an id");
    return;
  }
  if (!first_name || !last_name) {
    alert("must include a first name or last name to update");
    return;
  }

  const endpoint = BASE_URL + `/author-management/${id}`;

  // return fetch query to update an author
}

export function deleteAuthor(id) {
  const endpoint = BASE_URL + `/author-management/${id}`;

  // return fetch query
}

export function useAuthors() {
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAuthors()
      .then(authors => {
        setAuthors(authors);
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
    authors,
    error
  };
}

export function updateUserProfile(user) {
  const { userid, first_name, last_name, gender, introduction} = user;
  var reg=/^[0-9]+.?[0-9]*$/;
  // if(!reg.test(age)){
  //   alert("age must be number!");
  //   return;
  // }
  if(gender.toLocaleLowerCase() !== "male" && gender.toLocaleLowerCase() !== "female"){
    alert("please include 'male' or 'female' as a gender!");
    return;
  }
  if (!first_name || !last_name) {
    alert("must include a first name or last name to update!");
    return;
  }
  if (!gender){
    alert("must include gender!");
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
      first_name,
      last_name,
      gender,
      introduction,
    })
  }).then(res =>{
    window.location.assign(`http://localhost:3000/login`)

  });
}

export function checkUser(user) {
  const endpoint = BASE_URL + `/user/${user.userid}`;
  return fetch(endpoint).then(res => {
    //console.log(res);
    return res.json();
  }).then(res =>{
      if(res.ok){
        updateUserProfile(user);
      }
      else{
        createUser(user);
      }
  });
}

function createUser(user){
  const { userid, first_name, last_name, gender, introduction, email_address, image, resume} = user;
  const endpoint = BASE_URL + `/user`;
  //console.log(contact_information.value);
  // return fetch query to update an author
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
      // email_address,
      // image,
      // resume
    })
  }).then(res =>{
    //window.location.assign(`https://healthnextdoor.herokuapp.com/user-management/${window.sessionStorage.getItem("username")}`)

  });
}
