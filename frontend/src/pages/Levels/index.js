import React from "react";
import Nav from '../../components/Nav'

import '../../components/css/global.css';
import './styles.css';
import { Link } from 'react-router-dom'
import bz from '../../assets/images/bz.png'
import fase1 from '../../assets/images/fase-1.png'
import fase2 from '../../assets/images/fase-2.png'
import fase3 from '../../assets/images/fase-3.png'

const Levels = ({match}) => {
    const id = match.params.id;
    return (
        <>
            <div id="cor-de-fundo">
                <Nav id="nav-fases"/>
                <div>
                    <div id="header">
                        <div id="block1"><div id="vazio"></div></div>
                        <div id="block2"><p id="page-title">FASES</p></div>
                        <div id="block3"><img src={bz} alt="abelha-fase" id="abelha"/></div>
                    </div>
                    <div id="fases" className="d-flex justify-content-around mr-5 ml-5">
                        <section>
                            <Link to={`/fase1/${id}`}><img src={fase1} className="rounded-circle" alt="imagemFases" id="img-fases" /></Link>
                        </section>
                        <section>
                            <Link to={`/fase2/${id}`}><img src={fase2} className="rounded-circle" alt="imagemFases" id="img-fases" /></Link>
                        </section>
                        <section>
                            <Link to={`/fase3/${id}`}><img src={fase3} className="rounded-circle" alt="imagemFases" id="img-fases" /></Link>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Levels;