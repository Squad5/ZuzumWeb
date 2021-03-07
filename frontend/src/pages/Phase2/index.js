import React, {useState} from 'react';
import './styles.css';
import Bumbum from '../../assets/images/Phase2/bumbum.png';
import Abelha from '../../assets/images/Phase2/abelha.png';
import Boca from '../../assets/images/Phase2/boca.png';
import Peito from '../../assets/images/Phase2/peito.png';
import Pepeca from '../../assets/images/Phase2/pepeca.png';
import Pinto from '../../assets/images/Phase2/pinto.png';
import Barriga from '../../assets/images/Phase2/barriga.png';
import Pernas from '../../assets/images/Phase2/pernas.png';
import Bracos from '../../assets/images/Phase2/bracos.png';
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav';

function Inicio(props){
  const idFase = 2;
  const id = props.match.params.id;  
  const [imagem, setImagem] = useState(Bumbum)
  const [contador, setTeste] = useState(1)
  
  const trocaImagem = (event) =>{
    var botao = document.getElementById('btnProximo')
    if(event.target.id = 'btnProximo'){
      setTeste(contador + 1)
      console.log(contador)
        if(contador == 1){
          botao.style.visibility = 'hidden'
          setImagem(Boca)
        }else if(contador == 2){
          botao.style.visibility = 'hidden'
          setImagem(Peito)
        }else if(contador == 3){
          botao.style.visibility = 'hidden'
          setImagem(Pepeca)
        }else if(contador == 4){
          botao.style.visibility = 'hidden'
          setImagem(Pinto)
        }else if(contador == 5){
          botao.style.visibility = 'hidden'
          setImagem(Barriga)
        }
        else if(contador == 6){
          botao.style.visibility = 'hidden'
          setImagem(Bracos)
        }
        else if(contador == 7){
          botao.style.visibility = 'hidden'
          setImagem(Pernas)
        }
      }
    }

  const proximaPergunta = (event) => {
    var botao = document.getElementById('btnProximo')
      if(event.target.id == 'btnV'){
        if(contador <= 5){
          botao.style.visibility = 'visible'
        }else if(contador >= 6){
          respostaErrada()
        }
      }else if(event.target.id == 'btnF'){
        if(contador < 5){
          respostaErrada()
        }else if(contador >= 5){
          botao.style.visibility = 'visible'
        }
      }
    }

  const respostaErrada = () =>{
    var modal = document.getElementById('modal-erro')
    modal.style.display = 'flex'
  }

  const fecharModal = () => {
    var modal = document.getElementById('modal-erro')
    modal.style.display = 'none'
  }

  return(
    <>
      <Nav id="nav-fase2">
        <h1>FASE 2</h1>
      </Nav>
      <main className="main">
        <section>
          <div id="secao1">
            <p>CLIQUE NO BOTÃO VERDE SE FOR VERDADEIRO E VERMELHO FALSO.</p>
            <div><img src={Abelha}/></div>
          </div>
        </section>
        <section >
          <div id="secao2">
            <h1>QUIZ</h1>
            <p id="questao">Esta parte do corpo é uma parte íntima?</p>
            <div id="ImgBumbum">
              <img src={imagem}/>
            </div>
            <div id="conteBtn">
              <button id="btnV" onClick={proximaPergunta} className="fas fa-thumbs-up"/>
              <button id="btnF" onClick={proximaPergunta} className="fas fa-thumbs-down"/>
            </div>
          </div>
        </section>
        <section >
          <div id="secao3">
            {
              contador == 8 ?
              <Link to={`/concluido/${id}`}>
                <button id="btnProximo" className="fas fa-long-arrow-alt-right"></button>
              </Link>:
              <button id="btnProximo" className="fas fa-long-arrow-alt-right" onClick={trocaImagem}></button>
            }

          </div>
        </section>
        <section id="modal-erro" className="modal-container">
          <div className="modal">
            <button id="fechar" onClick={fecharModal}>X</button>
            <h2 className="subtitulo">Errou!!<br></br>Tente novamente</h2>
          </div>
        </section>
      </main>
    </>
  )
}
export default Inicio