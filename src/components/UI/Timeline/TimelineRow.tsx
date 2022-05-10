import { HiOutlineDuplicate } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { IoVideocam } from "react-icons/io5";
import { CgEyeAlt } from "react-icons/cg";
import { MusicIcon } from "../../Assets/SVGs";
import { AudioTimeline, VideoTimeline, TimelineHeader } from "../Timelines";

import "./Timeline.scss";

const TimelineRow = ({ variant }: { variant: string }): JSX.Element => {
    switch (variant) {
        case "header":
            return (
                <div className="TimelineGridRow">
                    <div className="TimelineGridRow__icons">
                        <HiOutlineDuplicate size={20} />
                        <FiSettings size={16} />
                    </div>
                    <div className="timelineWrapper--header">
                        <TimelineHeader />
                    </div>
                </div>
            );
            break;
        case "video":
            return (
                <div className="TimelineGridRow">
                    <div className="TimelineGridRow__icons">
                        <IoVideocam color="#BABABA" size={15} />
                        <CgEyeAlt color="#4f4f4f" size={15} />
                    </div>
                    <div className="timelineWrapper">
                        <VideoTimeline />
                    </div>
                </div>
            );
        case "song":
            return (
                <div className="TimelineGridRow">
                    <div className="TimelineGridRow__icons">
                        <MusicIcon size={13} />
                        <CgEyeAlt color="#4f4f4f" size={15} />
                    </div>
                    <div className="timelineWrapper">
                        <AudioTimeline />
                    </div>
                </div>
            );
        default:
            return (
                <div className="TimelineGridRow">
                    <div></div>
                    <div></div>
                </div>
            );
            break;
    }
};

export default TimelineRow;
