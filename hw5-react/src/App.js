import React, { useState, useEffect } from "react";
import ShowList from "./Pages/ShowList"; // ShowList를 Pages 폴더에서 가져옴
import CreateUser from "./components/CreateUser"; // CreateModal은 components 폴더에 위치
import UpdateUser from "./components/UpdateUser"; // UpdateModal은 components 폴더에 위치

function App() {
    const [students, setStudents] = useState([]);
    const [selectedId, setSelectedId] = useState("");

    // CRUD 함수 정의
    const getDataFromJSONFile = async () => {
        // Fetch student data
    };

    const deleteDataToJSONFile = async () => {
        // Delete student data
    };

    const openCreateUser = () => {
        // Open create modal
    };

    const openUpdateUser = () => {
        // Open update modal
    };

    useEffect(() => {
        getDataFromJSONFile();
    }, []);

    return (
        <div>
            <ShowList
                students={students}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                getDataFromJSONFile={getDataFromJSONFile}
                deleteDataToJSONFile={deleteDataToJSONFile}
                openCreateUser={openCreateUser}
                openUpdateUser={openUpdateUser}
            />
            <CreateUser />
            <UpdateUser />
        </div>
    );
}

export default App;
