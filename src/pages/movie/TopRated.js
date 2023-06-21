import axios from "axios";
import { useEffect } from "react";
// import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { updateMovies } from "../../feature/movieSlice";

const TopRated = () => {
    const movies = useSelector((store) => store.movies.movies);
    const dispatch = useDispatch();

    const url = ENDPOINTS.TOPRATED;

    const getTopRatedMovies = async () => {
        const response = await axios(url);
        const { results } = response.data;

        dispatch(updateMovies(results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);

    return (
        <>
            <Hero />
            <Movies movies={movies} title="Top Rated" />
        </>
    );
};

export default TopRated;
