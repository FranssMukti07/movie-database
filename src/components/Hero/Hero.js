// import data from "../../utils/constants/data";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";
import { useState, useEffect } from "react";

const Hero = () => {
    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function fetchMovie() {
            // Lakukan fetching data

            const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
            const response = await fetch(url);
            const result = await response.json();

            setMovie(result);

            console.log(result);
        }
        fetchMovie();
    }, []);

    return (
        <StyledHero>
            <div>
                <div className="hero__left">
                    <h3>{movie.Title}</h3>
                    <p>{movie.Genre}</p>
                    <p>{movie.Plot}</p>
                    <Button variant="primary" size="md">
                        Watch
                    </Button>
                </div>
                <div className="hero__right">
                    <img src={movie.Poster} alt="Gambar Film" />
                </div>
            </div>
        </StyledHero>
    );
};

export default Hero;
