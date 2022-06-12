import React from "react";
import "./App.css";
import VideoEditing from "./pages/VideoEditing";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <VideoEditing />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
