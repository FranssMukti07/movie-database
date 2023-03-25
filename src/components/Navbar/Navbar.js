import styles from "./Navbar.module.css"

const NavBar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.navbar__brand}>
                    <h2>Movie App</h2>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>Home</li>
                        <li className={styles.navbar__item}>Add Movie</li>
                        <li className={styles.navbar__item}>Popular</li>
                        <li className={styles.navbar__item}>Top Ranks</li>
                        <li className={styles.navbar__item}>Community</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;