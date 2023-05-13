import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.navbar__brand}>
                    <h2>Movie App</h2>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to={"/movie/add-movie"}>Add Movie</Link>
                            {/* <a href="#addMovie">Add Movie</a> */}
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to={"/movie/popular"}>Popular</Link>
                            {/* <a href="#latestMovies">Popular</a> */}
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to={"/movie/top-ranks"}>Top Ranks</Link>
                            {/* <a href="#">Top Ranks</a> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
