import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../utils/constants/endpoints";
import axios from "axios";
import Movies from "../Movies/Movies";

const Recommendations = () => {
    const params = useParams();
    const [movies, setMovies] = useState([]);

    const fetchRecomMovie = async () => {
        const url = ENDPOINTS.RECOMMENDATIONS(params.id);

        const response = await axios(url);
        const { results } = response.data;

        setMovies(results);
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