import React from "react";
import "./App.css";
import VideoEditing from "./pages/VideoEditing";
import { BrowserRouter } from "react-router-dom";

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
