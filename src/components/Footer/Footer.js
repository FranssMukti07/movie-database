import styles from "./Footer.module.css";

const Footer = () => {
    const currentDate = new Date().getFullYear()
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Movie App</h2>
                <p className={styles.footer__author}>
                    Created By <a href="#">@FranssMukti - {currentDate}</a>
                </p>
            </footer>
        </div>
    );
};

export default Footer;