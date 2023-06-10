import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

// const getRandomDate = () => {
//     const maxDate = Date.now();
//     const timestamp = Math.floor(Math.random() * maxDate);
//     return new Date(timestamp).toLocaleDateString('id-US');
// }

const Movies = (props) => {
    const { movies, setMovies, title } = props;
    
    // const movies = data;
    // const handleClick = () => {
    //     const movie = {
    //         id: nanoid(),
    //         title: "Jigsaw Spiral",
    //         year: 2021,
    //         type: "Movie",
    //         poster: "https://picsum.photos/300/400",
    //     };

    //     setMovies([...movies, movie]);
    // };

    return (
        <div className={styles.container} id="latestMovies">
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>{(title) ? title : "Latest Movies"}</h2>
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
