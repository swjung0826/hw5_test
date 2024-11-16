import React, { useState } from "react";

const UpdateUser = ({ refreshUsers }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleUpdate = async () => {
    const response = await fetch(`https://672a33bd976a834dd0228aa9.mockapi.io/api/vi/students/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    });

    if (response.ok) {
      alert("수정 성공!");
      refreshUsers();
      setId("");
      setName("");
      setAge("");
      document.getElementById("updateModalClose").click();
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target="#updateModal"
      >
        Update DATA
      </button>

      <div
        className="modal fade"
        id="updateModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="updateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateModalLabel">
                Update Data
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                id="updateModalClose"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Enter ID"
                className="form-control mb-2"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
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
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
