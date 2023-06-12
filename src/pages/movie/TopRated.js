import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

const TopRated = () => {
    const [movies, setMovies] = useState([]);

    const url = ENDPOINTS.TOPRATED;

    const getTopRatedMovies = async () => {
        const response = await axios(url);
        const { results } = response.data;

        setMovies(results);
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);

    return (
        <>
            <Hero/>
            <Movies movies={movies} title="Top Rated"/>
        </>
    );
};

export default TopRated;
