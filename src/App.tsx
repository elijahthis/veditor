import React from "react";
import "./App.css";
import VideoEditing from "./pages/VideoEditing";
import { BrowserRouter } from "react-router-dom";
import Modal from "./components/UI/Modals/Modal";
import { useModal } from "./hooks/useModal";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <VideoEditing />
            </div>
            
        </BrowserRouter>
    );
}

export default App;
