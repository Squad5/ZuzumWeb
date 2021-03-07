import React from 'react';

import girl from '../../assets/images/Phase1/girl2.png';
import boy from '../../assets/images/Phase1/boy2.png';
import chestf from '../../assets/images/Phase1/chestf.png';
import mouthf from '../../assets/images/Phase1/mouthf.png';
import mouthm from '../../assets/images/Phase1/mouthm.png';
import buttf from '../../assets/images/Phase1/buttf.png';
import buttm from '../../assets/images/Phase1/buttm.png';
import pepecaf from '../../assets/images/Phase1/pepecaf.png';
import chickm from '../../assets/images/Phase1/chickm.png';
import beeTeacher from '../../assets/images/Phase1/bee-teacher.png';
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav';
import './styles.css';
import '../LevelOne/styles.css';

const LevelOne2 = ({match}) => {
    const idFase = 1;
    const id = match.params.id;
    const [gender, setGender] = React.useState(girl);
    const [chest, setChest] = React.useState(chestf);
    const [mouth, setMouth] = React.useState(mouthf);
    const [butt, setButt] = React.useState(buttf);
    const [intimate, setIntimate] = React.useState(pepecaf);
    const [counter, setCaunter] = React.useState(0);
    function changeGender(event) {
        if (event.target.id !== "F") {
            document.getElementById("chest").style.visibility = "hidden";
            document.getElementById("chestm").style.visibility = "hidden";
            event.target.value = "active";
            document.getElementById("F").value = "";
            setGender(boy);
            setMouth(mouthm);
            setButt(buttm);
            setIntimate(chickm);
        } else {
            document.getElementById("chestm").style.visibility = "visible";
            event.target.value = "active";
            document.getElementById("M").value = "";
            setGender(girl);
            setChest(chestf);
            setMouth(mouthf);
            setButt(buttf);
            setIntimate(pepecaf);
        }
    }
    function search(event) {
        setCaunter(counter + 1);
        let search = event.target.id;
        let chest = document.getElementById("chest");
        let intimate = document.getElementById("intimate");
        let mouth = document.getElementById("mouth");
        let butt = document.getElementById("butt");
        let girl = document.getElementById("F");
        let boy = document.getElementById("M");

        if (girl.value === 'active' && counter >= 3) {
            let button = document.getElementById("nextLevel");
            button.style.visibility = "visible";
        } else if (boy.value === 'active' && counter >= 2){
            let button = document.getElementById("nextLevel");
            button.style.visibility = "visible";
        }

        if (chest.id === 'chest' && search === '1') {
            chest.style.visibility = "visible";
            chest.style.zIndex = 100;
        } else if (intimate.id === 'intimate' && search === '2') {
            intimate.style.visibility = "visible";
            intimate.style.zIndex = 100;
        } else if (mouth.id === 'mouth' && search === '3') {
            mouth.style.visibility = "visible";
            mouth.style.zIndex = 100;
        } else if (butt.id === 'butt' && search === '4') {
            butt.style.visibility = "visible";
            butt.style.zIndex = 100;
        }
    }
    return (
        <>
            <Nav id="nav-fase1-2" >
                <h1>FASE 1</h1>
            </Nav>
            <main className='levelOne_container'>
                <section className='side-right'>
                    <header id='titleLevelOne2'>PARTES ÍNTIMAS<br /> DO CORPO</header>
                    <figure className='bodyAvatar'>
                        <img src={gender} alt='Avatar' />
                    </figure>
                    <figure id="chestm" className='circle chest'>
                        <span id='1' onClick={search} className="fas fa-search body"></span>
                        <img id='chest' src={chest} alt='Peito'/>
                    </figure>
                    <figure className='circle intimate'>
                        <span id='2' onClick={search} className="fas fa-search body"></span>
                        <img id='intimate' src={intimate} alt='Parte Íntima'/>
                    </figure>
                    <figure className='circle mouth'>
                        <span id='3' onClick={search} className="fas fa-search body"></span>
                        <img id='mouth' src={mouth} alt='Boca' />
                    </figure>
                    <figure className='circle butt'>
                        <span id='4' onClick={search} className="fas fa-search body"></span>
                        <img id='butt' src={butt} alt='Bumbum' />
                    </figure>
                    <div id='nextLevel'>
                        <Link to={`/concluido/${id}`}><button className="fas fa-long-arrow-alt-right"></button></Link>
                    </div>
                    <div className='groupBtnSex'>
                        <button value='active' id='F' onClick={changeGender} className="fas fa-female"></button>
                        <button value='' id='M' onClick={changeGender} className="fas fa-male"></button>
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
export default LevelOne2;