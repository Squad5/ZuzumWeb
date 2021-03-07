import React, { useState } from 'react';
import API from '../../axios/Api';
import { useHistory } from 'react-router-dom';

import Nav from '../../components/Nav';

import '../../components/css/global.css';
import abelha from '../../assets/images/bzzzz.png';
import { Link } from 'react-router-dom'
import './styles.css';

const Register = () => {
    const history = useHistory();
    const [msg, setMsg] = useState();
    const [cadastro, setCadastro] = useState({
        nome: "",
        email: "",
        senha: ""
    });

    const controleCadastro = (event) => {
        setCadastro({
            ...cadastro,
            [event.target.name]: event.target.value
        });
    }

    async function upCadastro(event) {
        event.preventDefault();

        let campo1 = document.getElementById('senha').value;
        let campo2 = document.getElementById('confirmaSenha').value;
        if (campo1 === campo2) {
            await API.post('/Cadastro.php', cadastro)
                .then((response) => {
                    if (response.data.sucess === true) {
                        setMsg(true);
                        resInfo(msg);
                        alert("Cadastro efetuado com sucesso!");
                        history.push("/login")
                    } else {
                        setMsg(false);
                        resInfo(msg);
                    }
                })
        } else {
            setMsg(false);
            resInfo(msg);
        }
    }

    function resInfo(msg) {
        setTimeout(() => {
            setMsg(msg);
        }, 3000);
    }

    return (
        <>
            <div id="cor-de-fundo">
                <Nav id="nav-cadastro"/>
                <main className="temp2">
                    <div id="section1">
                        {
                            msg === false && <div className="alert alert-danger w-76 ml-5" role="alert" id="erro"> ERRO AO EFETUAR CADASTRO</div>
                        }
                        <figure className="caixaBee">
                            <img id="abelha" alt="Bee" src={abelha} />
                        </figure>
                    </div>
                    <div id="section2">
                        <div id="caixaRegister">
                            <form onSubmit={upCadastro}>
                                <label id="tituloC">CADASTRAR</label>
                                <input onChange={controleCadastro} className="inputC" type="text" name="nome" placeholder="NOME DE USUÁRIO"></input>
                                <input onChange={controleCadastro} className="inputC" type="text" name="email" placeholder="E-MAIL DO RESPONSÁVEL"></input>
                                <input onChange={controleCadastro} className="inputC" id="senha" type="password" name="senha" placeholder="SENHA"></input>
                                <input className="inputC" type="password" id="confirmaSenha" name="confirme" placeholder="CONFIRMAR SENHA"></input>
                                <Link to="/login"><p className="text-white mt-3">Já possui uma conta? <span id="clique-aqui">Clique aqui.</span></p></Link>
                                <button type="submit" className="btn" nome="CRIAR" id="btnCad">CRIAR CONTA</button>
                            </form>
                        </div>
                    </div>
                    <div id="section3"></div>
                </main>
            </div>
        </>
    )
}

export default Register;