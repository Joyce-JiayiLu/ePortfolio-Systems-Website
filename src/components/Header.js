import React, { useState } from "react";

import { addAuthor } from "../api";
import Button from "../components/Button";

export default function Header() {
  // const [id, setId] = useState("");
  // const [first_name, setFirstName] = useState("");
  // const [last_name, setLastName] = useState("");

  function onSubmit() {
    // addAuthor({
    //   id,
    //   first_name,
    //   last_name
    // });
  }

  return (
    <div className="addAuthor">
      Add New Author
      <form>
        <input
          type="text"
          placeholder="Author id"
          name="id"
          // value={id}
          // onChange={event => {
          //   setId(event.target.value);
          // }}
        />
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          // value={first_name}
          // onChange={event => {
          //   setFirstName(event.target.value);
          // }}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          // value={last_name}
          // onChange={event => {
          //   setLastName(event.target.value);
          // }}
        />
        <Button className={"btn-success"} onClick={onSubmit}>
          Save
        </Button>
      </form>
    </div>
  );
}
