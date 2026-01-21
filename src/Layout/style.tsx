import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Title = styled.h1`
    font-size: 35px;
    color: #991e1e;
`

export const Ul = styled.ul`
    display: flex;
    gap: 30px;
`

export const Links = styled(Link)`
    color: #a42020a9;
    font-size: 20px;
    transform: 0.2s ease-in;
    font-weight: 700;

    &:hover {
        color: #a11d1d;
        border-bottom: 2px solid #bb2a2a;
    }
`