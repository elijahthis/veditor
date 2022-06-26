import React from "react";
import "./App.css";
import VideoEditing from "./pages/VideoEditing";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />

                <div className="App">
                    <VideoEditing />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
