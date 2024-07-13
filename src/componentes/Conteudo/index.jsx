import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Cards from '../Cards';
import { fetchVideos, fetchCategorias } from '../../api';
import ModalEditar from '../ModalEditar';

const ContainerPrincipal = styled.section`
    margin: 4% 5% 10% 5%;
`

const ContainerCategorias = styled.div`
    display: flex;
    flex-direction: column;
    gap: 93px;
`

const GrupoDeCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    h3 {
        color: #ffffff;
        font-size: 20px;
    }

    @media (max-width: 1000px) {
        flex-wrap: nowrap;
        overflow-x: auto;
        padding-bottom: 15px;
  }

    @media (max-width: 480px) {
        flex-wrap: nowrap;
        overflow-x: auto;
        padding-bottom: 15px;
  }
`

const TituloCategorias = styled.button`
    width: 432px;
    height: 70px;
    font-size: 32px;
    font-weight: bold;
    border: none;
    border-radius: 15px;
    color: #ffffff;
    background-color: ${props => props.color || "#6bd1ff"};

    @media (max-width: 1000px) {
        display: block; 
        margin: 0 auto;
        width: 332px;
    }
`

const Conteudo = () => {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [editVideoId, setEditVideoId] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const videosData = await fetchVideos();
            const categoriasData = await fetchCategorias();
            setVideos(videosData);
            setCategorias(categoriasData);
        };
        getData();
    }, []);

    const handleEditClick = (videoId) => {
        setEditVideoId(videoId);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setEditVideoId(null);
    };

    const handleDeleteClick = async (videoId) => {
        try {
            const response = await fetch(`http://localhost:3000/videos/${videoId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Erro ao deletar o vídeo');
            }

            setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));

            console.log('Vídeo deletado com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar o vídeo:', error);
        }
    };

    const renderCards = (categoriaId, color) => {
        const filteredVideos = videos.filter((video) => video.categoria === categoriaId);
        return (
            <GrupoDeCards>
                {filteredVideos.map((video) => (
                    <Cards
                        key={video.id}
                        borda={color}
                        titulo={video.titulo}
                        imagem={video.imagem}
                        descricao={video.descricao}
                        onEditClick={() => handleEditClick(video.id)}
                        onDeleteClick={() => handleDeleteClick(video.id)}
                    />
                ))}
            </GrupoDeCards>
        );
    };

    return (
        <ContainerPrincipal>
            <ContainerCategorias>
                {categorias.map((categoria) => (
                    <React.Fragment key={categoria.id}>
                        <TituloCategorias color={categoria.cor}>{categoria.titulo}</TituloCategorias>
                        {renderCards(categoria.id, categoria.cor)}
                    </React.Fragment>
                ))}
            </ContainerCategorias>
            {editVideoId && (
                <ModalEditar
                    isvisible={isModalVisible}
                    onClose={handleCloseModal}
                    videoId={editVideoId}
                    videos={videos}
                    categorias={categorias}
                />
            )}
        </ContainerPrincipal>
    );
};

export default Conteudo;