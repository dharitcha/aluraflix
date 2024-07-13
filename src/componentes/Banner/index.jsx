import { styled } from "styled-components";

const videoCoverUrl = 'https://i.ytimg.com/vi/c8mVlakBESE/maxresdefault.jpg';
const videoUrl = 'https://www.youtube.com/watch?v=c8mVlakBESE';

const ContainerEstilizado = styled.section`
  height: 832px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  background-image: url(${videoCoverUrl});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 18, 51, 0.7);
    z-index: 1; 
  }
`;

const CardEstilizado = styled.div`
  display: flex;
  padding: 155px 40px;
  gap: 50px;
  border-radius: 15px;
  position: relative;
  z-index: 2;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    padding: 80px 20px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
    gap: 20px;
  }
`;

const BlocoTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    color: #F5F5F5;
    font-weight: 300;
    font-size: 40px;
    margin-top: 40px;

    @media (max-width: 1000px) {
      font-size: 32px;
      margin-top: 20px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
      margin-top: 10px;
    }
  }
  p {
    color: #F5F5F5;
    font-weight: 100;
    font-size: 18px;

    @media (max-width: 1000px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

const Categoria = styled.button`
  width: 296px;
  height: 92px;
  font-size: 44px;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  background-color: #6bd1ff;
  color: #ffffff;

  @media (max-width: 1000px) {
    width: 240px;
    height: 72px;
    font-size: 36px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 52px;
    font-size: 28px;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: auto;
  max-width: 646px;
  border-radius: 4px;
  border: solid #6BD1FF 4px;
  position: relative;
  z-index: 0;
  box-shadow: 0 0 15px #6BD1FF;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: solid #6BD1FF 4px;
    border-radius: 4px;
    box-shadow: 0 0 15px #6BD1FF;
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 1000px) {
    max-width: 100%;
    border: solid #6BD1FF 3px;

    &::before {
      border: solid #6BD1FF 3px;
    }
  }

  @media (max-width: 480px) {
    border: solid #6BD1FF 2px;

    &::before {
      border: solid #6BD1FF 2px;
    }
  }
`;

const Banner = () => {
  return (
    <ContainerEstilizado>
      <CardEstilizado>
        <BlocoTexto>
          <Categoria>FRONT END</Categoria>
          <h1>SEO com React</h1>
          <p>
            Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar
            uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas
            dicas sobre performance e de quebra conhecer uma plataforma
            sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos
            nesse vídeo feito com todo o carinho do mundo construindo uma
            "Pokedex"!
          </p>
        </BlocoTexto>
        <VideoPlayer controls poster={videoCoverUrl}>
          <source src={videoUrl} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </VideoPlayer>
      </CardEstilizado>
    </ContainerEstilizado>
  );
};

export default Banner;
