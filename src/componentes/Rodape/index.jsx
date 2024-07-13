import styled from "styled-components";

const RodapeEstilizado = styled.footer`
    padding: 3%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    img {
        height: 42px;
        width: 170px;

        @media (max-width: 1000px) {
            height: 32px;
            width: 160px;
        }

        @media (max-width: 480px) {
            height: 28px;
            width: 156px;
        }
    }
    position: relative;

    &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: #2271D1;
    box-shadow: 0 -5px 10px #2271D1, 0 -5px 20px #2271D1;
    z-index: 1;
  }
`

const Rodape = () => {
    return (
        <RodapeEstilizado>
            <img src="./imagens/logo.png" alt="Logo do AluraFlix" />
        </RodapeEstilizado>
    )
}

export default Rodape;
