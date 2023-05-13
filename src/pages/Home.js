import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import data from "../utils/constants/data";
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
            <Main />
        </>
    );
}

export default Home;
