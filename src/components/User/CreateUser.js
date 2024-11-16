import React, { useState } from "react";

const CreateUser = ({ refreshUsers }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleCreate = async () => {
    const response = await fetch("https://672a33bd976a834dd0228aa9.mockapi.io/api/vi/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    });

    if (response.ok) {
      alert("등록 성공!");
      refreshUsers();
      setName("");
      setAge("");
      document.getElementById("createModalClose").click();
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target="#createModal"
      >
        Create DATA
      </button>

      <div
        className="modal fade"
        id="createModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="createModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createModalLabel">
                Create Data
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                id="createModalClose"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter Age"
                className="form-control mb-2"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleCreate}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
