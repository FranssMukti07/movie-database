import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import data from "../utils/constants/data";
import Counter from "./Counter";
import { useState } from "react";

const Main = () => {
    const [movies, setMovies] = useState(data);

    return (
        <main>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} />
            <AddMovieForm movies={movies} setMovies={setMovies} />
            {/* <Counter /> */}
        </main>
    );
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
