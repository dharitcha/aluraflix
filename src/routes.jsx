import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Rodape from "./componentes/Rodape";
import NovoVideo from "./pages/NovoVideo";
import { FormProvider } from "./contexto/FormContext";

function AppRoutes() {
  return (
    <FormProvider>
      <BrowserRouter>
        <EstilosGlobais />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="novo-video" element={<NovoVideo />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </FormProvider>
  );
}

export default AppRoutes;