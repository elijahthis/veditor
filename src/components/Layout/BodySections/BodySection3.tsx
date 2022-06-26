import Button from "../../UI/Button";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { transcodeVid, trimVid } from "../../../services/apis";
import { toast } from "react-toastify";
import { useState } from "react";

const BodySection3 = () => {
    const state = useSelector((state: RootState) => state);
    const storedVideo = useSelector(
        (state: RootState) => state.storedVideo.storedVideo
    );
    const currentTask = useSelector(
        (state: RootState) => state.currentTask.currentTask
    );
    const edgeTimes = useSelector(
        (state: RootState) => state.edgeTimes.edgeTimes
    );

    const [loading, setLoading] = useState(false);

    return (
        <div className="BodySection3" onClick={() => {}}>
            <Button
                variant="primary"
                loading={loading}
                onClick={async () => {
                    setLoading(true);
                    console.log(state);
                    if (storedVideo.filename) {
                        if (currentTask.name === "Convert") {
                            try {
                                toast.success("File conversion in progress...");
                                const res: any = await transcodeVid({
                                    ...storedVideo,
                                    filetype: currentTask.details,
                                });
                                console.log("transcoded");
                                console.log(res);

                                const URL = window.URL.createObjectURL(
                                    res.data
                                );
                                const link = document.createElement("a");
                                link.href = URL;
                                link.setAttribute(
                                    "download",
                                    JSON.parse(res.config.data)?.filename
                                );
                                document.body.appendChild(link);
                                link.click();
                                toast.success("Conversion Complete!");
                                toast.success("File Downloaded!");
                                setLoading(false);
                            } catch (err) {
                                console.log(err);
                                toast.error("Sth went wrong.");
                                setLoading(false);
                            }
                        } else if (currentTask.name === "Trim") {
                            try {
                                toast.success("File conversion in progress...");
                                const res: any = await trimVid({
                                    ...storedVideo,
                                    ...edgeTimes,
                                });
                                console.log("trimmed");
                                console.log(res);

                                const URL = window.URL.createObjectURL(
                                    res.data
                                );
                                const link = document.createElement("a");
                                link.href = URL;
                                link.setAttribute(
                                    "download",
                                    JSON.parse(res.config.data)?.filename
                                );
                                document.body.appendChild(link);
                                link.click();
                                toast.success("Trim Complete!");
                                toast.success("File Downloaded!");
                                setLoading(false);
                            } catch (err) {
                                console.log(err);
                                toast.error("Sth went wrong.");
                                setLoading(false);
                            }
                        } else {
                            toast.error("Invalid action");
                        }
                    } else {
                        toast.error("File has not been uploaded!");
                        setLoading(false);
                    }
                }}
            >
                Save
            </Button>
        </div>
    );
};

export default BodySection3;
