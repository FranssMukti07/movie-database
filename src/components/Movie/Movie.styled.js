import styled from "styled-components";

const StyledMovie = styled.div`
    margin: auto;
    transition: transform .2s;
    width: 23%;

    img {
        border-radius: 25px;
        max-width: 80%;
        height: auto;
        -webkit-box-shadow: 10px 10px 5px #ccc;
        -moz-box-shadow: 10px 10px 5px #ccc;
        box-shadow: 10px 10px 5px #ccc;
    }

    h3 {
        color: #4361ee;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        max-width: 100%;
    }

    p {
        color: #64748b;
    }

    a {
        text-decoration: none;
    }

    .image {
        border: 2px solid red;
        padding: 1rem;
    }

    .info {
        border-bottom: 2px dashed blue;
        border-right: 2px dashed blue;
        border-left: 2px dashed blue;
        padding: 0.5rem;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

export default StyledMovie;
