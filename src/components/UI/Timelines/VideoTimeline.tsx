import { useEffect, useState } from "react";
import { useRef, MutableRefObject } from "react";
import "./Timelines.scss";
import { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { SETCURRENTTIME } from "../../../redux/slices/currentTimeSlice";
import { SETEDGETIMES } from "../../../redux/slices/edgeTimesSlice";

const VideoTimeline = (): JSX.Element => {
    const vidTimelineRef = useRef() as MutableRefObject<HTMLDivElement>;
    const greenTimelineRef = useRef() as MutableRefObject<HTMLDivElement>;
    const [resizing, setResizing] = useState(false);
    const [initialLength, setInitialLength] = useState(0);
    const [leftOffset, setLeftOffset] = useState(0);
    const [rightOffset, setRightOffset] = useState(0);

    const dispatch = useDispatch();
    const currentTime = useSelector(
        (state: RootState) => state.currentTime.currentTime
    );
    const duration = useSelector((state: RootState) => state.duration.duration);
    const edgeTimes = useSelector(
        (state: RootState) => state.edgeTimes.edgeTimes
    );

    const posn =
        ((currentTime - edgeTimes.start) /
            (duration - edgeTimes.start - (duration - edgeTimes.end))) *
        100;

    useEffect(() => {
        setInitialLength(vidTimelineRef.current.clientWidth);
        // console.log(initialLength);
    }, []);

    useEffect(() => {}, [resizing]);

    const MouseDownFuncLeft = (
        mouseDownEv: React.MouseEvent<HTMLDivElement>
    ) => {
        const MouseMoveFunc = (ev: MouseEvent) => {
            if (
                ev.clientX <
                vidTimelineRef.current.clientWidth -
                    rightOffset +
                    vidTimelineRef.current.offsetLeft
            ) {
                setLeftOffset(
                    Math.max(0, ev.clientX - mouseDownEv.clientX + leftOffset)
                );

                console.log(vidTimelineRef.current.clientWidth);
            }
        };
        const MouseUpFunc = (ev: MouseEvent) => {
            dispatch(
                SETEDGETIMES({
                    ...edgeTimes,
                    start: Math.min(
                        (Math.max(
                            0,
                            ev.clientX - mouseDownEv.clientX + leftOffset
                        ) /
                            initialLength) *
                            duration,
                        edgeTimes.end
                    ),
                })
            );
            dispatch(SETCURRENTTIME(edgeTimes.start));

            window.removeEventListener("mousemove", MouseMoveFunc);
            window.removeEventListener("mouseup", MouseUpFunc);
            console.log("clean");
        };

        window.addEventListener("mousemove", MouseMoveFunc);
        window.addEventListener("mouseup", MouseUpFunc);
    };

    const MouseDownFuncRight = (
        mouseDownEv: React.MouseEvent<HTMLDivElement>
    ) => {
        const MouseMoveFunc = (ev: MouseEvent) => {
            if (ev.clientX - vidTimelineRef.current.offsetLeft > leftOffset) {
                console.log("ev.clientX", ev.clientX);
                console.log("leftOffset", leftOffset);
                // console.log(Math.max(0, ev.clientX - mouseDownEv.clientX));
                setRightOffset(
                    Math.max(0, mouseDownEv.clientX - ev.clientX + rightOffset)
                );
            }
        };
        const MouseUpFunc = (ev: MouseEvent) => {
            console.log(
                "timeline element: ",
                vidTimelineRef.current.offsetLeft
            );
            console.log("Mousedown clientX: ", mouseDownEv.clientX);
            console.log("mouseup clientX: ", ev.clientX);
            console.log("rightOffset: ", rightOffset);
            console.log("greenTimelineRef: ", greenTimelineRef.current);
            dispatch(
                SETEDGETIMES({
                    ...edgeTimes,
                    end: Math.max(
                        edgeTimes.start,
                        Math.min(
                            ((ev.clientX - vidTimelineRef.current.offsetLeft) /
                                initialLength) *
                                duration,
                            duration
                        )
                    ),
                })
            );

            window.removeEventListener("mousemove", MouseMoveFunc);
            window.removeEventListener("mouseup", MouseUpFunc);
            setResizing(false);
            console.log("clean");
        };

        window.addEventListener("mousemove", MouseMoveFunc);
        window.addEventListener("mouseup", MouseUpFunc);
    };

    return (
        <div className="VideoTimeline" ref={vidTimelineRef}>
            <div
                className="VideoTimeline__edge VideoTimeline__edge--left"
                style={{ left: `${(leftOffset / initialLength) * 100}%` }}
                onMouseDown={(ev) => {
                    setResizing(true);
                    console.log("start moving");
                    console.log(ev.nativeEvent.offsetX);
                    MouseDownFuncLeft(ev);
                }}
            ></div>
            <div
                className="VideoTimeline__green"
                ref={greenTimelineRef}
                style={{
                    left: `${(leftOffset / initialLength) * 100}%`,
                    right: `${(rightOffset / initialLength) * 100}%`,
                    cursor: resizing ? "grab" : "default",
                }}

                // onMouseMove={(ev) => {}}
            >
                <div className="VideoTimeline__placeholder"></div>
                &nbsp;
                <div
                    className="VideoTimeline__tracker"
                    style={{ left: posn + "%" }}
                >
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div
                className="VideoTimeline__edge VideoTimeline__edge--right"
                style={{ right: `${(rightOffset / initialLength) * 100}%` }}
                onMouseDown={(ev) => {
                    setResizing(true);
                    console.log("start moving");
                    console.log(ev.nativeEvent.offsetX);
                    MouseDownFuncRight(ev);
                }}
            ></div>
        </div>
    );
};

export default VideoTimeline;
