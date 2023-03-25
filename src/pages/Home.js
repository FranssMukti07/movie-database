import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/Navbar/Navbar";

function Home() {
    return(
        <div>
            <NavBar />
            <Hero />
            <h2>Halaman Home</h2>
            <Footer />
        </div>
    );
};

export default Home;