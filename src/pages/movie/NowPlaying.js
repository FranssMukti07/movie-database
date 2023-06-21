import Hero from "../../components/Hero/Hero";
import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { updateMovies } from "../../feature/movieSlice";

const NowPlaying = () => {
    const movies = useSelector((store) => store.movies.movies);
    const dispatch = useDispatch();

    const url = ENDPOINTS.NOWPLAYING;

    const getNowPlayingMovies = async () => {
        const response = await axios(url);
        const { results } = response.data;

        dispatch(updateMovies(results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return (
        <>
            <Hero />
            <Movies movies={movies} title="Now Playing" />
        </>
    );
};

export default NowPlaying;
