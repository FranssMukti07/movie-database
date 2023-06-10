import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";

const Detail = () => {
    const params = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movies, setMovies] = useState([]);

    const fetchRecomMovie = async () => {
        const url = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`;

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
