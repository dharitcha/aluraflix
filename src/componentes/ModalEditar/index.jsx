import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { FormContext } from "../../contexto/FormContext";
import IconeFechar from './cross.png';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${(props) => (props.isvisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const FormModal = styled.div`
  background-color: #03122F;
  gap: 20px;
  padding: 5% 10%;
  border: solid 5px #6BD1FF;
  border-radius: 15px;
  width: 60%;
  max-width: 90%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1010; 
  position: relative;

  @media (max-width: 1000px) {
        width: 80%;
        max-width: 100%;
        max-height: 95vh;
        padding: 5%;
    }
`;

const FecharModal = styled.img`
  position: absolute;
  top: 20px; 
  right: 20px; 
  cursor: pointer;
`;

const ContainerForm = styled.div`
    width: 90%;
    h3 {
        color: #2271D1;
        text-transform: uppercase;
        font-size: 2.5rem;
        margin-bottom: 20px;

        @media (max-width: 1000px) {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 1000px) {
        width: 100%;
    }
`

const CampoFormulario = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        color: #ffffff;
        margin-top: 10px;
    }
`

const InputFormulario = styled.input`
    background-color: transparent;
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: normal;
    width: 100%;
    border-radius: 10px;
    border: 3px solid #2271D1;
    box-sizing: border-box;
    padding: 15px;
    margin-top: 10px;

    @media (max-width: 1000px) {
        font-size: 1rem;
        padding: 12px;
        margin-top: 8px;

    }

    &::placeholder {
            color: rgba(255, 255, 255, 0.6);
            font-size: 1rem;

            @media (max-width: 1000px) {
                font-size: 0.75rem;
            }
        }
`

const CampoCategorias = styled.select`
    background-color: transparent;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    font-weight: normal;
    width: 100%;
    border-radius: 10px;
    border: 3px solid #2271D1;
    box-sizing: border-box;
    padding: 15px;
    margin-top: 10px;

    @media (max-width: 1000px) {
        font-size: 1rem;
        padding: 12px;
        margin-top: 8px;
    }

    option {
        color: rgba(255, 255, 255, 0.6);
        font-size: 1rem;

        @media (max-width: 1000px) {
            font-size: 0.75rem;
        }
    }
`

const CampoDescricao = styled.input`
    background-color: transparent;
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: normal;
    width: 100%;
    border-radius: 10px;
    border: 3px solid #2271D1;
    box-sizing: border-box;
    padding: 15px 15px 45px 15px;
    margin-top: 10px;

    @media (max-width: 1000px) {
        font-size: 1rem;
        padding: 12px 12px 40px 12px;
        margin-top: 8px;
    }

    &::placeholder {
            color: rgba(255, 255, 255, 0.6);
            font-size: 1rem;

            @media (max-width: 1000px) {
                font-size: 0.75rem;
            }
        }
`

const LinhaForm = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 10px;
    width: 100%;
`

const BotaoForm = styled.button`
    width: 180px;
    height: 54px;
    font-size: 1.25rem;
    border: 3px solid ${props => props.corborda || '#ffffff'};
    border-radius: 10px;
    background-color: ${props => props.corbotao || 'transparent'};
    color: ${props => props.cortexto || '#ffffff'};
    text-transform: uppercase;
    cursor: pointer;

    @media (max-width: 1000px) {
        width: 160px;
        height: 44px;
        font-size: 1rem;
    }
`

const ModalEditar = ({ isvisible, onClose, corborda, corbotao, cortexto, videoId, videos, categorias }) => {
    const { formState, updateFormState, formErrors, validateForm, resetForm, setFormState } = useContext(FormContext);

    useEffect(() => {
        if (videoId && videos.length > 0) {
            const videoToEdit = videos.find((video) => video.id === videoId);
            if (videoToEdit) {
                setFormState(videoToEdit);
            }
        }
    }, [videoId, videos, setFormState]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Formulário válido. Enviando para atualização:', formState);
            await updateCard(formState);
            resetForm();
            onClose();
        } else {
            console.log('Formulário inválido!', formErrors);
        }
    };

    const updateCard = async (formData) => {
        try {
            if (!formData.id) {
                console.error('ID do formulário não está definido:', formData);
                return;
            }

            const response = await fetch(`http://localhost:3000/videos/${formData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao atualizar o card');
            }

            console.log('Card atualizado com sucesso!');

            window.location.reload();
        } catch (error) {
            console.error('Erro ao atualizar o card:', error);
        }
    };

    return (
        <Overlay isvisible={isvisible.toString()}>
            <FormModal>
                <FecharModal src={IconeFechar} alt="Fechar" onClick={onClose} />
                <ContainerForm>
                    <h3>Editar Card:</h3>
                    <form onSubmit={handleSubmit}>
                        <CampoFormulario>
                            <label>Título</label>
                            <InputFormulario
                                type="text"
                                placeholder="Insira o título"
                                value={formState.titulo || ''}
                                onChange={(e) => updateFormState('titulo', e.target.value)}
                                required
                            />
                            {formErrors.titulo && <span>{formErrors.titulo}</span>}
                        </CampoFormulario>
                        <CampoFormulario>
                            <label>Categoria</label>
                            <CampoCategorias
                                value={formState.categoria || ''}
                                onChange={(e) => updateFormState('categoria', e.target.value)}
                                required
                            >
                                <option value="" disabled hidden>
                                    Selecione uma categoria
                                </option>
                                {categorias.map((categoria) => (
                                    <option key={categoria.id} value={categoria.id}>
                                        {categoria.titulo}
                                    </option>
                                ))}
                            </CampoCategorias>
                            {formErrors.categoria && <span>{formErrors.categoria}</span>}
                        </CampoFormulario>
                        <CampoFormulario>
                            <label>Imagem</label>
                            <InputFormulario
                                type="text"
                                placeholder="Insira a imagem de capa"
                                value={formState.imagem || ''}
                                onChange={(e) => updateFormState('imagem', e.target.value)}
                                required
                            />
                            {formErrors.imagem && <span>{formErrors.imagem}</span>}
                        </CampoFormulario>
                        <CampoFormulario>
                            <label>Vídeo</label>
                            <InputFormulario
                                type="text"
                                placeholder="Insira o link do vídeo"
                                value={formState.video || ''}
                                onChange={(e) => updateFormState('video', e.target.value)}
                                required
                            />
                            {formErrors.video && <span>{formErrors.video}</span>}
                        </CampoFormulario>
                        <CampoFormulario>
                            <label>Descrição</label>
                            <CampoDescricao
                                type="text"
                                placeholder="Sobre o que é esse vídeo?"
                                value={formState.descricao || ''}
                                onChange={(e) => updateFormState('descricao', e.target.value)}
                                required
                            />
                            {formErrors.descricao && <span>{formErrors.descricao}</span>}
                        </CampoFormulario>
                        <LinhaForm>
                            <BotaoForm
                                type="submit"
                                corborda="#2271D1"
                                corbotao="rgba(0, 0, 0, 0.9)"
                                cortexto="#2271D1"
                            >
                                Salvar
                            </BotaoForm>
                            <BotaoForm type="button" onClick={resetForm}>
                                Limpar
                            </BotaoForm>
                        </LinhaForm>
                    </form>
                </ContainerForm>
            </FormModal>
        </Overlay>
    );
};

export default ModalEditar;