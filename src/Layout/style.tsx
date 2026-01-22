import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Title = styled.h1`
    font-size: 35px;
    color: #282899;
`

export const Ul = styled.ul`
    display: flex;
    gap: 30px;
`

export const Links = styled(NavLink)`
    color: #2828997a;
    font-size: 20px;
    transform: 0.2s ease-in;
    font-weight: 700;

    &:hover {
        color: #282899;
        border-bottom: 2px solid #282899;
    }

    &.active {
        color: #282899;
        border-bottom: 2px solid #282899;
    }
`