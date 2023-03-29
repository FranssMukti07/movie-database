import styles from "./Movie.module.css";

const Movie = (props) => {
    const { name, date } = props
    return (
        <div>
            <div className={styles.movie}>
                <img
                    src="https://picsum.photos/300/400"
                    alt="Gambar Film"
                    className={styles.movie__image}
                />
                <h3 className={styles.movie__title}>{name}</h3>
                <p className={styles.movie__date}>{date}</p>
            </div>
        </div>
    );
}

export default Movie;