// import logo from './logo.svg';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout/Layout";
import Theme from "./components/ui/Theme/Theme";
import { ThemeProvider } from "styled-components";
import NowPlaying from "./pages/movie/NowPlaying";
// import Counter from "./pages/Counter";

const App = () => {
    return (
        // <Counter/>
        <ThemeProvider theme={Theme}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/movie/add-movie"
                        element={<CreateMovie />}
                    ></Route>
                    <Route path="/movie/popular" element={<PopularMovie />}></Route>
                    <Route
                        path="/movie/top_rated"
                        element={<TopRated />}
                    ></Route>
                    <Route
                        path="/movie/now_playing"
                        element={<NowPlaying />}
                    ></Route>
                </Routes>
            </Layout>
        </ThemeProvider>
    );
};

export default App;
