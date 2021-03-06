import Body from "../components/Layout/Body";
import Navbar from "../components/Layout/Navbar";
import "../styles/main.scss";

const VideoEditing = (): JSX.Element => {
    return (
        <>
            <main className="main">
                <Navbar />
                <Body />
            </main>
        </>
    );
};

export default VideoEditing;
