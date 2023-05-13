import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";
import styles from "./Layout.module.css";

const Main = (props) => {
    return <div className={styles.container}>{props.children}</div>;
};

const Layout = (props) => {
    return (
        <>
            <NavBar />
            <Main>
                <main>{props.children}</main>
            </Main>
            <Footer />
        </>
    );
};

export default Layout;
