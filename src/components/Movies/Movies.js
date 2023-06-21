import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

const Movies = (props) => {
    const { title } = props;

    const movies = useSelector((store) => store.movies.movies);

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>
                    {title ? title : "Latest Movies"}
                </h2>
                <div className={styles.movies__container}>
                    {movies.map((movie) => {
                        if (title) {
                            return (
                                <Movie
                                    key={movie.id}
                                    movieId={movie.id}
                                    movie={movie.title}
                                    date={movie.release_date}
                                    poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
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
        </div>
    );
};

export default Movies;
