// import styles from "./Footer.module.css";
import StyledFooter from "./Footer.styled";

const Footer = () => {
    const currentDate = new Date().getFullYear();
    return (
        <StyledFooter>
            <footer>
                <h2>Movie App</h2>
                <p>
                    Created By <a href="#">@FranssMukti - {currentDate}</a>
                </p>
            </footer>
        </StyledFooter>
    );
};

export default Footer;
