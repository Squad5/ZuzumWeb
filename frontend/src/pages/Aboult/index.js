import React from 'react';

import Amanda from '../../assets/images/Aboult/AmandaRegina.png';
import RenanM from '../../assets/images/Aboult/RenanMarques.png';
import Isaque from '../../assets/images/Aboult/Isaque.png';
import RenanV from '../../assets/images/Aboult/RenanVictor.png';

import Nav from '../../components/Nav';
import './styles.css';

const App = () => {
    return (
        <>
            <Nav id="nav-sobre"/>
            <main className='containerAboult'>
                <section id='sectionAboult'>
                    <h1>BEM VINDO(A) AO ZUZUM</h1>
                    <p id='sub-title'>Plataforma totalmente intuitiva voltada para<br />
                    crianças de 6 à 9 anos. Nosso objetivo é enfrentar o abuso.<br />
                    sexual infantil através da educação.</p>
                    <div id='box-history1'>
                        <div id='figureIcon1'><i className="fas fa-calendar-alt"></i></div>
                        <div>
                            <h2>Onde tudo começou</h2>
                            <p>Um grupo de alunos do Recode Pro assumiu como objetivo<br />
                            criar uma solução tecnológica de impacto social com base
                            na ODS 16 da ONU - Organização das Nações Unidas.
                            Em particular a 16.2 que visa acabar com o abuso, exploração
                            e tráfico e todas formas de violência e tortura contra crianças.</p>
                        </div>
                    </div>
                    <div id='box-history2'>
                        <div>
                            <h2>O processo de ideação</h2>
                            <p>Baseado no público alvo (crianças de 6 à 9 anos), fizemos pesquisas para 
                            compreendermos melhor o problema e conversamos com diversos profissionais para
                            validarem nossas ideias. Das cores às interações propostas, toda plataforma
                            foi especialmente desenvolvida para atender a esse público. Diferente de outras
                            aplicações, lidamos com as partes íntimas de forma clara e objetiva, sem tabus
                            ou apelidos.</p>
                        </div>
                        <div id='figureIcon2'><i className="far fa-lightbulb"></i></div>
                    </div>
                    <div id='box-history3'>
                        <div id='figureIcon3'><i className="far fa-handshake"></i></div>
                        <div>
                            <h2>Parceiros</h2>
                            <p>Em nossas pesquisas contatamos o projeto Eu Me Protejo que é nosso atual parceiro.
                            Esse projeto é composto por mais de 50 profissionais voluntários de diversas áreas como
                            educação, medicina, psicologia, diretos humanos entre outros, que nos ajudaram a formar
                            uma trilha de aprendizagem lógica e condizente com a proposta.
                            </p>
                        </div>
                    </div>
                    <div id='box-history4'>
                        <div>
                            <h2>Planejamento futuro</h2>
                            <p>Acreditamos que para atingirmos mais crianças e trabalharmos de forma mais eficaz,
                                precisamos levar nossa aplicação às escolas. Vamos criar mais módulos para oferecer
                                um aprendizado completo, abordando temas como sentimentos, em quem confiar e pedir
                                ajuda e muitos outros. Por fim, pretendemos criar interações para mais idades,
                                possibilitando conhecimento para todas as faixas etárias.
                            </p>
                        </div>
                        <div id='figureIcon4'><i className="fas fa-rocket"></i></div>
                    </div>
                </section>
                <header id='titleDev'>DESENVOLVIDO POR</header>
                <section id='sectionAboult3'>
                    <div className='perfil-container'>
                        <figure className='perfil'>
                            <img src={RenanV} />
                        </figure>
                        <figcaption>Renan Victor</figcaption>
                        <div className='redes-sociais'>
                            <a href="https://github.com/Renaan00" target='_Blank'><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/renan-victor-rodrigues-da-silva/" target='_Blank'><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className='perfil-container'>
                        <figure className='perfil'>
                            <img src={Amanda} />
                        </figure>
                        <figcaption>Amanda Regina</figcaption>
                        <div className='redes-sociais'>
                            <a href="https://github.com/amandareginas" target='_Blank'><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/amandaregina/" target='_Blank'><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className='perfil-container'>
                        <figure className='perfil'>
                            <img src={Isaque} />
                        </figure>
                        <figcaption>Isaque Gabriel</figcaption>
                        <div className='redes-sociais'>
                            <a href="https://github.com/IsaqueGabriel1" target='_Blank'><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/isaque-gabriel-6203951a1/" target='_Blank'><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className='perfil-container'>
                        <figure className='perfil'>
                            <img src={RenanM} />
                        </figure>
                        <figcaption>Renan Marques</figcaption>
                        <div className='redes-sociais'>
                            <a href="https://github.com/Re04nan" target='_Blank'><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/renan-marques-dev/" target='_Blank'><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </section>
                <section id='sectionAboult2'>
                    <cite>
                        <h4>"Aprendemos que apesar dos recursos limitados,
                        através de poucas linhas de código, podemos transformar 
                        e impactar vidas."</h4>
                    </cite>
                </section>
            </main>
        </>
    )
}
export default App;
