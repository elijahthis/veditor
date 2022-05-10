import { useEffect } from "react";
import { BodySection1, BodySection2 } from "../BodySections";
import { secondsToTime } from "../../../helpers/functions";
import "./Body.scss";

const Body = (): JSX.Element => {
    return (
        <section className="body">
            <BodySection1 />
            <BodySection2 />
        </section>
    );
};

export default Body;
