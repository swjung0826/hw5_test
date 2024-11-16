import React, { useState } from "react";
import CreateUser from "../User/CreateUser";
import GetUser from "../User/GetUser";
import UpdateUser from "../User/UpdateUser";
import DeleteUser from "../User/DeleteUser";

const ShowList = () => {
  const [users, setUsers] = useState([]);

  const refreshUsers = () => {
    fetch("https://672a33bd976a834dd0228aa9.mockapi.io/api/vi/students")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  return (
    <div className="container">
      <h2>CRUD Program</h2>
      <CreateUser refreshUsers={refreshUsers} />
      <UpdateUser refreshUsers={refreshUsers} />
      <DeleteUser refreshUsers={refreshUsers} />
      <GetUser users={users} setUsers={setUsers} />
    </div>
  );
};

export default ShowList;
