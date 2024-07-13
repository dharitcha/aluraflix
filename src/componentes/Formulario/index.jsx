import { styled } from "styled-components";
import React, { useContext } from 'react';
import { FormContext } from "../../contexto/FormContext";


const ContainerFormulario = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 60px;
    margin-top: 5%;
    width: 100%;

    @media (max-width: 1000px) {
        gap: 50px;
        margin-top: 10%;
    }

    @media (max-width: 480px) {
        gap: 40px;
        margin-top: 10%;
    }
`

const TituloFormulario = styled.div`
    display: flex;
    align-items: center;
    height: 90px;
    width: 100%;
    border-top: 3px solid rgba(255, 255, 255, 0.1);
    border-bottom: 3px solid rgba(255, 255, 255, 0.1);

    h3 {
        font-size: 36px;
        font-weight: 500;
        color: #ffffff;

        @media (max-width: 1000px) {
            font-size: 30px;
        }

        @media (max-width: 480px) {
            font-size: 28px;
        }
    }
`

const LinhaForm = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    color: #ffffff;
    font-size: 20px;
    width: 100%;

    @media (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
    }
`
const CampoFormulario = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const InputFormulario = styled.input`
    background-color: transparent;
    color: #ffffff;
    font-size: 20px;
    font-weight: normal;
    width: 100%;
    border-radius: 10px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    padding: 20px;
    margin-top: 15px;

    &::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }
`

const CampoCategorias = styled.select`
    background-color: transparent;
    color: rgba(255, 255, 255, 0.6);
    font-size: 20px;
    font-weight: normal;
    width: 100%;
    border-radius: 10px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    padding: 20px;
    margin-top: 15px;

    option {
        color: rgba(255, 255, 255, 0.6);
    }
`

const CampoDescricao = styled.input`
    background-color: transparent;
    color: #ffffff;
    font-size: 20px;
    font-weight: normal;
    width: 50%;
    border-radius: 10px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    padding: 20px 20px 200px 20px;
    margin-top: 15px;

    &::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }

    @media (max-width: 1000px) {
        width: 70%;
        padding: 20px 20px 150px 20px;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 20px 20px 100px 20px;
    }
`

const BotaoForm = styled.button`
    width: 180px;
    height: 54px;
    font-size: 20px;
    border: 3px solid ${props => props.corborda || '#ffffff'};
    border-radius: 10px;
    background-color: transparent;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;

    @media (max-width: 1000px) {
        font-size: 18px;
    }

    @media (max-width: 480px) {
        width: 160px;
        height: 54px;
        font-size: 18px;
    }
`

const Formulario = ({ corborda }) => {
    const { formState, updateFormState, formErrors, validateForm, submitForm, resetForm } = useContext(FormContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await submitForm();
        } else {
            console.log("Formulário inválido!", formErrors);
        }
    };

    const handleReset = () => {
        resetForm();
    };

    return (
        <ContainerFormulario as="form" onSubmit={handleSubmit}>
            <TituloFormulario>
                <h3>Criar Card</h3>
            </TituloFormulario>
            <LinhaForm>
                <CampoFormulario>
                    <label>Título</label>
                    <InputFormulario
                        type="text"
                        placeholder="Insira o título"
                        value={formState.titulo}
                        onChange={(e) => updateFormState('titulo', e.target.value)}
                        required
                    />
                    {formErrors.titulo && <span>{formErrors.titulo}</span>}
                </CampoFormulario>
                <CampoFormulario>
                    <label>Categoria</label>
                    <CampoCategorias
                        value={formState.categoria}
                        onChange={(e) => updateFormState('categoria', e.target.value)}
                        required
                    >
                        <option value="" disabled hidden>Selecione uma categoria</option>
                        <option value="1">Front End</option>
                        <option value="2">Back End</option>
                        <option value="3">Mobile</option>
                    </CampoCategorias>
                    {formErrors.categoria && <span>{formErrors.categoria}</span>}
                </CampoFormulario>
            </LinhaForm>
            <LinhaForm>
                <CampoFormulario>
                    <label>Imagem</label>
                    <InputFormulario
                        type="text"
                        placeholder="Insira a imagem de capa"
                        value={formState.imagem}
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
                        value={formState.video}
                        onChange={(e) => updateFormState('video', e.target.value)}
                        required
                    />
                    {formErrors.video && <span>{formErrors.video}</span>}
                </CampoFormulario>
            </LinhaForm>
            <LinhaForm>
                <CampoFormulario>
                    <label>Descrição</label>
                    <CampoDescricao
                        type="text"
                        placeholder="Sobre o que é esse vídeo?"
                        value={formState.descricao}
                        onChange={(e) => updateFormState('descricao', e.target.value)}
                        required
                    />
                    {formErrors.descricao && <span>{formErrors.descricao}</span>}
                </CampoFormulario>
            </LinhaForm>
            <LinhaForm>
                <BotaoForm type="submit" corborda='#2271D1'>Adicionar</BotaoForm>
                <BotaoForm type="button" onClick={handleReset}>Limpar</BotaoForm>
            </LinhaForm>
        </ContainerFormulario>
    )
}

export default Formulario;