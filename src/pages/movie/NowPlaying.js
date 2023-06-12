import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

const NowPlaying = () => {
    const [movies, setMovies] = useState([]);

    const url = ENDPOINTS.NOWPLAYING;

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
