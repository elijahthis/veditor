import { useEffect, useState } from "react";
import "./ModalChildren.scss";
import { ImportVeditor, ImportDevice } from "../../../Assets/SVGs";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Audio } from "react-loader-spinner";
import { SETCURRENTVIDEO } from "../../../../redux/slices/currentVideoSlice";
import { SETSTOREDVIDEO } from "../../../../redux/slices/storedVideoSlice";
import { uploadVid } from "../../../../services/apis";

interface ImportVideoProps {
    setOpenModal: (argg: boolean) => void;
}

const ImportVideo = ({ setOpenModal }: ImportVideoProps): JSX.Element => {
    const [loading, setLoading] = useState(false);
    const [myForm, setMyForm] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        setMyForm(document.querySelector("#myForm")!);
    }, []);

    return (
        <div className="ImportVideo" onClick={(ev) => ev.stopPropagation()}>
            <div className="ImportVideo__header">
                <h3>Import Video</h3>
                <p>Please select how you would like to import your video</p>
            </div>
            <form
                // action="http://localhost:3211/upload"
                encType="multipart/form-data"
                method="POST"
                id="myForm"
                onSubmit={(ev) => {
                    ev.preventDefault();
                }}
            >
                <div className="ImportVideo__options">
                    <div className="ImportVideo__option">
                        <ImportVeditor />
                        <p>Import From Veditor</p>
                    </div>
                    {!loading ? (
                        <div className="ImportVideo__option">
                            <ImportDevice />
                            <p>Import From Device</p>

                            <input
                                type="file"
                                accept="video/*"
                                name="newVideo"
                                id=""
                                disabled={loading}
                                onChange={async (ev) => {
                                    dispatch(
                                        SETCURRENTVIDEO(
                                            URL.createObjectURL(
                                                ev.target.files![0]
                                            )
                                        )
                                    );
                                    const data = new FormData(
                                        myForm as HTMLFormElement
                                    );

                                    setLoading(true);
                                    try {
                                        const res: any = await uploadVid(data);
                                        dispatch(SETSTOREDVIDEO(res?.data));
                                        console.log("stored");
                                        setLoading(false);
                                    } catch (err) {
                                        console.log(err);
                                        setLoading(false);
                                    }
                                }}
                            />
                        </div>
                    ) : (
                        <Audio
                            height="100"
                            width="100"
                            color="grey"
                            ariaLabel="loading"
                        />
                    )}
                </div>
            </form>
            <div className="close" onClick={() => setOpenModal(false)}>
                <IoClose size={14} />
            </div>
        </div>
    );
};

export default ImportVideo;
