import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";

const NowPlaying = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;

    const url = `https://api.themoviedb.org/3/movie/now_playing/?api_key=${API_KEY}`;

    const getNowPlayingMovies = async () => {
        const response = await axios(url);
        const { results } = response.data;

        setMovies(results);
        // console.log(results);
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return (
        <>
            <Hero />
            <Movies movies={movies} title="Now Playing"/>
        </>
    );
};

export default NowPlaying;
