import { useState } from "react";
import "./Convert.scss";
import { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { SETCURRENTTASK } from "../../../redux/slices/currentTaskSlice";

const Convert = (): JSX.Element => {
    const [active, setActive] = useState(0);

    const conversionList = ["gif", "mp4", "wav", "avi", "m4a", "mp3"];

    const currentTask = useSelector(
        (state: RootState) => state.currentTask.currentTask
    );

    const dispatch = useDispatch();

    return (
        <div className="Convert">
            {conversionList.map((item, ind) => (
                <div
                    className={`Convert__box ${
                        active === ind ? "Convert__box--active" : ""
                    }`}
                    key={ind}
                    onClick={() => {
                        setActive(ind);
                        dispatch(
                            SETCURRENTTASK({
                                ...currentTask,
                                details: conversionList[ind],
                            })
                        );
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Convert;
