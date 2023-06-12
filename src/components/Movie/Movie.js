// import styles from "./Movie.module.css";
import { Link } from "react-router-dom";
import StyledMovie from "./Movie.styled";

const Movie = (props) => {
    const { movieId, movie, date, poster } = props;
    return (
        <StyledMovie>
            <Link to={`/movie/${movieId}`}>
                <div className="image">
                    <img src={poster} alt="Gambar Film" />
                </div>
                <div className="info">
                    <h3>{movie}</h3>
                    <p>{date}</p>
                </div>
            </Link>
        </StyledMovie>
    );
};

export default Movie;
