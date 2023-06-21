import styled from "styled-components";

const StyledNavbar = styled.div`
    background-color: #4361ee;
    padding: 1rem;
    color: #fff;

    h2 {
        margin-left: 1rem;
    }

    nav {
        display: flex;
        flex-direction: column;
    }

    .navbar__brand {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    li {
        margin-bottom: 1rem;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    @media (min-width: 768px) {
        nav {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .navbar__brand {
            margin-bottom: 0;
        }

        ul {
            flex-direction: row;
        }

        li {
            margin: 0 1rem;
        }
    }
`;

export default StyledNavbar;
