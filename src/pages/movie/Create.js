import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Hero from "../../components/Hero/Hero";

const CreateMovie = (props) => {
    const {movies, setMovies} = props;
    return (
        <div>
            <Hero />
            <AddMovieForm movies={movies} setMovies={setMovies} />
        </div>
    );
};

export default CreateMovie;