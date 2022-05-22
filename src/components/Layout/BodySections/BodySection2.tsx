import { Dispatch, SetStateAction } from "react";
import "./BodySections.scss";
import Timeline from "../../UI/Timeline";

interface BodySection2Props {
    currentTime: number;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}

const BodySection2 = ({
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
}: BodySection2Props): JSX.Element => (
    <section className="BodySection2">
        <Timeline
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            setDuration={setDuration}
        />
    </section>
);

export default BodySection2;
