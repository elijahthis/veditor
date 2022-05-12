import { Dispatch, useState, SetStateAction, useEffect } from "react";
import "./ModalChildren.scss";
import { ImportVeditor, ImportDevice } from "../../../Assets/SVGs";
import { IoClose } from "react-icons/io5";

interface ImportVideoProps {
    setOpenModal: (argg: boolean) => void;
    currentVideo: string;
    setCurrentVideo: Dispatch<SetStateAction<string>>;
}

const ImportVideo = ({
    setOpenModal,
    currentVideo,
    setCurrentVideo,
}: ImportVideoProps): JSX.Element => {
    useEffect(() => {
        console.log("import their daddy");
        console.log(currentVideo);
    }, []);
    return (
        <div className="ImportVideo" onClick={(ev) => ev.stopPropagation()}>
            <div className="ImportVideo__header">
                <h3>Import Video</h3>
                <p>Please select how you would like to import your video</p>
            </div>
            <div className="ImportVideo__options">
                <div className="ImportVideo__option">
                    <ImportVeditor />
                    <p>Import From Veditor</p>
                </div>
                <div className="ImportVideo__option">
                    <ImportDevice />
                    <p>Import From Device</p>
                    <input
                        type="file"
                        accept="video/*"
                        name=""
                        id=""
                        onChange={(ev) => {
                            setCurrentVideo(
                                URL.createObjectURL(ev.target.files![0])
                            );
                        }}
                    />
                </div>
            </div>
            <div className="close" onClick={() => setOpenModal(false)}>
                <IoClose size={14} />
            </div>
        </div>
    );
};

export default ImportVideo;
