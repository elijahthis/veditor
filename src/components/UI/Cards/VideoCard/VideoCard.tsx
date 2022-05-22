import { Dispatch, SetStateAction } from "react";
import Slider from "../../Slider";
import "./VideoCard.scss";
import {
    CameraIcon,
    // VolumeUp,
    VolumeDown,
    ExpandIcon,
    SkipFD,
    SkipBD,
    StopIcon,
    PauseIcon,
    PlayIcon1,
} from "../../../Assets/SVGs";
import Dropdown from "../../Dropdown";
import { MutableRefObject, useRef, useState } from "react";
import { secondsToTime } from "../../../../helpers/functions";

declare global {
    interface Element {
        requestFullScreen?(): void;
        msRequestFullscreen(): void;
        webkitRequestFullscreen(): void;
        mozRequestFullScreen(): void;
    }
}
interface VideoCardProps {
    currentVideo: string;
    setCurrentVideo: Dispatch<SetStateAction<string>>;
    currentTime: number;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}

const VideoCard = ({
    currentVideo,
    setCurrentVideo,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
}: VideoCardProps): JSX.Element => {
    const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
    const [paused, setPaused] = useState(true);

    const convertToGif = () => {
        fetch("http://localhost:3211/upload", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                filename: "currentVid.mp4",
                filepath:
                    currentVideo ||
                    "http://localhost:3000/assets/video/Real 4K HDR .mp4",
            }),
        });
        console.log(
            currentVideo ||
                "http://localhost:3000/assets/video/Real 4K HDR .mp4"
        );
    };

    return (
        <div className="VideoCard">
            <div className="VideoCard__placeholder">
                <video
                    src={currentVideo || "/assets/video/Real 4K HDR .mp4"}
                    // controls
                    ref={videoRef}
                    id="my-video"
                    onPause={() => {
                        setPaused(true);
                    }}
                    onPlay={() => {
                        setPaused(false);
                    }}
                    onLoadedMetadata={() => {
                        setDuration(videoRef.current.duration);
                    }}
                    onCanPlayThrough={() => {
                        try {
                            const videoInterval = setInterval(() => {
                                setCurrentTime(videoRef.current.currentTime);
                                console.log("interval");
                            }, 50);
                            if (false) clearInterval(videoInterval);
                        } catch (e) {
                            console.log(e);
                        }
                    }}
                ></video>
            </div>
            <div className="VideoCard__controls">
                <div>
                    <Slider
                        posn={(currentTime / duration) * 100}
                        currentTime={currentTime}
                        setCurrentTime={setCurrentTime}
                        duration={duration}
                        vidElement={videoRef.current}
                    />
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
                        <span onClick={convertToGif}>
                            <VolumeDown size={18} />
                        </span>
                        <span
                            onClick={() => {
                                if (videoRef.current.requestFullscreen) {
                                    videoRef.current.requestFullscreen();
                                } else if (
                                    videoRef.current.mozRequestFullScreen
                                ) {
                                    videoRef.current.mozRequestFullScreen();
                                } else if (
                                    videoRef.current.webkitRequestFullscreen
                                ) {
                                    videoRef.current.webkitRequestFullscreen();
                                } else if (
                                    videoRef.current.msRequestFullscreen
                                ) {
                                    videoRef.current.msRequestFullscreen();
                                }
                            }}
                        >
                            <ExpandIcon size={18} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
