// import logo from './logo.svg';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout/Layout";
import Counter from "./pages/Counter";

const App = () => {
    return (
        // <Counter/>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/movie/add-movie" element={<CreateMovie/>}></Route>
                <Route path="/movie/popular" element={<Popular/>}></Route>
                <Route path="/movie/top-ranks" element={<TopRated/>}></Route>
            </Routes>
        </Layout>
    );
};

export default App;