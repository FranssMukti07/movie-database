import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../utils/constants/endpoints";
import axios from "axios";
import Movies from "../Movies/Movies";
import { useDispatch, useSelector } from "react-redux";
import { updateMovies } from "../../feature/movieSlice";

const Recommendations = () => {
    const movies = useSelector((store) => store.movies.movies)
    const dispatch = useDispatch();
    const params = useParams();

    const fetchRecomMovie = async () => {
        const url = ENDPOINTS.RECOMMENDATIONS(params.id);

        const response = await axios(url);
        const { results } = response.data;

        dispatch(updateMovies(results));
    };

    useEffect(() => {
        fetchRecomMovie();
    }, [params.id]);

    return (
        <>
            <Movies movies={movies} title="Recommendations Movie" />
        </>
    );
};

export default Recommendations;