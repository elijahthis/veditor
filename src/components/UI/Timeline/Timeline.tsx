import TimelineRow from "./TimelineRow";
import "./Timeline.scss";

const Timeline = (): JSX.Element => (
    <div className="TimelineGrid">
        <TimelineRow variant="header" />
        <TimelineRow variant="video" />
        <TimelineRow variant="song" />
        <TimelineRow variant="" />
    </div>
);

export default Timeline;
