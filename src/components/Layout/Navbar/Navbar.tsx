import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    LogoSVG,
    MenuSVG,
    NavSVG1,
    NavSVG2,
    NavSVG3,
    NavSVG4,
    NavSVG5,
    NavSVG6,
    NavSVG7,
} from "../../Assets/SVGs";
import ProfilePicture from "../../UI/ProfilePicture";
import "./Navbar.scss";

const Navbar = (): JSX.Element => {
    const [active, setActive] = useState(0);
    const navData = [
        { title: "Video Editing", icon: <NavSVG1 /> },
        { title: "Import Video", icon: <NavSVG2 /> },
        { title: "Add Voiceover", icon: <NavSVG3 /> },
        { title: "Filters / Effects", icon: <NavSVG4 /> },
        { title: "Add Subtitles", icon: <NavSVG5 /> },
        { title: "3D Preview", icon: <NavSVG6 /> },
        { title: "Sound Engine", icon: <NavSVG7 /> },
    ];
    return (
        <header className="navbar">
            <div>
                <div className="navbar__menu">
                    <MenuSVG />
                </div>
                <NavLink to="/me" className="navbar__logo">
                    <LogoSVG />
                </NavLink>
            </div>
            <nav>
                <ul>
                    {navData.map((navItem, ind) => (
                        <li
                            className={
                                "navbar__listItem " +
                                (active === ind
                                    ? "navbar__listItem--active"
                                    : "")
                            }
                            key={ind}
                            onClick={() => setActive(ind)}
                        >
                            {navItem.icon}
                            <p>{navItem.title}</p>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <div className="navbar__profileImg">
                    <ProfilePicture imageURL="/assets/images/profile-img.png" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
