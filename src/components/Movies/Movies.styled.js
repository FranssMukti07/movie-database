import styled from "styled-components";

const StyledMovies = styled.div`
    margin: 1rem;

    section {
        margin: 5rem 0;
        text-align: center;
    }

    h2 {
        margin-bottom: 1.5rem;
        font-size: 2.44rem;
        color: #4361ee;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        /* flex-wrap: wrap; */
        max-width: 100%;
        margin: auto;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        .movies__container {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;
    }
`;

export default StyledMovies;