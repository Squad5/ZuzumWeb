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
                    crianças de 6 à 9 anos. Temos como principal objetivo<br />
                    a educação sexual.</p>
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
                            <p>Focamos principalmente no nosso público alvo. Para
                            chegarmos ao ZUZUM foram necessárias diversas pesquisas e
                            tentativas, estamos bastante felizes com o resultado atual.</p>
                        </div>
                        <div id='figureIcon2'><i className="far fa-lightbulb"></i></div>
                    </div>
                    <div id='box-history3'>
                        <div id='figureIcon3'><i className="far fa-handshake"></i></div>
                        <div>
                            <h2>Parceiros</h2>
                            <p>Conseguimos um parceiro de peso para agregar ainda mais, o
                            EU ME PROTEJO é composto por mais de 50 profissionais voluntários
                            de diversas áreas da educação e outras. O diferencial do
                            ZUZUM é que foi feito especificamente para as crianças, sem a
                            necessidade de acompanhamento por um adulto.
                            </p>
                        </div>
                    </div>
                    <div id='box-history4'>
                        <div>
                            <h2>Planejamento futuro</h2>
                            <p>Introduzir melhorias no app para chegarmos até
                            as escolas com intuito de atingir um maior número
                            de crianças. Fazer da ferramenta uma aliada aos
                            profissionais que trabalham com esse público diariamente.
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
                        <h4>"Aprendemos que apesar de poucos recursos,
                        através de poucas linhas de código podemos impactar
                        e transformar vidas"</h4>
                    </cite>
                </section>
            </main>
        </>
    )
}
export default App;