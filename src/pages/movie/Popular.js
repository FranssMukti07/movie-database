import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { updateMovies } from "../../feature/movieSlice";

const PopularMovie = () => {
    const movies = useSelector((store) => store.movies.movies);
    const dispatch = useDispatch();

    const url = ENDPOINTS.POPULAR;

    const getPopularMovies = async () => {
        const response = await axios.get(url);
        const { results } = response.data;

        dispatch(updateMovies(results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

    return (
        <>
            <Hero />
            <Movies movies={movies} title="Popular Movies" />
        </>
    );
};

export default PopularMovie;
