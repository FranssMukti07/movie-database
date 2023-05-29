// import styles from "./Navbar.module.css";
import StyledNavbar from "./Navbar.styled";

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <StyledNavbar>
            <nav>
                <div>
                    <h2>Movie App</h2>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/movie/add-movie"}>Add Movie</Link>
                        </li>
                        <li>
                            <Link to={"/movie/popular"}>Popular</Link>
                        </li>
                        <li>
                            <Link to={"/movie/top-ranks"}>Top Ranks</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </StyledNavbar>
    );
};

export default NavBar;
