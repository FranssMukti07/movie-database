import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Counter from "./Counter";

const Main = () => {
    return(
        <main>
            <Hero />
            <Movies />
            <AddMovieForm />
            {/* <Counter /> */}
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
