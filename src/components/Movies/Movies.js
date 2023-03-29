import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

const getRandomDate = () => {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp).toLocaleDateString('id-US');
}

const Movies = () => {
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movies__container}>
                    <Movie name="Spiderman 1" date={`${getRandomDate()}`} />
                    <Movie name="Spiderman 2" date={`${getRandomDate()}`} />
                    <Movie name="Spiderman 3" date={`${getRandomDate()}`} />
                    <Movie name="Avengers 1" date={`${getRandomDate()}`} />
                    <Movie name="Avengers 2" date={`${getRandomDate()}`} />
                    <Movie name="Avengers 3" date={`${getRandomDate()}`} />
                    <Movie name="Transformers 1" date={`${getRandomDate()}`} />
                    <Movie name="Transformers 2" date={`${getRandomDate()}`} />
                    <Movie name="Transformers 3" date={`${getRandomDate()}`} />
                    <Movie name="Bullet Train" date={`${getRandomDate()}`} />
                </div>
            </section>
        </div>
    );
};

export default Movies;
