// import data from "../../utils/constants/data";
import axios from "axios";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";
import { useState, useEffect } from "react";

const Hero = () => {
    const [movie, setMovie] = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const idTrailer = movie && movie.videos.results[1].key;

    const getTrendingMovie = async () => {
        // Lakukan fetching data
        const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

        const response = await axios(url);
        const { results } = response.data;

        return results[1];
        // setMovie(results[1]);

        // console.log(response);
    };

    const getDetailMovie = async () => {
        // Ambil data trending movie lalu tangkap id nya
        const trendingMovie = await getTrendingMovie();
        const id = trendingMovie.id;

        // Fetch detail movie berdasarkan id
        const url = `
        https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos
        `;
        const response = await axios(url);
        const { data } = response;
        console.log(data);


        // Update data ke state movie
        setMovie(data);
    };

    useEffect(() => {
        getDetailMovie();
    }, []);

    return (
        <StyledHero>
            <div>
                <div className="hero__left">
                    <h3>{movie.title}</h3>
                    <p>{genres}</p>
                    <p>{movie.overview}</p>
                    <Button
                        variant="primary"
                        size="md"
                        as="a"
                        href={`https://www.youtube.com/watch?v=${idTrailer}`}
                        target="_blank"
                    >
                        Watch
                    </Button>
                </div>
                <div className="hero__right">
                    <img
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        alt="Gambar Film"
                    />
                </div>
            </div>
        </StyledHero>
    );
};

export default Hero;
