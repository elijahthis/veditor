import { Card1, Card2 } from "../Cards";
import VideoCard from "../../UI/Cards/VideoCard";

import "./BodySections.scss";

const BodySection1 = (): JSX.Element => (
    <section className="BodySection1">
        <Card1 />
        <VideoCard />
        <Card2 />
    </section>
);

export default BodySection1;
