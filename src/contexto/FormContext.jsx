import React, { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    titulo: '',
    categoria: '',
    imagem: '',
    video: '',
    descricao: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const updateFormState = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formState.titulo) errors.titulo = 'Título é obrigatório';
    if (!formState.categoria) errors.categoria = 'Categoria é obrigatória';
    if (!formState.imagem) errors.imagem = 'Imagem é obrigatória';
    if (!formState.video) errors.video = 'Vídeo é obrigatório';
    if (!formState.descricao) errors.descricao = 'Descrição é obrigatória';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setFormState({
      titulo: '',
      categoria: '',
      imagem: '',
      video: '',
      descricao: ''
    });
    setFormErrors({});
  };

  const submitForm = async () => {
    try {
      const response = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar o vídeo');
      }

      console.log('Vídeo adicionado com sucesso!');
      resetForm();
    } catch (error) {
      console.error('Erro ao adicionar o vídeo:', error);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formState,
        updateFormState,
        formErrors,
        validateForm,
        resetForm,
        submitForm,
        setFormState
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
