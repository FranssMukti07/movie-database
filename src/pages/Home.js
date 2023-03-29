import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";

function Main() {
    return(
        <main>
            <Hero />
            <Movies />
            <AddMovieForm />
        </main>
    )
}

function Home() {
    return (
        <>
            <Navbar />
            <Main />
            <Footer />
        </>
    );
}

export default Home;
