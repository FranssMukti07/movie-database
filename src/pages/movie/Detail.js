import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

const Detail = () => {
    const params = useParams();
    const [movies, setMovies] = useState([]);

    const fetchRecomMovie = async () => {
        const url = ENDPOINTS.RECOMMENDATIONS(params.id);

        const response = await axios(url);
        const {results} = response.data;

        setMovies(results);
    };

    useEffect(() => {
        fetchRecomMovie()
    }, [params.id]);

    return (
        <div>
            <DetailMovie/>
            <Movies movies={movies} title="Recommendations Movie"/>
        </div>
    );
};

export default Detail;
