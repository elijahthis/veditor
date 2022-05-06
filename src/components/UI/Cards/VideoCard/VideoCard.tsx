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
} from "../../../Assets/SVGs";
import Dropdown from "../../Dropdown";

const VideoCard = (): JSX.Element => {
    const vidInfo = {
        placeholder: "/assets/images/video-placeholder.jpg",
        duration: 23,
    };

    return (
        <div className="VideoCard">
            <div className="VideoCard__placeholder">
                <img src={vidInfo.placeholder} />
            </div>
            <div className="VideoCard__controls">
                <div>
                    <Slider posn={12} />
                    <p>{vidInfo.duration}:00:00:00</p>
                </div>
                <div>
                    <div className="VideoCard__controls__actions">
                        <div>
                            <SkipBD />
                            <SkipFD />
                            <StopIcon />
                            <PauseIcon />
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
