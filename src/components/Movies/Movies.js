// import { useState } from "react";
// import data from "../../utils/constants/data";
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
                    {/* <Movie name="Spiderman 1" date={`${getRandomDate()}`} />
                    <Movie name="Spiderman 2" date={`${getRandomDate()}`} />
                    <Movie name="Spiderman 3" date={`${getRandomDate()}`} />
                    <Movie name="Avengers 1" date={`${getRandomDate()}`} />
                    <Movie name="Avengers 2" date={`${getRandomDate()}`} />
                    <Movie name="Avengers 3" date={`${getRandomDate()}`} />
                    <Movie name="Transformers 1" date={`${getRandomDate()}`} />
                    <Movie name="Transformers 2" date={`${getRandomDate()}`} />
                    <Movie name="Transformers 3" date={`${getRandomDate()}`} />
                    <Movie name="Bullet Train" date={`${getRandomDate()}`} /> */}
                    {movies.map((movie) => {
                        if (title) {
                            return (
                                <Movie
                                    key={movie.id}
                                    movie={movie.title}
                                    date={movie.release_date}
                                    poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                />
                            );
                        } else {
                            return (
                                <Movie
                                    key={movie.id}
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
