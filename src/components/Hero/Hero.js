// import data from "../../utils/constants/data";
import Button from "../ui/Button/Button";
import styles from "./Hero.module.css";
import { useState, useEffect } from "react";

const Hero = () => {
    // const movies = data[0];
    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function fetchMovie() {
            // Lakukan fetching data
    
            const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
            const response = await fetch(url);
            const result = await response.json();
    
            setMovie(result);

            console.log(result);
        };
        fetchMovie();
    }, []);

    return (
        <div className={styles.container} id="home">
            <div className={styles.hero}>
                <div className={styles.hero__left}>
                    <h3 className={styles.hero__title}>{movie.Title}</h3>
                    <p className={styles.hero__genre}>{movie.Genre}</p>
                    <p className={styles.hero__description}>
                        {movie.Plot}
                    </p>
                    {/* <button className={styles.hero__button}>Watch</button> */}
                    <Button variant="primary">Watch</Button>
                </div>
                
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src={movie.Poster}
                        alt="Gambar Film"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
