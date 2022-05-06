import "./Dropdown.scss";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

interface DropdownProps {
    list: string[];
    up?: boolean;
}

const Dropdown = ({ list, up }: DropdownProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className="Dropdown" onClick={() => setCollapsed(!collapsed)}>
            <div className="Dropdown__current Dropdown__item">
                {list[0]}
                <BiChevronDown size={18} />
            </div>
            <div
                className="Dropdown__list"
                style={{
                    bottom: up ? "100%" : "-200%",
                    maxHeight: collapsed ? "0" : "200%",
                }}
            >
                {list.map((item) => (
                    <div className="Dropdown__item">{item}</div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
