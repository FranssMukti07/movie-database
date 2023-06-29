import axios from "axios";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";
import { useState, useEffect } from "react";
import ENDPOINTS from "../../utils/constants/endpoints";


const Hero = (props) => {
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const idTrailer = movie && (movie.videos.results[1]?.key ?? "");
    const { title, genre, overview, poster, trailer } = props;

    const getTrendingMovie = async () => {
        // Lakukan fetching data
        const url = ENDPOINTS.TRENDING;

        const response = await axios(url);
        const { results } = response.data;

        return results[7];
    };

    const getDetailMovie = async () => {
        // Ambil data trending movie lalu tangkap id nya
        const trendingMovie = await getTrendingMovie();
        const id = trendingMovie.id;

        // Fetch detail movie berdasarkan id
        const url = ENDPOINTS.DETAIL(id);
        const response = await axios(url);
        const { data } = response;

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
                    <h3>{title || movie.title}</h3>
                    <p>{genre || genres}</p>
                    <p>{overview || movie.overview}</p>
                    <Button
                        variant="primary"
                        size="md"
                        as="a"
                        href={trailer || `https://www.youtube.com/watch?v=${idTrailer}`}
                        target="_blank"
                    >
                        Watch
                    </Button>
                </div>
                <div className="hero__right">
                    <img
                        src={poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        alt="Gambar Film"
                    />
                </div>
            </div>
        </StyledHero>
    );
};

export default Hero;
