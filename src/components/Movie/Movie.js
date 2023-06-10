// import styles from "./Movie.module.css";
import { Link } from "react-router-dom";
import StyledMovie from "./Movie.styled";

const Movie = (props) => {
    const { movieId, movie, date, poster } = props;
    return (
        <StyledMovie>
            <img src={poster} alt="Gambar Film" />
            <Link to={`/movie/${movieId}`}>
                <h3>{movie}</h3>
            </Link>
            <p>{date}</p>
        </StyledMovie>
    );
};

export default Movie;
