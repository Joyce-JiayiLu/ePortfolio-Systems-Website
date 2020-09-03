import { useState, useEffect } from "react";

// TODO - update this to be your url
const BASE_URL = "http://localhost:3001";

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
