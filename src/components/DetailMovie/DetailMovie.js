import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

const DetailMovie = () => {
    // const API_KEY = process.env.REACT_APP_API_KEY;
    const params = useParams();
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const idTrailer = movie && (movie.videos.results[0]?.key ?? "");

    const fetchDetailMovie = async () => {
        const url = ENDPOINTS.DETAIL(params.id);
        const response = await axios(url);
        const { data } = response;

        setMovie(data);
        // console.log(data);
    };

    useEffect(() => {
        fetchDetailMovie();
    }, [params.id]);

    return (
        <div>
            <Hero
                title={movie.title}
                genre={genres}
                overview={movie.overview}
                poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                trailer={`https://www.youtube.com/watch?v=${idTrailer}` || "#"}
            />
        </div>
    );
};

export default DetailMovie;
