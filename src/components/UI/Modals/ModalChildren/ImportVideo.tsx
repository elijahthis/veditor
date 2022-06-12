import { useEffect } from "react";
import "./ModalChildren.scss";
import { ImportVeditor, ImportDevice } from "../../../Assets/SVGs";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { SETCURRENTVIDEO } from "../../../../redux/slices/currentVideoSlice";

interface ImportVideoProps {
    setOpenModal: (argg: boolean) => void;
}

const ImportVideo = ({ setOpenModal }: ImportVideoProps): JSX.Element => {
    useEffect(() => {
        const myForm = document.querySelector("#myForm");
        const formData = new FormData(myForm as HTMLFormElement);
        console.log(formData);
    }, []);
    const myForm = document.querySelector("#myForm");

    const dispatch = useDispatch();

    return (
        <div className="ImportVideo" onClick={(ev) => ev.stopPropagation()}>
            <div className="ImportVideo__header">
                <h3>Import Video</h3>
                <p>Please select how you would like to import your video</p>
            </div>
            <form
                action="http://localhost:3211/upload"
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
                    <div className="ImportVideo__option">
                        <ImportDevice />
                        <p>Import From Device</p>

                        <input
                            type="file"
                            accept="video/*"
                            name="newVideo"
                            id=""
                            onChange={(ev) => {
                                dispatch(
                                    SETCURRENTVIDEO(
                                        URL.createObjectURL(ev.target.files![0])
                                    )
                                );
                                const data = new FormData(
                                    myForm as HTMLFormElement
                                );

                                fetch("http://localhost:3211/upload", {
                                    method: "post",
                                    body: data,
                                })
                                    .then((res) => res.json())
                                    .then((res) => {
                                        console.log(res);
                                    });
                            }}
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    name=""
                    id=""
                    onClick={(ev) => {
                        ev.stopPropagation();
                    }}
                />
            </form>
            <div className="close" onClick={() => setOpenModal(false)}>
                <IoClose size={14} />
            </div>
        </div>
    );
};

export default ImportVideo;
