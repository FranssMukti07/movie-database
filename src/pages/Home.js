import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { useEffect } from "react";
import { updateMovies } from "../feature/movieSlice";

const Main = () => {
    return (
        <main>
            <Hero />
            <Movies />
            {/* <Counter /> */}
        </main>
    );
};

const Home = () => {
    const dispatch = useDispatch();
    const moviesLocal = useSelector((store) => store.movies.moviesLocal);

    useEffect(() => {
        dispatch(updateMovies(moviesLocal));
    }, []);
    
    return (
        <>
            <Main />
        </>
    );
};

export default Home;
