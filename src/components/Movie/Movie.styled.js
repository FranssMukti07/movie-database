import styled from "styled-components";

const StyledMovie = styled.div`
    /* margin-bottom: 1rem; */
    margin: auto;

    img {
        border-radius: 25px;
        max-width: 80%;
        height: auto;
        margin-bottom: 1rem;
        -webkit-box-shadow: 10px 10px 5px #ccc;
        -moz-box-shadow: 10px 10px 5px #ccc;
        box-shadow: 10px 10px 5px #ccc;
    }

    h3 {
        color: #4361ee;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        max-width: 300px;
    }

    p {
        color: #64748b;
    }
`;

export default StyledMovie;