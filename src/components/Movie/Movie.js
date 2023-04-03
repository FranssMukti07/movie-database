import styles from "./Movie.module.css";

const Movie = (props) => {
    const { movie, date, poster } = props
    return (
        <div>
            <div className={styles.movie}>
                <img
                    src={poster}
                    alt="Gambar Film"
                    className={styles.movie__image}
                />
                <h3 className={styles.movie__title}>{movie}</h3>
                <p className={styles.movie__date}>{date}</p>
            </div>
        </div>
    );
}

export default Movie;