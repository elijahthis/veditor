import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRef, MutableRefObject } from "react";
import "./Timelines.scss";

const VideoTimeline = ({
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
}: {
    currentTime: number;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}): JSX.Element => {
    const vidTimelineRef = useRef() as MutableRefObject<HTMLDivElement>;
    const [resizing, setResizing] = useState(false);
    const [initialLength, setInitialLength] = useState(0);
    const [leftOffset, setLeftOffset] = useState(0);
    const [rightOffset, setRightOffset] = useState(0);

    const posn = (currentTime / duration) * 100;

    useEffect(() => {
        setInitialLength(vidTimelineRef.current.clientWidth);
        // console.log(initialLength);
    }, []);

    useEffect(() => {}, [resizing]);

    const MouseDownFuncLeft = (
        mouseDownEv: React.MouseEvent<HTMLDivElement>
    ) => {
        const MouseMoveFunc = (ev: MouseEvent) => {
            // console.log("moving");
            console.log(Math.max(0, ev.clientX - mouseDownEv.clientX));
            setLeftOffset(
                Math.max(0, ev.clientX - mouseDownEv.clientX + leftOffset)
            );
            // console.log(ev.clientX);
        };
        const MouseUpFunc = (ev: MouseEvent) => {
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
            console.log(ev.clientX);
            // console.log(Math.max(0, ev.clientX - mouseDownEv.clientX));
            setRightOffset(
                Math.max(0, mouseDownEv.clientX - ev.clientX + rightOffset)
            );
            // console.log(ev.clientX);
        };
        const MouseUpFunc = (ev: MouseEvent) => {
            window.removeEventListener("mousemove", MouseMoveFunc);
            window.removeEventListener("mouseup", MouseUpFunc);
            setResizing(false);
            console.log("clean");
        };

        window.addEventListener("mousemove", MouseMoveFunc);
        window.addEventListener("mouseup", MouseUpFunc);
    };

    return (
        <div className="VideoTimeline">
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
                style={{
                    left: `${(leftOffset / initialLength) * 100}%`,
                    right: `${(rightOffset / initialLength) * 100}%`,
                    cursor: resizing ? "grab" : "default",
                }}
                ref={vidTimelineRef}

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
