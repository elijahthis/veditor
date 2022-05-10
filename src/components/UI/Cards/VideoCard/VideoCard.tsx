import Slider from "../../Slider";
import "./VideoCard.scss";
import {
    CameraIcon,
    VolumeUp,
    VolumeDown,
    ExpandIcon,
    SkipFD,
    SkipBD,
    StopIcon,
    PauseIcon,
    PlayIcon1,
} from "../../../Assets/SVGs";
import Dropdown from "../../Dropdown";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { secondsToTime } from "../../../../helpers/functions";

const VideoCard = (): JSX.Element => {
    const vidInfo = {
        placeholder: "/assets/images/video-placeholder.jpg",
        duration: 23,
    };

    const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
    const [paused, setPaused] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    return (
        <div className="VideoCard">
            <div className="VideoCard__placeholder">
                {/* <img src={vidInfo.placeholder} alt="video" /> */}
                <video
                    src="/assets/video/Real 4K HDR .mp4"
                    controls
                    ref={videoRef}
                    id="my-video"
                    onPause={() => {
                        setPaused(true);
                    }}
                    onLoadedMetadata={() => {
                        setDuration(videoRef.current.duration);
                        setInterval(() => {
                            setCurrentTime(videoRef.current.currentTime);
                        }, 1000);
                    }}
                ></video>
            </div>
            <div className="VideoCard__controls">
                <div>
                    <Slider posn={Math.floor((currentTime / duration) * 100)} />
                    <p>{secondsToTime(duration)}</p>
                </div>
                <div>
                    <div className="VideoCard__controls__actions">
                        <div>
                            <span
                                onClick={() => {
                                    videoRef.current.currentTime -= 5;
                                }}
                            >
                                <SkipBD />
                            </span>
                            <span
                                onClick={() => {
                                    videoRef.current.currentTime += 5;
                                }}
                            >
                                <SkipFD />
                            </span>
                            <span
                                onClick={() => {
                                    videoRef.current.currentTime = 0;
                                    videoRef.current.pause();
                                    console.log(videoRef.current.paused);
                                }}
                            >
                                <StopIcon />
                            </span>
                            <span
                                onClick={() => {
                                    paused
                                        ? videoRef.current.play()
                                        : videoRef.current.pause();
                                    setPaused(!paused);
                                    console.log(videoRef.current);
                                }}
                            >
                                {paused ? <PlayIcon1 /> : <PauseIcon />}
                            </span>
                        </div>
                        <div>
                            <Dropdown list={["1/2", "1/4", "1.8"]} up={true} />
                        </div>
                    </div>
                    <div className="VideoCard__controls__other">
                        <CameraIcon size={18} />
                        <VolumeDown size={18} />
                        <ExpandIcon size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
