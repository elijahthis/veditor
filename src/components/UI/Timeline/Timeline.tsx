import TimelineRow from "./TimelineRow";
import "./Timeline.scss";
import { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { SETEDGETIMES } from "../../../redux/slices/edgeTimesSlice";
import { SETCURRENTTIME } from "../../../redux/slices/currentTimeSlice";
import { useEffect } from "react";

const Timeline = (): JSX.Element => {
    const dispatch = useDispatch();
    const duration = useSelector((state: RootState) => state.duration.duration);

    useEffect(() => {
        dispatch(SETEDGETIMES({ start: 0, end: duration }));
        dispatch(SETCURRENTTIME(0));
        console.log("mounted");
    }, [dispatch, duration]);

    return (
        <div className="TimelineGrid">
            <TimelineRow variant="header" />
            <TimelineRow variant="video" />
            <TimelineRow variant="song" />
            <TimelineRow variant="" />
        </div>
    );
};

export default Timeline;
