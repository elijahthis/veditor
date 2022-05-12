import { Dispatch, SetStateAction } from "react";
import { Card1, Card2 } from "../Cards";
import VideoCard from "../../UI/Cards/VideoCard";

import "./BodySections.scss";

interface BodySection1Props {
    currentVideo: string;
    setCurrentVideo: Dispatch<SetStateAction<string>>;
}

const BodySection1 = ({
    currentVideo,
    setCurrentVideo,
}: BodySection1Props): JSX.Element => (
    <section className="BodySection1">
        <Card1 />
        <VideoCard
            currentVideo={currentVideo}
            setCurrentVideo={setCurrentVideo}
        />
        <Card2 />
    </section>
);

export default BodySection1;
