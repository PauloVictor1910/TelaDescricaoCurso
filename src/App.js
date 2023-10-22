import React from "react";
import "./App.css";
import imagem from "./teste.png";
import FavoritoButton from "./FavoritoButton";
import imagem01 from "./teste01.png";
import ShareButton from "./ShareButton";

function App() {
  return (
    <div>
      <p> adicionar nav bar </p>
      <div className="barra">
        <a href="http://www.example.com">
          <img src={imagem} alt="imagem de exemplo" width="40" height="40" />
        </a>
        <h1 className="texto"> CATEGORIA </h1>
      </div>
      <div className="imagem-container">
        <div className="titulo-container">
          <h1 className="titulo"> Nome Curso </h1>
          <FavoritoButton />
          <ShareButton />
        </div>
        <p className="subtitulo"> Duração: 00h | Nivel: xxxxxx </p>
        <div className="instituicao-container">
          <div className="img">
            <img
              src={imagem01}
              alt="imagem de exemplo"
              width="150"
              height="150"
            />
          </div>
          <div className="instituicao">
            <p> Instituição: xxxxxx</p>
            <p> Valor: R$00,00 </p>
            <p> Vagas: xx </p>
            <p> Modelo: xxxxxx </p>
            <p> Proximidade: 0KM </p>
          </div>
        </div>
        <p className="descricao"> Descrição: </p>
        <p className="descricaotexto">
          {" "}
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx{" "}
        </p>
      </div>
      <div className="button-container">
        <button className="button">Increva-se</button>
      </div>
    </div>
  );
}

export default App;
