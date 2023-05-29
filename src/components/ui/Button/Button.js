import styled, { css } from "styled-components";

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    /* background-color: ${function (props) {
        if (props.variant === "primary") {
            return "blue";
        } else if (props.variant === "secondary") {
            return "red";
        } else if (props.variant === "warning") {
            return "yellow";
        } else {
            return "blue";
        }
    }}; */

    /* Tangkap props variant */
    background-color: ${(props) => {
        if (props.variant) {
            return props.theme.colors[props.variant];
        } else {
            return props.theme.colors["primary"];
        }
    }};

    /* Tangkap props full */
    ${(props) => {
        return (
            props.full &&
            css`
                display: block;
                width: 100%;
                cursor: pointer;
            `
        );
    }}

    /* Tangkap props size */
    ${(props) => {
        if (props.size) {
            return props.theme.size[props.size];
        } else {
            return props.theme.size["md"];
        }
    }} /* Jika ingin memberi effect */
    /* &:hover {
        background-color: red;
    }; */
`;

export default Button;
