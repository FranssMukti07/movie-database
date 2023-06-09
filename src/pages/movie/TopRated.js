import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

const TopRated = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;

    const url = `https://api.themoviedb.org/3/movie/top_rated/?api_key=${API_KEY}`;

    const getTopRatedMovies = async () => {
        const response = await axios(url);
        const { results } = response.data;

        setMovies(results);
        // console.log(results);
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
