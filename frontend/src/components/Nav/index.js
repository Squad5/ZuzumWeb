import React from 'react';
import { Link } from 'react-router-dom';
import abelha from '../../assets/images/abelha.png';
import './styles.css'

const Nav = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark menu" id={props.id}>
                <Link to="/" className="navbar-left">
                    <img src={abelha} width="60" height="60" alt="logo zuzum" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                    <Link to="/" className="navbar-brand flex-grow-1 p-2 text-light ml-4" id="logo-name"><h1>ZUZUM</h1></Link>
                    <h1 className="title-fase">{props.children}</h1>
                    <ul className="navbar-nav mr-3 mt-3" id="collapsed-itens">
                        <li className="nav-item active" id="page">
                            <Link to="/"><i className="fas fa-home" id="page-icon"/></Link>
                            <Link to="/" className="nav-link" id="page-name">início</Link>
                        </li>
                        <li className="nav-item active" id="page">
                            <Link to="/Sobre"><i className="fas fa-book-open" id="page-icon"/></Link>
                            <Link to="/Sobre" className="nav-link" id="page-name">sobre</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;