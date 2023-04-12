import styles from "./Navbar.module.css";

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
                            <a href="#home">Home</a>
                        </li>
                        <li className={styles.navbar__item}>
                            <a href="#addMovie">Add Movie</a>
                        </li>
                        <li className={styles.navbar__item}>
                            <a href="#latestMovies">Popular</a>
                        </li>
                        <li className={styles.navbar__item}>
                            <a href="#">Top Ranks</a>
                        </li>
                        <li className={styles.navbar__item}>
                            <a href="#">Community</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
