import "./Timelines.scss";

const VideoTimeline = (): JSX.Element => {
    return (
        <div className="VideoTimeline">
            <div className="VideoTimeline__placeholder"></div>
            &nbsp;
            <div className="VideoTimeline__tracker">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default VideoTimeline;
