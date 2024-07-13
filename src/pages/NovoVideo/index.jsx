import React from "react";
import Cabecalho from "../../componentes/Cabecalho";
import { PaginaAtiva, PaginaInativa } from "../../componentes/BotaoNavegacao";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Formulario from "../../componentes/Formulario";

const ContainerPrincipal = styled.main`
    margin: 6% 10%;

    @media (max-width: 1000px) {
        margin: 15% 8%;
    }

    @media (max-width: 480px) {
        margin: 15% 8%;
    }
`

const BlocoTitulo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #ffffff;

    @media (max-width: 1000px) {
        gap: 40px;
    }

    @media (max-width: 480px) {
        gap: 45px;
    }

    h1 {
        font-size: 60px;
        font-weight: black;

        @media (max-width: 1000px) {
            font-size: 50px;
        }

        @media (max-width: 480px) {
            font-size: 40px;
        }
    }
    p{
        font-size: 20px;
        font-weight: 300;
        text-transform: uppercase;
        @media (max-width: 1000px) {
            font-size: 16px;
        }

        @media (max-width: 480px) {
            font-size: 14px;
        }
    }
`


const NovoVideo = () => {
    const navigate = useNavigate();

    return (
        <>
            <Cabecalho color="rgba(0, 0, 0, 0.9)">
                <PaginaInativa onClick={() => navigate("/")}>HOME</PaginaInativa>
                <PaginaAtiva onClick={() => navigate("/novo-video")}>NOVO VÍDEO</PaginaAtiva>
            </Cabecalho>
            <ContainerPrincipal>
                <BlocoTitulo>
                    <h1>NOVO VIDEO</h1>
                    <p>Complete o formulário para criar um novo card de vídeo.</p>
                </BlocoTitulo>
                <Formulario />
            </ContainerPrincipal>
        </>
    );
};

export default NovoVideo;
