import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import StyledMovies from "./Movies.styled";

const Movies = (props) => {
    const { title } = props;

    const movies = useSelector((store) => store.movies.movies);

    return (
        <StyledMovies>
            <section>
                <h2>
                    {title ? title : "Latest Movies"}
                </h2>
                <div>
                    {movies.map((movie) => {
                        if (title) {
                            return (
                                <Movie
                                    key={movie.id}
                                    movieId={movie.id}
                                    movie={movie.title}
                                    date={movie.release_date || movie.year}
                                    poster={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                />
                            );
                        } else {
                            return (
                                <Movie
                                    key={movie.id}
                                    movieId={movie.id}
                                    movie={movie.title}
                                    date={movie.year}
                                    poster={movie.poster}
                                />
                            );
                        }
                    })}
                </div>
            </section>
        </StyledMovies>
    );
};

export default Movies;
