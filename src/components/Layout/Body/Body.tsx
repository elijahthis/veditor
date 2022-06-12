import { Dispatch, SetStateAction, useState } from "react";
import { BodySection1, BodySection2, BodySection3 } from "../BodySections";
import "./Body.scss";

interface BodyProps {}

const Body = (): JSX.Element => {
    return (
        <section className="body">
            <BodySection1 />
            <BodySection2 />
            <BodySection3 />
        </section>
    );
};

export default Body;
