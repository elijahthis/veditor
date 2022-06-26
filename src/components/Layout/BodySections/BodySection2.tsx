import "./BodySections.scss";
import Timeline from "../../UI/Timeline";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import Convert from "../../UI/Convert";

const BodySection2 = (): JSX.Element => {
    const currentTask = useSelector(
        (state: RootState) => state.currentTask.currentTask
    );

    return (
        <section className="BodySection2">
            {currentTask.name === "Trim" ? <Timeline /> : <Convert />}
        </section>
    );
};

export default BodySection2;
