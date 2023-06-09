import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";

const PopularMovie = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;

    const url = `https://api.themoviedb.org/3/movie/popular/?api_key=${API_KEY}`;

    const getPopularMovies = async () => {
        const response = await axios.get(url);
        const { results } = response.data;

        console.log(results);
        setMovies(results);
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

    return (
        <>
            <Hero/>
            <Movies movies={movies} title="Popular Movies"/>
        </>
    );
};

export default PopularMovie;
