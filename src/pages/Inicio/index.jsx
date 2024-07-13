import React from "react";
import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Conteudo from "../../componentes/Conteudo";
import { PaginaAtiva, PaginaInativa } from "../../componentes/BotaoNavegacao";
import { useNavigate } from "react-router-dom";


const Inicio = () => {
    const navigate = useNavigate();

    return (
        <>
            <Cabecalho color="#262626">
                <PaginaAtiva onClick={() => navigate("/")}>HOME</PaginaAtiva>
                <PaginaInativa onClick={() => navigate("/novo-video")}>NOVO VÍDEO</PaginaInativa>
            </Cabecalho>
            <Banner />
            <Conteudo />
        </>
    );
};

export default Inicio;
