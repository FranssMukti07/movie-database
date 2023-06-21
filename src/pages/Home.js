import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

const Main = () => {

    return (
        <main>
            <Hero />
            <Movies />
            {/* <Counter /> */}
        </main>
    );
};

function Home() {
    return (
        <>
            <Main />
        </>
    );
}

export default Home;
