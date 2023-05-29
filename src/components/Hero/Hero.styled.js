import styled from "styled-components";

const StyledHero = styled.div`
    max-width: 1000px;
    margin: 1rem;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .hero__left {
        text-align: center;
        margin-bottom: 1rem;
        order: 1;
        flex-basis: 60%;
    }

    .hero__right {
        order: 0;
        margin-bottom: 1rem;
        flex-basis: 40%;
        display: flex;
        justify-content: center;
    }

    h3 {
        color: #4361ee;
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }

    p:first-of-type {
        color: #b5179e;
        margin-bottom: 1rem;
        font-size: 1.59rem;
    }

    p:last-of-type {
        color: #64748b;
        margin-bottom: 1rem;
    }

    img {
        max-width: 70%;
        height: auto;
        border-radius: 25px;
        -webkit-box-shadow: 10px 10px 5px #ccc;
        -moz-box-shadow: 10px 10px 5px #ccc;
        box-shadow: 10px 10px 5px #ccc;
    }

    @media (min-width: 768px) {
        margin: 2rem auto;

        & > div {
            flex-direction: row;
        }

        .hero__left {
            order: 0;
            text-align: left;
            margin: auto 0;
        }

        .hero__right {
            display: flex;
            justify-content: end;
        }
    }
`;

export default StyledHero