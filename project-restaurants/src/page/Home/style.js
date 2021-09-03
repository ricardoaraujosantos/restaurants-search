import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.aside`

    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    padding: 16px;
`;

export const Logo = styled.img`
    margin-bottom: 14px;
    width: 200px;
`;

export const Map = styled.div`
    background-color: blue;
    width: 100vw;

`;


