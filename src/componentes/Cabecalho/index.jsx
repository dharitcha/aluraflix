import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderEstilizado = styled.header`
    padding: 3%;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.color || 'transparent'};
    position: relative;
    z-index: 10;

    &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: #2271D1;
    box-shadow: 0 5px 10px #2271D1, 0 5px 20px #2271D1;
    z-index: -1;
  }
`
const LogoContainer = styled.div`
  width: fit-content;
  cursor: pointer;
  img {
        height: 42px;
        width: 170px;

        @media (max-width: 1000px) {
            height: 38px;
            width: 166px;
        }

        @media (max-width: 480px) {
            height: 28px;
            width: 156px;
        }
    }
`;

const ContainerEstilizado = styled.div`
    display: flex;
    gap: 24px;
`

const Cabecalho = ({ color, children }) => {
    const navigate = useNavigate();

    return (
        <HeaderEstilizado color={color}>
            <LogoContainer onClick={() => navigate("/")}>
                <img src="./public/imagens/logo.png" alt="Logo do AluraFlix" />
            </LogoContainer>
            <ContainerEstilizado>
                {children}
            </ContainerEstilizado>
        </HeaderEstilizado>
    )
}

export default Cabecalho