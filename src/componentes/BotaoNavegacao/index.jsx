import styled from "styled-components";

export const PaginaAtiva = styled.button`
    width: 180px;
    height: 54px;
    font-size: 20px;
    border: 3px solid #2271D1;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.9);
    color: #2271D1;
    position: relative;
    z-index: 0;
    overflow: hidden;
    box-shadow: inset 0 0 15px #2271D1;
    cursor: pointer;

    @media (max-width: 1000px) {
      width: 160px;
      height: 44px;
      font-size: 16px;
    }

    @media (max-width: 480px) {
      width: 80px;
      height: 28px;
      font-size: 10px;
    }

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 3px solid #2271D1;
    border-radius: 15px;
    box-shadow: inset 0 0 15px #2271D1;
    pointer-events: none;
  }
`

export const PaginaInativa = styled.button`
    width: 180px;
    height: 54px;
    font-size: 20px;
    border: 3px solid #ffffff;
    border-radius: 15px;
    background-color: transparent;
    color:#ffffff;
    cursor: pointer;

    @media (max-width: 1000px) {
      width: 160px;
      height: 44px;
      font-size: 16px;
    }

    @media (max-width: 480px) {
      width: 80px;
      height: 28px;
      font-size: 10px;
    }
`

const BotaoNavegacao = () => {
    return (
        <></>
    )
}

export default BotaoNavegacao;