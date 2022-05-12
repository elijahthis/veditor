import { Dispatch, SetStateAction } from "react";
import { BodySection1, BodySection2 } from "../BodySections";
import "./Body.scss";

interface BodyProps {
    currentVideo: string;
    setCurrentVideo: Dispatch<SetStateAction<string>>;
}

const Body = ({ currentVideo, setCurrentVideo }: BodyProps): JSX.Element => {
    return (
        <section className="body">
            <BodySection1
                currentVideo={currentVideo}
                setCurrentVideo={setCurrentVideo}
            />
            <BodySection2 />
        </section>
    );
};

export default Body;
