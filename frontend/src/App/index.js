import React from "react";
import '../components/css/global.css';
import slide1 from '../assets/images/carrossel1.png';
import slide2 from '../assets/images/carrossel2.png';
import slide3 from '../assets/images/carrossel3.png';
import emp from '../assets/images/emp-logo.webp';
import bzz from '../assets/images/bzz.png';
import { Link } from 'react-router-dom'
import Nav from '../components/Nav';

import './styles.css'

const Index = () => {
    return (
        <>
            <div id="cor-de-fundo">
                <Nav id="nav-home"/>
                <div id="spacing"/>
                <div className="mt-5">
                    <div id="pt-1">
                        <section id="sec-1"><img src={bzz} id="bzz"/></section>
                        <section id="sec-2">
                            <div id="carouselExampleControls" className="carousel slide carr" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" id="car-rounded" src={slide1} alt="Primeiro Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" id="car-rounded" src={slide2} alt="Segundo Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" id="car-rounded" src={slide3} alt="Terceiro Slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Anterior</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Próximo</span>
                                </a>
                            </div>
                            <div className="mt-5 mb-4 row justify-content-md-center">
                                <Link to="/login">
                                    <button id="button-start" className="btn">
                                        <i className="fas fa-play mr-2"/>COMEÇAR
                                    </button>
                                </Link>
                            </div>
                        </section>
                        {/* <section id="sec-3"></section> */}
                    </div>
                    <div id="pt-2" className="text-center mt-4">
                        <div id="pt-2-espaco" className="bg-success" />
                        <h1 id="parceiro">PARCEIRO</h1>
                        <img src={emp} className="" id="logo-emp" alt="logo Eu Me Protejo" />
                        <p id="txt-emp" className="">"Eu Me Protejo é um projeto criado para que as crianças com e sem deficiência
                        aprendam que seus corpos são seus e devem ser respeitados. Ensina a criança a
                        reconhecer e se proteger de abusos. Explica que, se algo acontecer, as crianças
                        devem contar a um adulto responsável e em quem confiem. Também orienta que, desde pequenos,
                        todos devem respeitar os corpos dos outros e não recorrer a nenhuma forma de violência."
                        </p>
                        <a href="https://www.eumeprotejo.com/" id="emp-link" target="_blank">CLIQUE PARA CONHECER!</a>
                    </div>
                    <footer id="footer">
                        <div className="d-flex justify-content-around text-light mt-5 pt-5">
                            <div className="">
                                <h4>CONTATO</h4>
                                <div className="d-block">
                                    <div id="contato-text"><i className="fab fa-instagram rounded mr-1" id="contato-icon"/> @zuzum</div>
                                    <div id="contato-text"><i className="fab fa-facebook-f rounded mr-1" id="contato-icon"/> /zuzum</div>
                                    <div id="contato-text"><i className="far fa-envelope rounded mr-1" id="contato-icon"/> zuzum@gmail.com</div>
                                </div>
                            </div>
                            <div>
                                <Link to="/login" className="link-footer">LOGIN</Link>
                            </div>
                            <div>
                                <Link to="/Sobre" className="link-footer">SOBRE</Link>
                            </div>
                        </div>
                        <div id="copy">© Todos os direitos reservados Squad 5 | 2021</div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Index;