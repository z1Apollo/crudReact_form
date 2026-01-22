import styled from "@emotion/styled";

export const ContResults = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    gap: 30px;
`

export const Resultados = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;;
`

export const BtnResults = styled.div`
    display: flex;
    gap: 10px;
`

export const DadosResults = styled.div`
    background-color: #28289922;
    padding: 20px;
    border-radius: 10px;  

    p {
        color: #000000e4    ;
    }
`