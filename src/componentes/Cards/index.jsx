import { styled } from 'styled-components';
import IconeDeletar from './deletar.png';
import IconeEditar from './editar.png';
import PropTypes from 'prop-types';
import React from 'react';

const Card = styled.section`
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 432px;
    height: 320px;
    gap: 0;

    @media (max-width: 1000px) {
        width: 350px;
        height: 260px;
    }

    @media (max-width: 480px) {
        width: 280px;
        height: 210px;
    }
`;

const Capa = styled.div`
    margin: 0;
    position: relative;
    overflow: hidden;
    width: 432px;
    height: 260.85px;
    box-shadow: inset 0 0 25px ${props => props.borda || 'transparent'};
    border-radius: 5px 5px 0px 0px;
    border: solid ${props => props.borda || 'transparent'} 3px;
    cursor: pointer;

&::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: solid ${props => props.borda || 'transparent'} 3px;
    border-radius: 5px 5px 0px 0px;
    box-shadow: inset 0 0 25px ${props => props.borda || 'transparent'};
    pointer-events: none;
}

img {
    border-radius: 5px 5px 0px 0px;
    width: 100%;
    height: 100%;
    display: block;
}

@media (max-width: 1000px) {
    width: 350px;
    height: 210px;
}

@media (max-width: 480px) {
    width: 280px;
    height: 168px;
}
`;

const Rodape = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 0px 0px 15px 15px;
    border: solid ${props => props.borda || 'transparent'} 3px;
    background-color: rgba(0, 0, 0, 0.9);
    height: 60px;
    width: 100%;
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 0 15px ${props => props.borda || 'transparent'};

    &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border: solid ${props => props.borda || 'transparent'} 3px;
        border-radius: 15px;
        box-shadow: inset 0 0 15px ${props => props.borda || 'transparent'};
        pointer-events: none;
    }

    @media (max-width: 1000px) {
        height: 50px;
    }

    @media (max-width: 480px) {
        height: 40px;
    }
`;

const ConteudoRodape = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    gap: 20px;
    h5 {
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 500;

        @media (max-width: 1000px) {
            font-size: 14px;
        }

        @media (max-width: 480px) {
            font-size: 12px;
        }
    }
    img {
        width: auto;
        max-height: 28px;
        @media (max-width: 1000px) {
            max-height: 24px;
        }

        @media (max-width: 480px) {
            max-height: 20px;
        }
    }
    cursor: pointer;

    .editar-container {
        display: flex;
        align-items: center;
        gap: 5px; 
        cursor: pointer; 
    }
`;

const Cards = ({ borda, titulo, imagem, onEditClick, onDeleteClick }) => {

    const handleEditarClick = () => {
        onEditClick();
    };

    const handleDeletarClick = () => {
        onDeleteClick();
    };

    return (
        <Card>
            <Capa borda={borda}>
                <img src={imagem} alt={titulo} />
            </Capa>
            <Rodape borda={borda}>
                <ConteudoRodape onClick={handleDeletarClick}>
                    <img src={IconeDeletar} alt="Ícone Deletar" />
                    <h5>DELETAR</h5>
                </ConteudoRodape>
                <ConteudoRodape>
                    <div className="editar-container" onClick={handleEditarClick}>
                        <img src={IconeEditar} alt="Ícone Editar" />
                        <h5>EDITAR</h5>
                    </div>
                </ConteudoRodape>
            </Rodape>
        </Card>
    );
};

Cards.propTypes = {
    borda: PropTypes.string,
    titulo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
};

export default Cards;