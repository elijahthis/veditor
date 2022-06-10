import { Dispatch, SetStateAction, useState } from "react";
import { BodySection1, BodySection2, BodySection3 } from "../BodySections";
import "./Body.scss";

interface BodyProps {
    currentVideo: string;
    setCurrentVideo: Dispatch<SetStateAction<string>>;
}

const Body = ({ currentVideo, setCurrentVideo }: BodyProps): JSX.Element => {
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    return (
        <section className="body">
            <BodySection1
                currentVideo={currentVideo}
                setCurrentVideo={setCurrentVideo}
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
                duration={duration}
                setDuration={setDuration}
            />
            <BodySection2
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
                duration={duration}
                setDuration={setDuration}
            />
            <BodySection3 />
        </section>
    );
};

export default Body;
