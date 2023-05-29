// import styles from "./Movie.module.css";
import StyledMovie from "./Movie.styled";

const Movie = (props) => {
    const { movie, date, poster } = props;
    return (
        <StyledMovie>
            <img src={poster} alt="Gambar Film" />
            <h3>{movie}</h3>
            <p>{date}</p>
        </StyledMovie>
    );
};

export default Movie;
