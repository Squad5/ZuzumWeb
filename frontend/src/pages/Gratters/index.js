import React from 'react';

import fireworks from '../../assets/images/Phase1/fireworks.png';
import beeGratters from '../../assets/images/Phase1/bee-gratters.png';
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav';
import '../LevelOne/styles.css';
import './styles.css';

const Gratters = (props) => {
    const id = props.match.params.id;
    return (
        <>
            <Nav id="nav-concluido">
            </Nav>
            <main className='levelOne3_container'>
                <section className='gratters_container'>
                    <h2 className='titleGratters'>FASE COMPLETADA<br />COM SUCESSO!</h2>
                    <figure className='beeGratters'>
                        <img src={beeGratters} />
                    </figure>
                    <figure className='fireworks'>
                        <img src={fireworks} />
                    </figure>
                </section>
                <div id='nextLevel' style={{ visibility: 'visible' }}>
                    <Link to={`/fases/${id}`}><button className="fas fa-long-arrow-alt-right"></button></Link>
                </div>
            </main>
        </>
    );
}
export default Gratters;