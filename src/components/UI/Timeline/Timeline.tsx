import { Dispatch, SetStateAction } from "react";
import TimelineRow from "./TimelineRow";
import "./Timeline.scss";

interface TimelineProps {
    currentTime: number;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}

const Timeline = ({
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
}: TimelineProps): JSX.Element => (
    <div className="TimelineGrid">
        <TimelineRow
            variant="header"
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            setDuration={setDuration}
        />
        <TimelineRow
            variant="video"
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            setDuration={setDuration}
        />
        <TimelineRow
            variant="song"
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            setDuration={setDuration}
        />
        <TimelineRow
            variant=""
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            setDuration={setDuration}
        />
    </div>
);

export default Timeline;
