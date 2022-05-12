import { Dispatch, useState, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../../UI/Modals/Modal";
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
import { ImportVideo } from "../../UI/Modals/ModalChildren";
import "./Navbar.scss";
import { useModal } from "../../../hooks/useModal";

interface NavbarProps {
    currentVideo: string;
    setCurrentVideo: Dispatch<SetStateAction<string>>;
}

const Navbar = ({
    currentVideo,
    setCurrentVideo,
}: NavbarProps): JSX.Element => {
    const [active, setActive] = useState(0);

    const { openModal, setOpenModal, modalChild, setModalChild } = useModal();

    const navData = [
        { title: "Video Editing", icon: <NavSVG1 />, clickFunc: () => {} },
        {
            title: "Import Video",
            icon: <NavSVG2 />,
            clickFunc: () => {
                console.log("button clickedd");
                setModalChild(
                    <ImportVideo
                        setOpenModal={setOpenModal}
                        currentVideo={currentVideo}
                        setCurrentVideo={setCurrentVideo}
                    />
                );
                setOpenModal(true);
            },
        },
        { title: "Add Voiceover", icon: <NavSVG3 />, clickFunc: () => {} },
        { title: "Filters / Effects", icon: <NavSVG4 />, clickFunc: () => {} },
        { title: "Add Subtitles", icon: <NavSVG5 />, clickFunc: () => {} },
        { title: "3D Preview", icon: <NavSVG6 />, clickFunc: () => {} },
        { title: "Sound Engine", icon: <NavSVG7 />, clickFunc: () => {} },
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
                            onClick={() => {
                                if (navItem.clickFunc) navItem.clickFunc();
                                else {
                                    setActive(ind);
                                }
                            }}
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
            <Modal openModal={openModal} setOpenModal={setOpenModal}>
                {modalChild}
            </Modal>
        </header>
    );
};

export default Navbar;
