import { NavLink } from "react-router-dom";
import { LogoSVG } from "../../Assets/SVGs";

import "./styles.scss";

const Navbar = (): JSX.Element => (
    <header className="navbar">
        <NavLink to="/me" className="navbar__logo">
            <LogoSVG />
        </NavLink>
    </header>
);

export default Navbar;
