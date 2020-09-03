import React, { useState } from "react";
import { useAuthors, updateAuthor, deleteAuthor } from "../api";

import Button from "../components/Button";

export default function Authors() {
  const { loading, authors, error } = useAuthors();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  // use this to make sure you are getting the right data
  console.log(authors);

  // Display a list of the authors
  return null;
}

function Author(author) {
  const { id, first_name, last_name } = author;
  const [showUpdate, setShowUpdate] = useState(false);

  return (
    <div className={`author author-${id}`} key={id}>
      <div className="info">
        ({id}) {first_name} {last_name}
        <Button className={"btn"} onClick={() => setShowUpdate(!showUpdate)}>
          {showUpdate ? "-" : "+"}
        </Button>
      </div>
      <AuthorExtended {...author} showUpdate={showUpdate} />
    </div>
  );
}

function AuthorExtended(props) {
  const { id, first_name, last_name, showUpdate } = props;

  // const [id_input, setId] = useState(id);
  // const [first_input, setFirstName] = useState(first_name);
  // const [last_input, setLastName] = useState(last_name);

  function onSubmit() {
    // call upate author function
    // updateAuthor({
    //   id: id_input,
    //   first_name: first_input,
    //   last_name: last_input
    // });
  }

  return (
    <div className={`author-expand ${showUpdate ? "show" : ""}`}>
      <form>
        {/* TODO - add value and onChange properties to inputs */}
        <input type="text" name="id" />
        <input type="text" name="first_name" />
        <input type="text" name="last_name" />
        <Button className={"btn-warning"} onClick={onSubmit}>
          Update
        </Button>
      </form>
      <Button className={"btn-danger"} onClick={() => deleteAuthor(id)}>
        Delete
      </Button>
    </div>
  );
}
