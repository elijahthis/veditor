import { useState } from "react";
import Body from "../components/Layout/Body";
import Navbar from "../components/Layout/Navbar";

import "../styles/main.scss";

const VideoEditing = (): JSX.Element => {
    const [currentVideo, setCurrentVideo] = useState("");

    return (
        <main className="main">
            <Navbar
                currentVideo={currentVideo}
                setCurrentVideo={setCurrentVideo}
            />
            <Body
                currentVideo={currentVideo}
                setCurrentVideo={setCurrentVideo}
            />
        </main>
    );
};

export default VideoEditing;
