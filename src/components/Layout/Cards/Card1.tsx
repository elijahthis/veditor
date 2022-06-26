import SideCard from "../../UI/Cards/SideCard";
import VideoPlaceholder from "../../UI/VideoPlaceholder";
import Button from "../../UI/Button";
import { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { SETCURRENTTASK } from "../../../redux/slices/currentTaskSlice";

const Card1 = (): JSX.Element => {
    const dataList: { image: string; title: string; duration: number }[] = [
        {
            image: "/assets/images/imgPlaceholder.png",
            title: "How  to edit your first veditor video",
            duration: 60,
        },
    ];
    const taskList = ["Trim", "Convert"];
    const dispatch = useDispatch();
    const currentTask = useSelector(
        (state: RootState) => state.currentTask.currentTask
    );

    return (
        <SideCard>
            <div>
                <div>
                    <div className="cardTitle">
                        <h3>Guides</h3>
                    </div>
                    <p className="desc">
                        Learn all you need to know to get started on veditor
                    </p>
                    <div className="videos">
                        {dataList.map((item, ind) => (
                            <div key={ind} className="videoItem">
                                <div>
                                    <div className="videoItem__thumbnail">
                                        <VideoPlaceholder
                                            imageURL={item.image}
                                            video={true}
                                        />
                                    </div>
                                    <div className="videoItem__info">
                                        <p className="title">{item.title}</p>
                                        <p className="info">{item.duration}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="btn">
                        <Button variant="primary">See more</Button>
                    </div>
                </div>
                <div className="tasks">
                    <h3>What are we doing today?</h3>
                    <div>
                        <div className="tasks__blocks">
                            {taskList.map((task, ind) => (
                                <div
                                    key={`task${ind}`}
                                    onClick={() => {
                                        dispatch(
                                            SETCURRENTTASK({
                                                ...currentTask,
                                                name: task,
                                            })
                                        );
                                    }}
                                    className={
                                        currentTask.name === task
                                            ? "active"
                                            : ""
                                    }
                                >
                                    {task}
                                </div>
                            ))}
                        </div>
                        {/* <div></div> */}
                    </div>
                </div>
            </div>
        </SideCard>
    );
};

export default Card1;
