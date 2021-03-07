import React from 'react';

import girl from '../../assets/images/Phase1/girl.png';
import boy from '../../assets/images/Phase1/boy.png';
import armf from '../../assets/images/Phase1/armf.png';
import armm from '../../assets/images/Phase1/armm.png';
import legf from '../../assets/images/Phase1/legf.png';
import legm from '../../assets/images/Phase1/legm.png';
import headf from '../../assets/images/Phase1/headf.png';
import headm from '../../assets/images/Phase1/headm.png';
import handf from '../../assets/images/Phase1/handf.png';
import handm from '../../assets/images/Phase1/handm.png';
import stomachf from '../../assets/images/Phase1/stomachf.png';
import stomachm from '../../assets/images/Phase1/stomachm.png';
import footf from '../../assets/images/Phase1/footf.png';
import footm from '../../assets/images/Phase1/footm.png';
import beeTeacher from '../../assets/images/Phase1/bee-teacher.png';
import { Link } from 'react-router-dom'

import Nav from '../../components/Nav';
import './styles.css';

const LevelOne = ({match}) => {
    const id = match.params.id;
    const [gender, setGender] = React.useState(girl);
    const [arm, setArm] = React.useState(armf);
    const [leg, setLeg] = React.useState(legf);
    const [head, setHead] = React.useState(headf);
    const [hand, setHand] = React.useState(handf);
    const [stomach, setStomach] = React.useState(stomachf);
    const [foot, setFoot] = React.useState(footf);
    const [counter, setCaunter] = React.useState(0);
    function changeGender(event) {
        if (event.target.id !== 'F') {
            setGender(boy);
            setArm(armm);
            setLeg(legm);
            setHead(headm);
            setHand(handm);
            setStomach(stomachm);
            setFoot(footm);
        } else {
            setGender(girl);
            setArm(armf);
            setLeg(legf);
            setHead(headf);
            setHand(handf);
            setStomach(stomachf);
            setFoot(footf);
        }
    }
    function search(event) {
        setCaunter(counter + 1);
        let search = event.target.id;
        let arm = document.getElementById("arm");
        let head = document.getElementById("head");
        let foot = document.getElementById("foot");
        let leg = document.getElementById("leg");
        let hand = document.getElementById("hand");
        let stomach = document.getElementById("stomach");

        if (counter >= 5) {
            let button = document.getElementById("nextLevel");
            button.style.visibility = "visible";
        }

        if (arm.id === 'arm' && search === '1') {
            arm.style.visibility = "visible";
            arm.style.zIndex = 100;
        } else if (head.id === 'head' && search === '2') {
            head.style.visibility = "visible";
            head.style.zIndex = 100;
        } else if (foot.id === 'foot' && search === '3') {
            foot.style.visibility = "visible";
            foot.style.zIndex = 100;
        } else if (leg.id === 'leg' && search === '4') {
            leg.style.visibility = "visible";
            leg.style.zIndex = 100;
        } else if (hand.id === 'hand' && search === '5') {
            hand.style.visibility = "visible";
            hand.style.zIndex = 100;
        } else if (stomach.id === 'stomach' && search === '6') {
            stomach.style.visibility = "visible";
            stomach.style.zIndex = 100;
        }
    }
    return (
        <>
            <Nav id="nav-fase1">
                <h1>FASE 1</h1>
            </Nav>
            <main className='levelOne_container'>
                <section className='side-right'>
                    <header id='titleLevelOne'>PARTES NÃO ÍNTIMAS<br /> DO CORPO</header>
                    <figure className='bodyAvatar'>
                        <img src={gender} alt='Avatar' />
                    </figure>
                    <figure className='circle arm'>
                        <span id='1' onClick={search} className="fas fa-search body"></span>
                        <img id='arm' src={arm} alt='Braço' />
                    </figure>
                    <figure className='circle head'>
                        <span id='2' onClick={search} className="fas fa-search body"></span>
                        <img id='head' src={head} alt='Cabeça' />
                    </figure>
                    <figure className='circle foot'>
                        <span id='3' onClick={search} className="fas fa-search body"></span>
                        <img id='foot' src={foot} alt='Pé' />
                    </figure>
                    <figure className='circle leg'>
                        <span id='4' onClick={search} className="fas fa-search body"></span>
                        <img id='leg' src={leg} alt='Perna' />
                    </figure>
                    <figure className='circle hand'>
                        <span id='5' onClick={search} className="fas fa-search body"></span>
                        <img id='hand' src={hand} alt='Mão' />
                    </figure>
                    <figure className='circle stomach'>
                        <span id='6' onClick={search} className="fas fa-search body"></span>
                        <img id='stomach' src={stomach} alt='Barriga' />
                    </figure>
                    <div id='nextLevel'>
                        <Link to={`/fase1-2/${id}`}><button className="fas fa-long-arrow-alt-right"></button></Link>
                    </div>
                    <div className='groupBtnSex'>
                        <button id='F' onClick={changeGender} className="fas fa-female"></button>
                        <button id='M' onClick={changeGender} className="fas fa-male"></button>
                    </div>
                </section>
                <section className='side-left'>
                    <h3>CLIQUE SOBRE<br />AS PARTES<br />PARA<br />DESCOBRIR</h3>
                    <figure>
                        <img src={beeTeacher} alt='Bee Teacher' />
                    </figure>
                </section>
            </main>
        </>
    );
}
export default LevelOne;