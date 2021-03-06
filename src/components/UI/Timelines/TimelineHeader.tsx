import "./Timelines.scss";
import { secondsToTime } from "../../../helpers/functions";

const TimelineHeader = (): JSX.Element => {
    return (
        <div className="TimelineHeader">
            <div className="TimelineHeader__lines">
                {Array(3)
                    .fill(0)
                    .map((item, ind) => (
                        <div className="TimelineHeader__line" key={ind}></div>
                    ))}
                {Array(28)
                    .fill(0)
                    .map((item, ind) => (
                        <div
                            className={`TimelineHeader__line ${
                                ind % 5 === 0
                                    ? "TimelineHeader__line--long"
                                    : ""
                            }`}
                            key={ind}
                        >
                            {ind % 5 === 0 ? (
                                <span className="TimelineHeader__number">
                                    {secondsToTime(ind)}
                                </span>
                            ) : null}
                        </div>
                    ))}
                {Array(3)
                    .fill(0)
                    .map((item, ind) => (
                        <div className="TimelineHeader__line" key={ind}></div>
                    ))}
            </div>
        </div>
    );
};

export default TimelineHeader;
