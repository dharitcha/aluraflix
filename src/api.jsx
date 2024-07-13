export const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:3000/videos');
      if (!response.ok) {
        throw new Error('Erro ao buscar vídeos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro:', error);
      return [];
    }
  };
  
  export const fetchCategorias = async () => {
    try {
      const response = await fetch('http://localhost:3000/categorias');
      if (!response.ok) {
        throw new Error('Erro ao buscar categorias');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro:', error);
      return [];
    }
  };
  