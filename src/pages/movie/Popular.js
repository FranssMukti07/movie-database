import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

const PopularMovie = () => {
    const [movies, setMovies] = useState([]);

    const url = ENDPOINTS.POPULAR;

    const getPopularMovies = async () => {
        const response = await axios.get(url);
        const { results } = response.data;

        // console.log(results);
        setMovies(results);
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

    return (
        <>
            <Hero />
            <Movies movies={movies} title="Popular Movies"/>
        </>
    );
};

export default PopularMovie;
