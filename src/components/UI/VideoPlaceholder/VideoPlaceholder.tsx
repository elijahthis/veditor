import "./VideoPlaceholder.scss";
import { PlayIcon2 } from "../../Assets/SVGs";

interface VideoPlaceholderProps {
    imageURL: string;
    video?: boolean;
}

const VideoPlaceholder = ({
    imageURL,
    video,
}: VideoPlaceholderProps): JSX.Element => (
    <div className="VideoPlaceholder">
        <img src={imageURL} alt="video" />
        {video ? (
            <div className="VideoPlaceholder__play">
                <PlayIcon2 />
            </div>
        ) : null}
    </div>
);

export default VideoPlaceholder;
